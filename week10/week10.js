const LINKS = [
     {
         label: "Final Project Snapshots",
         url: "final/index.html"
     }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes

const MDN_FORM_VALIDATION_NOTES = [
    `Client-side validation is great for speed but should not be the last line of defense`,
    `Never trust form data from a client.  The network request can be manipulated.`,
    `required, minlength, maxlength, min, max, type, pattern can be used for form validation.`,
    `:valid and :invalid and :required pseudo-classes can format form data`,
    `Most browsers support the Constraint Validation API, which consists of a set of methods and properties available on the following form element DOM interfaces: HTMLButtonElement, HTMLFieldSetElement, HTMLInputElement, HTMLOutputElement, HTMLSelectElement, HTMLTextAreaElement`,
    `validationMessage: Returns a localized message describing the validation constraints that the control doesn't satisfy (if any). If the control is not a candidate for constraint validation (willValidate is false) or the element's value satisfies its constraints (is valid), this will return an empty string.`,
    `validity: Returns a ValidityState object that contains several properties describing the validity state of the element. You can find full details of all the available properties in the ValidityState reference page`,
    `checkValidity(): Returns true if the element's value has no validity problems; false otherwise. If the element is invalid, this method also fires an invalid event on the element.`,
    `reportValidity(): Reports invalid field(s) using events. Useful in combination with preventDefault() in an onSubmit event handler`
];

buildList(MDN_FORM_VALIDATION_NOTES, "mdn-form-validation");

const MDN_FETCH_NOTES = [
    `The Fetch API can be used to access and manipulate parts of HTTP pipeline, such as requests and responses.`,
    `fetch() will only reject on network failure, not on status codes.`,
    `fetch('http://example.com/movies.json')  .then(response => response.json())  .then(data => console.log(data));`,
    `fetch() has a list of options that can be found in the https://developer.mozilla.org/en-US/docs/Web/API/fetch`,
    `fetch can be used to POST data or upload a file &ltinput type="file" /&gt`,
    `response.ok indicates the network response was ok`,
    `Request() accepts exactly the same parameters as the fetch() method.`,
    `The Headers interface allows you to create your own headers object via the Headers() constructor. A headers object is a simple multi-map of names to values.`,
    `Since headers can be sent in requests and received in responses, and have various limitations about what information can and should be mutable, headers' objects have a guard property.`
];

buildList(MDN_FETCH_NOTES, "mdn-fetch");