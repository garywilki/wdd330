const LINKS = [
     {
         label: "Team Activity - SWAPI",
         url: "team08/api-test.html"
     }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes

const HCRW_CH8_NOTES = [
    `The CSS3 transform property lets you lets you translate, rotate, scale, and/or skew any element on the page.`,
    `Translation functions allow you to move elements left, right, up, or down. These functions are similar to the behavior of position: relative;`,
    `transform: translate(45px, -45px);`,
    `Transforms don’t work on inline elements. But that’s easy enough to fix. We’ll just add display: inline-block;`,
    `transform: scale(1.5, 0.25);`,
    `if you scale inline-block elements, text around it will fail to accommodate it with reflowing`,
    `The order of transform functions does matter: if you rotate before translating, your translate direction will be on the rotated axis.`,
    `Include the transition functions in your default style declaration using the transition properties, including: transition-property, transition-duration, transition-timing-function, and transition-delay.`,
    `The transition properties allow for multiple transitions in one call. For example, if we want to change the color at the same time as changing the rotation and size, we can.`,
    `transition-property: transform, color;`,
    `To animate an element in CSS, you first create a named animation, then attach it to an element in that element’s property declaration block.`,
    `The animation property takes as its value a space-separated list of values for the longhand animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state properties`,
    `If using the shorthand property, be careful with your animation-name. You want to avoid accidentally using any animation property key term such as forwards, running, or alternate.`
];

buildList(HCRW_CH8_NOTES, "hcrw-ch8");

const HCRW_CH12_NOTES = [
    `the width and height attributes determine how large the canvas’s coordinate system is. If we don’t specify width and height, the canvas element will default to a width of 300 and a height of 150. If we set the width and height for a canvas only in CSS, the canvas element will be 300 by 150, and the CSS properties will simply determine how large the box is that displays the image.`,
    `We obtain our drawing context by calling the getContext method and passing it the string "2d", since we’ll be drawing in two dimensions`,
    `draw a rectangle. We can do this by calling the fillRect and strokeRect methods.`,
    `The first step is to begin the path of the circle. We do that with the method beginPath(), which resets the default path for you to begin drawing a new shape`,
    `The signature for the arc method is: arc(x, y, radius, startAngle, endAngle, anticlockwise).`,
    `Our next step is to close the path, as we’ve now finished drawing our circle. We do that with the closePath() method`,
    `we can use the API’s toDataURL method to save our drawing.`,
    `Once we’ve drawn an image on the canvas, we can use the getImageData method from the Canvas API to manipulate the pixels of that image`,
    `It turns out that there’s a mathematical formula for converting RGB to grayscale; you simply need to multiply each of the red, green, and blue values by some specific numbers: grayscale = red * 0.3 + green * 0.59 + blue * 0.11;`
];

buildList(HCRW_CH12_NOTES, "hcrw-ch12");