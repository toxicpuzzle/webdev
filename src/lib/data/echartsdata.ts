import type { EChartsOptions } from "svelte-echarts";

export const echartOptions: EChartsOptions = {
  xAxis: {
    name: "Event Time (Nanoseconds)",
  },
  yAxis: {
    type: "category",
    name: "Aggregation",
  },
  dataset: [
    {
      source: [
        ["AutoTrader", "Order Submission"],
        // Anything here onwards should be inserted at run time.
        // Aggregations though, would require you to remap the data points,
        // and also the series config (just the y axis) which is annoying relative to plotly which you
        // just need to map the datatpoints for.
        ["AT1", 2],
        ["AT1", 7],
        ["AT1", 20],
        ["AT2", 4],
      ],
    },
    {
     source: [
          ["AutoTrader", "Order Execution"],
          // Anything here onwards should be inserted at run time.
          ["AT1", 12],
          ["AT1", 17],
          ["AT1", 17],
          ["AT2", 14],
        ],
    },
  ],
  series: [
    {
      type: "scatter",
      color: "red",
      datasetIndex: 0,
      encode: {
        x: "Order Submission",
        y: "AutoTrader",
      },
    },
    {
      type: "scatter",
      color: "green",
      datasetIndex: 1,
      encode: {
        x: "Order Execution",
        y: "AutoTrader",
      },
    },
  ],
};
