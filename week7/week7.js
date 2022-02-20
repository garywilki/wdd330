const LINKS = [
     {
         label: "Team Activity - Hike + Comments",
         url: "team07/hiking-complete.html"
     }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes

const NTN_CH11_NOTES = [
    `function.call() can be used to pass an object to a function and set the value of "this" to the object itself.  If the function requires other parameters, they must be passed after the first (object) argument.  (this is similar to how python handles methods)`,
    "function square(x){square.cache} can be used to cache results so the values don't need to be recalculated.  This is called memoization.",    
    "IIFEs (immediately invoked function expressions) are anonymous functions that are called as soon as they are defined.  (function() {})();",    
    "Temporary variables can be declared using const temp.  They can be placed in IIFE ",    
    "IIFEs can be used to initialize things and immediately discard the variables used.",    
    "Strict mode may be placed in an IIFE to only apply strict mode to the contents of that IIFE.  This allows for self-contained code blocks.",    
    "Functions can rewrite themselves, or be stored into other variables to preserve their original states.",    
    "Functions can rewrite themselves based on a browser's capabilities.",    
    "Callback functions can be used for event-driven asynchronous programming.",    
    "Too many callbacks can cause confusion and spaghetti code.",    
    "Promises are a means of holding a future result of an async operation.  They are unsettled (pending) or settled (resolved/rejected).",    
    "async functions can be written as if they were synchronous using the async keyword.  The await keyword ensures that the next function is not executed until the first returns a result.",    
    "Pure functions rely only on arguments, don't change data elsewhere in the program, and have consistent return values."
];

buildList(NTN_CH11_NOTES, "ntn-ch11");

const NTN_CH13_NOTES = [
    "Ajax is used to communicate asynchronously with a server and update pages without reloading.",
    "Cross-origin resource sharing (CORS) allows resource sharing across different domains.  It overrides the default security feature in browsers that doesn't permit data from a different domain.",
    "API (application programming interface) are a collection of methods that allow external access to data from another program or service.",
    "The Fetch API is a living standard that uses promises to obtain data.",
    "Fetch uses response objects which contain headers, url, redirected, and type",
    "fetch('https://example.com/data').then( // code that handles the response ).catch( // code that runs if the server returns an error )",
    `response.blob(), response.json(), response.redirect(""), `,
    "Request object contains url, method, headers, mode, cache, credentials, redirect",
    "The five most common verbs in HTTP are GET, POST, PUT, PATCH, DELETE",
    "The Headers object has() information that can be passed, such as type of resource, cookies, and authentication.",
    "headers.set(), headers.append(), headers.delete()",
    "The FormData() interface allows for info to be submitted in forms using Ajax",
    "The current specification of Ajax is living and changing.  You can also use jQuery to simplify the ajax calls."
];

buildList(NTN_CH13_NOTES, "ntn-ch13");