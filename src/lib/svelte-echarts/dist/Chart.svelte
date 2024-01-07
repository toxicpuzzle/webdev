<script context="module">
// @ts-nocheck
import * as echarts from "echarts";
const DEFAULT_OPTIONS = {
  theme: void 0,
  renderer: "canvas"
};
// @ts-ignore
export function chartable(element, echartOptions) {
  // @ts-ignore
  const { theme, renderer, options } = {
    ...DEFAULT_OPTIONS,
    ...echartOptions
  };
  const echartsInstance = echarts.init(element, theme, { renderer });
  echartsInstance.setOption(options);
  function handleResize() {
    echartsInstance.resize();
  }
  window.addEventListener("resize", handleResize);
  return {
    destroy() {
      echartsInstance.dispose();
      window.removeEventListener("resize", handleResize);
    },
    // @ts-ignore
    update(newOptions) {
      echartsInstance.setOption({
        ...echartOptions.options,
        ...newOptions.options
      });
    },
    getInstance(){
      return echartsInstance;
    }
  };
}
</script>

<script>export // @ts-ignore
let options;
export let { theme, renderer } = DEFAULT_OPTIONS;
</script>

<div class="chart" use:chartable={{ renderer, theme, options }} />

<style>
  .chart {
    height: 100%;
    width: 100%;
  }
</style>
