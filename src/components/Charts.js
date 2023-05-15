import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Charts extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Coins current price"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ label: "BTC", y: 27464 },
					{ label: "ETH", y: 1828.62 },
					{ label: "USDT", y: 1.001 },
					{ label: "BNB", y: 315.71 },
					{ label: "USDC", y: 1.002 },
					{ label: "XRP", y: 0.428 },
					{ label: "ADA", y: 0.371 }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
				containerProps={{ width: '100%', height: '300px'}} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
 
		</div>
		);
	}
}
export default Charts;