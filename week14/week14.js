const LINKS = [
     {
         label: "Final Project Snapshots",
         url: "final/index.html"
     },
     {
        label: "Final Project (Hosted Website)",
        url: "https://novalith.herokuapp.com/deva"
     },
     {
        label: "Final Project Video Narration (Youtube)",
        url: "https://www.youtube.com/watch?v=QID-4UVg5ws"
     }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes