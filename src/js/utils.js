import {
	DATA_SERVER
} from './constants';

export const getDataUrl = (dataType) => `${DATA_SERVER}${dataType}`;

export async function fetchData(url, options={type: 'json'}) {
	const response = await fetch(url);

	return await response[options.type]();
}

