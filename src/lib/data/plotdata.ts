import type { PlotData } from 'plotly.js';

export const traces: Partial<PlotData>[] = [
    {
        x: [1, 2, 3, 4, 5],
        y: ['AT1', 'AT2', 'AT3', 'AT4', 'AT5'],
        type: 'scatter',
        mode: 'markers',
        name: 'Order Submission',
        marker: {
            // color: 'blue'
            color: ['blue', 'blue','blue','blue','blue'],
            size: [10,10,10,10,10]
        }
    },
    {
        x: [2, 3, 4, 5, 6],
        y: ['AT1', 'AT2', 'AT3', 'AT4', 'AT5'],

        type: 'scatter',
        mode: 'markers',
        name: 'Order Validation',
        marker: {
            color: ['green']
        }
    },
    {
        x: [3, 4, 5, 6, 7],
        y: ['AT1', 'AT2', 'AT3', 'AT4', 'AT5'],
        type: 'scatter',
        mode: 'markers',
        name: 'Order Execution',
        marker: {
            color: ['red']
        }
    },
    {
        x: [4, 5, 6, 7, 8],
        y: ['AT1', 'AT2', 'AT3', 'AT4', 'AT5'],
        type: 'scatter',
        mode: 'markers',
        name: 'Order Settlement',
        marker: {
            color: ['purple']
        }
    }
];
