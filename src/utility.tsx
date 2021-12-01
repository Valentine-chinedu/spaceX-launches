import { dropdownElement, launches } from './types';

export const getYear = (launch: launches): number => {
	const date = new Date(launch.date_utc);
	return date.getFullYear();
};

export const changeDDElementToTrue = (
	arr: dropdownElement[],
	id: number
): dropdownElement[] => {
	const temp = [...arr];

	temp.forEach((element) => (element.selected = false));
	temp[id].selected = true;

	return temp;
};
