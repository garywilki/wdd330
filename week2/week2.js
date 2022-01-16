const LINKS = [
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes
const NTN_CH2_NOTES = [
    "Multiple javascript statements can exist on the same line separated by semi-colons, but this is poor practice in general.",
    "Reserved words: abstract, await, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in instanceof, int, interface, let, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, volatile, void, while, with, yield",
    "Should have been reserved: undefined, NaN, Infinity",
    "'var' is an outdated declaration that should be replaced by let and const",
    "Template literals are surrounded by backticks `` and permit expressions contained in ${ }",
    "Exponentiation in Javascript uses the ** operator",
    "Javascript is weakly typed, meaning that variables do have a definite type but they change when re-declared",
    "Javascript has soft equality where values can be equal even if their types are different.  One can use === for hard equality.",
    "NaN is not equal to itself.  Use Number.isNaN() instead."
];

buildList(NTN_CH2_NOTES, "ntn-ch2");

const NTN_CH3_NOTES = [
    "The spread operator (...) can be placed in front of an array to 'spread' out the elements of that array.  Useful for including the items of an array as parameters for a function or another array.",
    "slice(2,4) creates a subarray starting at index 2 and stopping before index 4 (2 items total)",
    "splice(3,1,'test') destructively removes the value(s) starting at index 3, removing only 1 value, and replacing it with 'test'",
    "Javascript uses garbage collection to avoid memory leaks, but some languages like C++ require you to manually deallocate memory.",
    "Map.set(1,'I') allows you to create key-value pairs in a map.",
    "Ternary operators are of the form (condition) ? (if true) : (if false)"
];

buildList(NTN_CH3_NOTES, "ntn-ch3");

const NTN_CH4_NOTES = [
    "Functions all have a read-only value called name.  This is normally a blank string in anonymous functions, but could also be undefined.",
    "Rounding errors exist in floating-point math due to limitations of computers.",

    "The rest operator (...) can be used as a function parameter to collect all arguments into an array.",
    "Default values in parameters can be assigned using (name='World')",
    "Arrow functions can be declared using const hello = () => alert('Hello World!');",
    "Function declarations are hoisted and can be used immediately.",
    "The 'var' variable is also hoisted by not necessarily declared, so it can cause issues.",
    "Anonymous functions can be used for one-off tasks, but it's usually better to keep them named",
    "Callbacks are functions that can be passed into other functions to be called when the latter finishes.",
    ".forEach enables arrays to be parsed over each element."
];

buildList(NTN_CH4_NOTES, "ntn-ch4");