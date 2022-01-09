const LINKS = [
    {
        label: "LocalStorage Demo",
        url: "story_editor.html"
    }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes
const MOBILE_UX_NOTES = [
    "Focus on the smallest, least powerful device to figure out what core content is needed.",
    "Mobile devices are fairly recent but their sales have exploded in the last 10 years and they come in many varieties.  Design needs to accomodate varied screens.",
    "Mobile-first means addressing screen real estate and being touch-friendly - constraints not present on a PC",
    "Be there, be useful, be quick.  Provide them what they want right away.",
    "Reduce steps and help the user feel good.",
    "A massive proportion of the population still uses old technology",
    "Reduce image usage, use SVG and webfonts, minify CSS and JS, GZIP files",
    "Move primary controls to somewhere easier to reach, simple and fluid",
    "Mobile friendly forms are easier to click and don't appear cramped.  Reduce cognitive load.",
    "Enable autocomplete",
    "Don't hide mobile passwords by default, but do provide the option. Mobile login issues are much more prevalent than PC.",
    "Don't force copy and paste",
    "Mobile ads should be small and simple.  Video ads or static background images can be effective.",
    "Stop using pop-ups and pop-overs"
];

buildList(MOBILE_UX_NOTES, "mobile-ux-notes");

const DOING_STUFF_NOTES = [
    "LocalStorage in Javascript stores in key-value pairs.",
    "According to <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage'>MDN Web Docs</a>, localStorage is read-only but is accessed via functions such as setItem()",
    "LocalStorage differs from Session Storage in that it persists across browser sessions."
];

buildList(DOING_STUFF_NOTES, "doing-stuff-notes");