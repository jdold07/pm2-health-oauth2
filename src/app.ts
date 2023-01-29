import * as pmx from "pmx"
import { Health, stopIfEx } from "./health"

pmx.initModule(
  {
    type: "generic",
    el: {
      probes: false,
      actions: true
    },
    block: {
      actions: true,
      cpu: true,
      mem: true
    }
  },
  async (ex, config) => {
    stopIfEx(ex)

    try {
      await new Health(config).go()
    } catch (ex) {
      stopIfEx(ex)
    }
  }
)
