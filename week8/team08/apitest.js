let baseUrl = 'https://swapi.dev/api/people/';
let pageQuery = '?page=';

function getSW(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let newElement = document.createElement('ul');
            for (let result of data.results){
                //console.log(result.name);
                let liElement = document.createElement('li'); // creates li element
                liElement.innerHTML = result.name; // adds name to li element
                newElement.appendChild(liElement); // append li to ul
            }
            document.querySelector(".result").innerHTML = "";
            document.querySelector(".result").append(newElement); // append ul to document

            // CHANGE NEXT AND PREVIOUS
            
            document.querySelector("#previous").setAttribute("url", data.previous);
            document.querySelector("#next").setAttribute("url", data.next);
            // document.querySelector("#next").action = getSW(data.next);

            //console.log(data);
        })
        .catch( error => console.log('There was an error: ', error));
}

function updateScreen(event, target){
    let url = event.target.attributes.url.textContent;
    console.log(url);
    getSW(url);
}

document.querySelector("#previous").addEventListener("click", updateScreen);
document.querySelector("#next").addEventListener("click", updateScreen);


        // document.querySelector(".testprevious").href = data.previous;
        // document.querySelector(".testnext").href = data.next


getSW('https://swapi.dev/api/people/?page='); // start at page 1