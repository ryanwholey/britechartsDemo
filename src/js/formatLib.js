
// http://www.kibot.com/api/historical_data_api_sdk.aspx
export const parseStock = (csv) => {
	let dataByLine = csv.split('\n');

	return dataByLine.map((line) => {
		let values = line.split(',');

		return {
			date: new Date(values[0]).toISOString(),
			open: parseFloat(values[1]),
			high: parseFloat(values[2]),
			low: parseFloat(values[3]),
			close: parseFloat(values[4]),
			traded: parseInt(values[5])
		};
	});
};

export const formatStock = (
		stockDates,
		name="Data Set",
		id=1,
		attr='close'
	) => {

	return {
		topicName: name,
		topic: id,
		dates:  stockDates.map((stock) => ({
			date: stock.date,
			value: stock[attr]
		}))
	};
};

export const formatLineData = (data) => {
	if (!Array.isArray(data)) {
		data = [data];
	}

	return {
		dataByTopic: [
			...data
		]
	};
};
