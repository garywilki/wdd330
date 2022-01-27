const LINKS = [
//     {
//         label: "Chaining Demo",
//         url: "chaining.html"
//     }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes

const NTN_CH8_NOTES = [
    "Forms can be accessed using const form = document.forms[0]; or const form = document.getElementsByTagname('form')[0];",
    "const form = document.forms.search; can also be used, but can cause a collision if the form has the same name as a property of the forms object.",
    "const form = document.forms['search']; can be used instead, and permits invalid characters in the name, such as spaces.",
    "const [input,button] = form.elements; returns a collection of elements in the form.",
    "Form Reset is generally considered poor for usability.",
    "Form events: input.addEventListener('focus', () => alert('focused'), false);",
    "Focus triggers on click, blur triggers on click away, change occurs on click away after changing the value.",
    "event.preventDefault() can be used to prevent a submit form from submitting.",
    "default form values can be used by taking advantage of focus and blur events.",
    "autofocus attribute gives focus to an element when page loads.",
    "hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value); This creates an array using spread operator and filters it, returning a new array.",
    "hero.city = form.city.value; can be used if 'city' is a select menu.",
    "Submit button can be disabled while errors are in the form."
];

buildList(NTN_CH8_NOTES, "ntn-ch8");

const NTN_CH12_NOTES = [
    "Encapsulation is about containing code within objects and making methods available to the outside.",
    "Polymorphism is about having objects that share the same method and can override it for their specific purpose.",
    "Inheritance is about objects reusing properties and methods from another object and expanding on it.",
    "Javascript has built-in constructors for objects, arrays, and functions.",
    "Constructor functions and classes have a capitalized name.",
    "Static methods are called by the class directly rather than by instances.",
    "Class prototype property returns an object that we can modify to affect all instances of the associated class, even ones that have been created.",
    "Class declaration are preferred to constructor functions due to some possible mistakes involving rewriting prototypes.",
    "A golden rule to remember is: Never use arrays or objects as a default value in prototype.  This is not a problem if arrays or objects are set as default values from within the constructor function in the class declaration.",
    "Private properties can be named using _propertyName.  They can only be accessed by the class itself.",
    "Non-enumerable properties do not show up in a for-in loop.",
    "Inheritance can be accomplished using 'extends' and super()",
    "Mixins can create merged objects using Object.assign(a,b);",
    "Mixins only do shallow (by reference) copies of arrays and objects.",
    "Mixins can be used to add properties by merging it with an object literal.",
    "Factory functions can be used to generate and return an object.",
    ".bind(this) can be used to maintain scope of 'this' within nested function.",
    "for-of loop will maintain scope of 'this'",
    "Arrow functions have 'this' bound to the original object.",
    "banana = Gorilla.prototype.banana; can be used to inherit single methods."
];

buildList(NTN_CH12_NOTES, "ntn-ch12");

const NTN_CH15_NOTES = [
    "jQuery library uses $ as an alias for its methods to prevent the global scope from getting polluted.",
    "Underscore and Lodash libraries contain utility functions.",
    "Coupling refers to how dependent one piece of code is to the other.  Loosely coupled code enables more flexibility.",
    "Modules are javascript files that export useful code.",
    "Export default allows modules to be imported without being named.  It is how modules were intended to be used.",
    "MVC/MVP and other MV* variants generally follow the same idea of separation of concerns.",
    "Templates can be used to combine placeholders and logic with HTML generation.",
    "Example of popular templating languages include handlebars, pug, ejs, mustache, nunjucks",
    "View Libraries including React and Vue.js are designed to handle just the View portion of MVP.  They utilize a virtual DOM that only updates the elements that need to be updated, resulting in fast rendering.",
    "Controversy around view libraries includes how they utilize inline logic that contradicts MVP designs.",
    "Package managers include npm.",
    "npm list to list installed packages.",
    "Minification can compress files to help them run faster for production code, but well-commented and organized code should be used for development.",
    "Common folder structure includes src (source), dist (distribution), lib (libraries, usually placed in src), and within the source folder: css, js, views, tests."
];

buildList(NTN_CH15_NOTES, "ntn-ch15");