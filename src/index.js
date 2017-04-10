import bar from './_charts/bar'
import line from './_charts/line'
import donut from './_charts/donut'
import sparkline from './_charts/sparkline'

import {
	getDataUrl,
	fetchData
} from './js/utils'

import {
	parseStock,
	formatStock,
	formatLineData
} from './js/formatLib'

import {
	DATA_SERVER,
	BRITECHARTS_SELECTOR
} from './js/constants'

import './_charts/css/britecharts.css'
import './sass/styles.scss'

// d3 v4 does not support es6 module pattern
const d3Selection = require('d3-selection');


/*
 	// YOUR FIRST CHART!

	const barChart = bar();

	barChart
		.margin({
			top: 20,
			left: 80,
			right: 10,
			bottom: 50
		})
		.width(offsetWidth)
		.height(offsetHeight)

	if (container.node()) {
		container.datum(data).call(barChart);
	}
*/
(async function main() {

	const container = d3Selection.select(BRITECHARTS_SELECTOR);
	const {
		offsetWidth,
		offsetHeight
	} = container.node();

	// categorical, timeSingleLine, timeMultiLine, timeSparkline, facebook, netflix, ebay
	const url = getDataUrl(/*ENTER ENDPOINT STRING HERE*/);

	let data = await fetchData(url);
	data = transformData(data);

	// Add chart here!!!

})();


/*
	// EXAMPLE DATA TRANSFORMATION FOR SINGLE CSV

	// parse csv
	data = parseStock(data.csv);
	// format data item with values you want
	data = formatStock(data, 'Ebay', 5);
	// format whole set shape so chart can understand
	data = formatLineData(data);
*/
const transformData = (data) => {

	// transform your data here!

	return data;
};
