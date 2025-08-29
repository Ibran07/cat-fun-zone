const factURL = "https://catfact.ninja/fact";
const imgURL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";

const generateBtn = document.querySelector("button");
const imgDiv = document.querySelector(".imgDiv");
const factDiv = document.querySelector(".fact-container");


try {
    generateBtn.addEventListener("click", generate);
} catch(err){
    console.error("Error -",err);
}

function generate(){
    
    //generating images
    fetch(imgURL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            imgDiv.src = data.url;
        })
        .catch(err =>{
            console.error("Error -",err);
        })

    //generating fact
    fetch(factURL)
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            factDiv.textContent = data.fact;
        })
        .catch(err =>{
            console.error("Error -",err);
        })
}
