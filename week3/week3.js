const LINKS = [
    {
        label: "Chaining Demo",
        url: "chaining.html"
    }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes
const OBJMETH_THIS_NOTES = [
    "Javascript methods can be defined without the 'function' keyword.  This is mostly identical to using 'function' but differs a bit in relation to inheritance.",
    "'this' refers to the calling object (see alternate meanings below)",
    "Functions can be assigned as object methods via object.name = function;",
    "A method can be accessed using dot { admin.f() } or brackets { admin['f'](); }",
    "Unlike most programming languages, 'this' can be used inside a function with no surrounding object.",
    "'this' will point to the object calling a function, or will be 'undefined' if 'use strict'",
    "When called without 'use strict', 'this' will point to the global window object, but that's probably an error.",
    "Arrow functions have no 'this'.  Arrow functions take 'this' from the containing context.",
    "The value of 'this' is determined at run-time."
];

buildList(OBJMETH_THIS_NOTES, "om-this");

const NTN_CH5_NOTES = [
    "Javascript objects have named properties.  If a property's value is a function, it is a method.",
    "Object literals are created in-line using {}",
    "A property can break naming rules by enclosing the name in quotes.",
    "The in operator can be used to check whether an object has a particular property.",
    "'delete' can be used to remove an object's property.",
    "Javascript objects are passed by reference.",
    "Object literals can be passed into functions.",
    "stringify() is used to turn a JS object into JSON.",
    "The Math object can be used for mathematical constants, calculations, and Date objects.",
    "RegExp objects can be created using const pattern = new RegExp('[a-zA-Z]+ing');",
    "pattern.test('joking'); // For testing a string against the pattern."
];

buildList(NTN_CH5_NOTES, "ntn-ch5");

const NTN_CH6_NOTES = [
    "The DOM can be represented as a tree of nodes, treating every HTML tag, attribute, and text as nodes.",
    "In the console, F12 will trigger autocomplete.",
    "Node lists are array-like objects that can be iterated through and have a length property, but they can't be used with all array methods.",
    "document.querySelector('#bats');",
    "Changing the className property of an element by assignment will overwrite all other classes that have already been set on the element.",
    "Toggle can be used to update the existence of a class without affecting other class members.",
    "wonderWoman.classList.toggle('hero');",
    "A function can be used to create an element including any properties we want.",
    "Elements are added to page via element.appendChild(flash);",
    "innerHTML is a property that contains all html and inner tags within an element.",
    "Scripts inserted using innerHTML won't run.",
    "Styles can be updated using superman.style.border = 'red 2px solid';",
    "CSS properties are written using camelCase.",
    "It is preferred to change styles dynamically using classes rather than changing the styles directly.",
    "The parentNode(), previousSibling(), nextSibling(), childNodes() and children() methods can be used to navigate around the DOM tree."
];

buildList(NTN_CH6_NOTES, "ntn-ch6");

const NTN_CH7_NOTES = [
"Event listeners are a non-blocking approach to notifications, as they do not block execution of code.",
"Events are added using document.body.addEventListener('click',doSomething);",
"They can be added globally as well: addEventListener('click', () => alert('You Clicked!'));",
"Whenever an event handler is triggered by an event, the callback function is called. This function is automatically passed an event object as a parameter that contains information about the event.",
"The event object contains ways to learn more about the event, such as which node was targeted or where the event occurred.",
"https://developer.mozilla.org/en-US/docs/Web/Events",
"The mousemove event occurs whenever the mouse moves. It will only occur while the cursor is over the element to which it’s applied.",
"On tablets, a click event can be used instead of a touch event.  Click might be safer for preventing unwanted behavior, such as if the user was trying to zoom.",
"Many touch events are still considered experimental in browsers.",
"preventDefault() can be used in an event callback function to stop the default behavior.  Think carefully before using it.",
"For event propogation (the order that events are fired), bubbling is default and starts at the specific element and cascades to parents.  Capturing can be set to true, and will start at parents and cascade down through descendants.",
"event.stopPropagation() can be used to stop the propagation phase.  This can stop other event listeners from firing.",
"Event delegation is when an event listener is added to a parent element to capture events that happen to its children elements."
];

buildList(NTN_CH6_NOTES, "ntn-ch7");