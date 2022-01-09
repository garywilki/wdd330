function buildTableOfContents(contents, tableClass) {

    let list = document.querySelector("." + tableClass); // Selects the specified list
    let code = "";

    if (contents === undefined) {
        // Array should always exist.  Throw a debug message
        console.log("Error: Contents array does not exist.");
        code += "<li>Coming soon!</li>";
    }
    else if (contents.length == 0) {
        // Empty array is the default for a new week
        code += "<li>Coming soon!</li>";
    }
    else {
         // Generate a list item for each object
        for (content of contents) {
            code += "<li><a href='";
            code += content.url;
            code += "'>";
            code += content.label;
            code += "</a></li>";
        };
    }

    list.innerHTML = code; // Inserts the generated code into the list
}

function buildList(listItems, listClass) {

    let list = document.querySelector("." + listClass); // Selects the specified list
    let code = "";

    if (listItems === undefined) {
        // Array should always exist.  Throw a debug message
        console.log("Error: List Items array does not exist.");
        code += "<li>Coming soon!</li>";
    }
    else if (listItems.length == 0) {
        // Empty array is the default for a new week
        code += "<li>Coming soon!</li>";
    }
    else {
         // Generate a list item for each object
        for (item of listItems) {
            code += "<li>";
            code += item;
            code += "</li>";
        };
    }

    list.innerHTML = code; // Inserts the generated code into the list
}