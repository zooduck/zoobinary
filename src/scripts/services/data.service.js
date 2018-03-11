import {zoobinary} from "../global/zoobinary";

export const dataService = (function dataService () {
	
	const $init = () => {		
		zoobinary.data = {
			martingaleBets: [],
			martingaleIterationSlot: 0,
			martingaleIterationNumber: 1
		}
	}

	$init();

	const $get = () => {
		return zoobinary.data;
	};

	const $set = function $set (data = {}) {
		for (let key in data) {
			let val = data[key];			
			if (val) zoobinary.data[key] = val;					
		}
		console.log("zoobinary updated:", zoobinary);
	};

	console.log("zoobinary", zoobinary);

	return function () {
		return {
			get: () => {
				return $get();
			},
			set: (data = {}) => {
				return $set(data);
			}
		}
	}
})();