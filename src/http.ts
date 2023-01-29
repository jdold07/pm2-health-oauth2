import http from "http"
import https from "https"
import Url from "url"

export default function httpFetch(
  url,
  content,
  contentType = "application/json; charset=utf-8",
  secured = true,
  timeoutMS = 10000
) {
  const temp = Url.parse(url),
    options = {
      hostname: temp.hostname,
      port: Number.parseInt(temp.port),
      path: temp.path,
      protocol: temp.protocol,
      method: "GET",
      timeout: timeoutMS,
      rejectUnauthorized: false,
      headers: {}
    }
  if (content) {
    options.method = "POST"
    options.headers["Content-Type"] = contentType
    options.headers["Content-Length"] = Buffer.byteLength(content, "utf8")
  }
  options.rejectUnauthorized = secured
  const requestFn = temp.protocol === "http:" ? http.request : https.request
  return new Promise((resolve, reject) => {
    const request = requestFn(options, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299)
        reject(
          new Error(`http fetch failed, status = ${response.statusCode}, ${response.statusMessage}`)
        )
      else {
        response.setEncoding("utf8")
        let data = ""
        response.on("data", (chunk) => {
          data += chunk
        })
        response.on("end", () => {
          resolve(data)
        })
      }
    })
    request.on("error", (ex) => {
      reject(ex)
    })
    if (content != null) request.write(content)
    request.end()
  })
}
