<script lang="ts">
  import Plot from "../../node_modules/svelte-plotly.js";
  import type {
    Layout,
    PlotData,
    PlotHoverEvent,
    PlotMouseEvent,
    PlotlyHTMLElement,
  } from "plotly.js";
  //   import * as Plotly from 'plotly.js'
  import { SVG, defaults, utils } from '@svgdotjs/svg.js'
  import { traces } from "$lib/data/plotdata.js";

  const layout: Partial<Layout> = {
    title: "event chart",
  };

  let plot: HTMLDivElement = document.createElement("div");
  //   Plotly.newPlot(plot, traces, layout);
  const hoverHandler = function (data: CustomEvent<PlotHoverEvent>): void {
    // console.log(data);
    // const point = data.detail.points[0];
    // console.log("hovering over point with index ", point.pointIndex,
    // 			"on trace", point.data.name, "and trace number", point.curveNumber);
    // const marker = traces[point.curveNumber].marker;
    // if (Array.isArray(traces[point.curveNumber].marker!.color)) {
    // 	(traces[point.curveNumber].marker!.color as string[])[point.pointIndex] = 'black';
    // } else {
    // 	traces[point.curveNumber].marker!.color = ['black'];
    // }
    // console.log(plot);
  };

  const unhoverHandler = function (data: CustomEvent<PlotMouseEvent>): void {
	
    const element = document.getElementsByClassName("scatterlayer mlayer");
    // console.log(element[0].children[0].getElementsByClassName("point")[0]);
    const pathElement =
      element[0].children[0].getElementsByClassName("point")[0];

	// SVG way of adding scaling transform.
	// Problem is that it cannot change css tags with - inside
	const svgPoint = SVG(pathElement);
	svgPoint.stroke({width: 10})
	svgPoint.css({ fill: "yellow", stroke: "black", strokeWidth: "2px", fillOpacity: "0.5" });
	svgPoint.scale(1.2);

	svgPoint.fill({color:'green'})
	svgPoint.stroke({width: 10, color: '#508484'})

	// @ts-expect-error - css selector must be called storkewidth.
	svgPoint.css("stroke-width", "3px")

	console.log(pathElement);
	// Problem is stroke and other attributes are wrapped in style tag so w
	// cannot easily modify them

	// Plain JS way of mainpulating dom
	// let transformAttr = pathElement.getAttribute("transform");
    // // Add a scale transformation to it (e.g., scale 2 times)
    // transformAttr += " scale(2)";
    // // Set the modified transform attribute back
    // pathElement.setAttribute("transform", transformAttr!);
	

	


	// Changing traces will cause rerender and invalidate the plot.
    // element[0].children[0].getElementsByClassName("point")[0].setAttribute("d", "M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z")
    // console.log(data);
    // const point = /\data.detail.points[0];
    // (traces[point.curveNumber].marker!.color as string[])[point.pointIndex] =
    //   "purple";
    // (traces[point.curveNumber].marker!.size as number[])[point.pointIndex] = 5;
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>Test Svelte Plotly App</h1>
  <div class="size-10"></div>
  <Plot
    data={traces}
    {layout}
    on:hover={hoverHandler}
    on:unhover={unhoverHandler}
    bind:element={plot}
  />
</section>

<style>
</style>
