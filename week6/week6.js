const LINKS = [
     {
         label: "ToDo App (complete)",
         url: "todoapp/index.html"
     }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");

// Notes