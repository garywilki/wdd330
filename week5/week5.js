const LINKS = [
     {
         label: "ToDo App (incomplete)",
         url: "todoapp/index.html"
     }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes

const NTN_CH10_NOTES = [
    "System errors, programmer errors, and user errors.",
    "Not all browsers display warnings for Javascript.",
    "Dealing with exceptions is important for good user experience.",
    "'use strict'; can be used as the first line of a javscript file.",
    "Strict mode (as opposed to sloppy mode) will produce more errors and warnings.",
    "'use strict'; can also be applied to a specific function.",
    "(function() { 'use strict'; }()); is a self-invoking function that guarantees that only your code will be forced into strict mode.",
    "Lint tools like JS Lint, JS Hint, and ES Lint can further test javascript quality.",
    "APIs can be wrapped in an if-statement via if (window.holoDeck) to determine browser support before using method calls.",
    "Alert can be used to pause execution of a script and show us values.",
    "console.trace() will provide a stack trace in the console.",
    "The debugger; command can be used to create a breakpoint in code.",
    "Javascript can throw and catch error objects.",
    "Test-driven Development uses tests for code and code refactors.",
    "These tests are usually in separate files.",
    "Jest is a framework for test-driven development."
];

buildList(NTN_CH10_NOTES, "ntn-ch10");