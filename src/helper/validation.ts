export function isValidPostcode(postcode : string){
	const regex = /^([A-Z]{1,2}[0-9]{1,2}[A-Z]? ?[0-9][A-Z]{2})$/i;
	return regex.test(postcode);
}