const LINKS = [
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 Notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 Notes",
        url: "week3/index.html"
    },
    {
        label: "Week4 Notes",
        url: "week4/index.html"
    },
    {
        label: "Week5 Notes",
        url: "week5/index.html"
    },
    {
        label: "Week6 Notes (ToDo App)",
        url: "week6/index.html"
    },
    {
        label: "Week7 Notes",
        url: "week7/index.html"
    },
    {
        label: "Week8 Notes",
        url: "week8/index.html"
    }
]; // links is a global array that contains objects.  Each object contains a set of properties

// This will execute the function immediately.  Function must be loaded from a different javascript file.
buildTableOfContents(LINKS, "contents");