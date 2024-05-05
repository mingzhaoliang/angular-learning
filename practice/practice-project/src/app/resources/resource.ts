export interface Resource {
	resourceName: string;
	resourceType:
		| "Article"
		| "Guide To Practice"
		| "Course"
		| "Lecture"
		| "Explainer";
	validDate: Date;
	ausmedLibraryResource: boolean;
	educators: string;
	duration: number;
}
