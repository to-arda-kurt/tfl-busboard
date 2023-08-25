export function isValidPostcode(postcode : string){
	var regex = /^([A-Z]{1,2}[0-9]{1,2}[A-Z]? ?[0-9][A-Z]{2})$/g;
	return regex.test(postcode);
}