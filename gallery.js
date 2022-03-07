showImages()
/* This function allows us to retrieve the image URL that has been saved in localStorage */
function showImages() {
    // Important to notice the key we use here 
    let retrievedData = localStorage.getItem("listOfImages");
    var arrayOfImageData = JSON.parse(retrievedData);

    let container = document.querySelector("#container")
    arrayOfImageData.forEach(element => {
        let img = document.createElement('img');
        img.src = element
        container.appendChild(img);
    });

}