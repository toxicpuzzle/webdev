<script lang="ts">
  import Plot from "../../node_modules/svelte-plotly.js";
  import type {Layout, PlotData, PlotHoverEvent, PlotMouseEvent, PlotlyHTMLElement} from 'plotly.js'
//   import * as Plotly from 'plotly.js'
  import {traces} from '$lib/data/plotdata.js'

  const layout : Partial<Layout> = {
	title: "event chart"
  }

//   let plot: HTMLDivElement = document.createElement('div');
//   Plotly.newPlot(plot, traces, layout);
	const eventHandler = function(data: CustomEvent<PlotHoverEvent>) : void {
		console.log(data);
		const point = data.detail.points[0];
		console.log("hovering over point with index ", point.pointIndex, 
					"on trace", point.data.name, "and trace number", point.curveNumber);
		const marker = traces[point.curveNumber].marker;
		if (Array.isArray(traces[point.curveNumber].marker!.color)) {
			// If markerColor is an array, it's safe to access it by index
			(traces[point.curveNumber].marker!.color as string[])[point.pointIndex] = 'black';
		} else {
			traces[point.curveNumber].marker!.color = ['black'];
		}
	}

	const unhoverHandler = function(data: CustomEvent<PlotMouseEvent>) : void {
		console.log(data);
		const point = data.detail.points[0];
		(traces[point.curveNumber].marker!.color as string[])[point.pointIndex] = 'purple';
		(traces[point.curveNumber].marker!.size as number[])[point.pointIndex] = 5;

		

		// Set to original value - by grabbing the config object
		// const point = data.detail.points[0];
		// console.log("hovering over point with index ", point.pointIndex, 
		// 			"on trace", point.data.name, "and trace number", point.curveNumber);
		// const marker = traces[point.curveNumber].marker;
		// if (Array.isArray(traces[point.curveNumber].marker!.color)) {
		// 	// If markerColor is an array, it's safe to access it by index
		// 	(traces[point.curveNumber].marker!.color as string[])[point.pointIndex] = 'black';
		// } else {
		// 	traces[point.curveNumber].marker!.color = ['black'];
		// }
	}


</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>Test Svelte Plotly App</h1>
  <div class="size-10"></div>
  <Plot data={traces} {layout} on:hover={eventHandler} on:unhover={unhoverHandler}/>
</section>

<style>
</style>
