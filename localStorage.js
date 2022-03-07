document.querySelector("#btn").addEventListener("click", store)
let retrievedData  = localStorage.getItem("listOfImages");
let listOfImages = retrievedData ? JSON.parse(retrievedData) : []

function store() {
  // p5.js documentation https://p5js.org/reference/#/p5/saveCanvas
  listOfImages.push(canvas.toDataURL())

  localStorage.setItem('listOfImages', JSON.stringify(listOfImages));
  console.log("CLEAR")
  paths.splice(0);
  background(255);
}


/* This function creates a variable, that represents todays date. The function returns a substring of the date (DD/MM/YY HH/MM/SS) */
function createDate(){
   let today =  new Date();
   let formattedDate = today.toString().substring(0,25);
   return formattedDate;
}

