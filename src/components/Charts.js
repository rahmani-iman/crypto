import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Charts extends Component {	
    render() {
        const options = {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Bitcoin to Australian Dollar"
            },
            axisX:{
                valueFormatString: "DD MMM",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                title: "Price",
                valueFormatString: "##0.00",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    labelFormatter: function(e) {
                        return "" + CanvasJS.formatNumber(e.value, "##0.00");
                    }
                }
            },
            data: [{
                type: "area",
                xValueFormatString: "DD MMM",
                yValueFormatString: "##0.00",
                dataPoints: [
                  { x: new Date("2023-04-01"), y: 42577.24},
                  { x: new Date("2023-04-08"), y: 41892.39},
                  { x: new Date("2023-04-15"), y: 45199.13},
                  { x: new Date("2023-04-22"), y: 41578.76},
                  { x: new Date("2023-04-29"), y: 44335.19}
                ]
            }]
        }
        
        return (
        <div>
            <CanvasJSChart options = {options} 
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
        );
    }
}
 
export default Charts;
