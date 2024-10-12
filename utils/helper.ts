export const prettyDate = (date: any) => {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		timeStyle: "short",
	}).format(date);
}