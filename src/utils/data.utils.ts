export const getData = async <T>(url: string): Promise<T> => {
	//this says generic type return value (T - generic type)
	const response = await fetch(url);
	return await response.json();
};
