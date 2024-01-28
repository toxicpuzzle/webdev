import type { PlotData } from 'plotly.js';

export const traces: Partial<PlotData>[] = [
    {
        x: [1, 2, 3, 4, 5, 4.98],
        y: ['AT1', 'AT2', 'AT3', 'AT4', 'AT5', 'AT5'],
        type: 'scatter',
        mode: 'markers',
        name: 'Order Submission',
        marker: {
            color: ["blue", "green", "yellow", "red", "orange", "orange"],
            symbol: ["x", "circle", "cross", "square", "x", "x"],
            size: [20, 10, 5,5,15,15],
            line: {
                width: [5,1,1,1,1,1],
                color: ["grey","red","blue","green","yellow", "grey"]
            }
        }
        
        
        // [
        //     // color: 'blue'
        //     {
        //         color: "blue"
        //     },
        //     {
        //         color: "red"
        //     }
        // ]
    },
    // {
    //     x: [2, 3, 4, 5, 6],
    //     y: ['AT1', 'AT2', 'AT3', 'AT4', 'AT5'],
    //     type: 'scatter',
    //     mode: 'markers',
    //     name: 'Order Validation',
    //     marker:  [
    //         // color: 'blue'
    //         {
    //             color: ['blue', 'blue','blue','blue','blue'],
    //             size: [10,10,10,10,10]
    //         }
    //     ]
    // },
    // {
    //     x: [3, 4, 5, 6, 7],
    //     y: ['AT1', 'AT2', 'AT3', 'AT4', 'AT5'],
    //     type: 'scatter',
    //     mode: 'markers',
    //     name: 'Order Execution',
    //     marker:  [
    //         // color: 'blue'
    //         {
    //             color: ['blue', 'blue','blue','blue','blue'],
    //             size: [10,10,10,10,10]
    //         }
    //     ]
    // },
    // {
    //     x: [4, 5, 6, 7, 8],
    //     y: ['AT1', 'AT2', 'AT3', 'AT4', 'AT5'],
    //     type: 'scatter',
    //     mode: 'markers',
    //     name: 'Order Settlement',
    //     marker:  [
    //         // color: 'blue'
    //         {
    //             color: ['blue', 'blue','blue','blue','blue'],
    //             size: [10,10,10,10,10]
    //         }
    //     ]
    // }
];
