export function info(text: string) {
  console.log(`info:: ${new Date().toLocaleString("en-AU", { hour12: false })}: ${text}`)
}

export function error(text: string) {
  console.error(`error:: ${new Date().toLocaleString("en-AU", { hour12: false })}: ${text}`)
}

export let debug = (text: string) => {
  return
}

export function enableDebugLog() {
  debug = (text: string) => {
    console.log(`debug:: ${new Date().toLocaleString("en-AU", { hour12: false })}: ${text}`)
  }
  debug("debug log enabled in config")
}
