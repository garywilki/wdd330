const LINKS = [
     {
         label: "Team Activity - Audio",
         url: "team09/index-team09.html"
     }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes

const NTN_CH9_NOTES = [
    `Browser Object Model is available through the window object and only makes sense in a browser.`,
    `const global = this; can be used to obtain the global object.`,
    `ES6 made parseInt() and isNaN() methods of the Number object`,
    `window.alert() window.confirm() window.prompt() `,
    `It’s also worth keeping in mind that most browsers allow users to disable any dialogs from repeatedly appearing, meaning they are not a feature to be relied upon.`,
    `window.location points to the current URL and can be changed to redirect the window`,
    `The origin property returns a string that shows the protocol and domain where the current page originated from.`,
    `The window.history property can be used to access information about any previously visited pages in the current browser session.  (Can this allow websites to track ALL of your browsing history?)`,
    `The window.screen object contains information about the screen the browser is displayed on.`,
    `The availHeight and availWidth can be used to find the height and width of the screen, excluding any operating system menus.`,
    `The document.cookie property acts like a special type of string. Assigning another cookie to it won’t overwrite the entire property, it will just append it to the end of the string.`,
    `Applications that contain sensitive information shouldn’t rely on cookies expiring using these methods. Browsers can sometimes hold on to information stored in a cookie that should have expired when the “session restore” feature is used after a crash.`,
    `Many developers use a library such as Cookies.js or jsCookie.`
];

buildList(NTN_CH9_NOTES, "ntn-ch9");

const NTN_CH14_NOTES = [
    `The data- attribute is a way of embedding data in a web page using custom attributes that are ignored by the browser. They’re also private to a page, so are not intended to be used by an external service – their sole purpose is to be used by a JavaScript program.`,
    `If a browser supports the Web Storage API, the window object will have a property called localStorage.  There is also a sessionStorage object that works in the same way, although the data is only saved for the current session.`,
    `navigator.geolocation.getCurrentPosition(youAreHere);`,
    `if(window.Notification) {Notification.requestPermission();}`,
    `notification.close();`,
    `A video clip can be inserted with the video tag, using the src attribute to point to the movie file.`,
    `There are some security and privacy considerations to keep in mind when considering some HTML5 APIs – especially those on the cutting edge that haven't been used 'in the wild' for long. For example, there are concerns that the ambient light API might make it possible to steal data and the battery API has been dropped by Apple and Mozilla due to concerns over user profiling.`,
    `HTML5 APIs progress at a rapid rate ― new APIs are constantly being introduced, and existing APIs often change.`
];

buildList(NTN_CH14_NOTES, "ntn-ch14");