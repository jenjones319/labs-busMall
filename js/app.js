'use strict'
console.log('app.js is connected');

//Create a constructor function that creates an object associated with each product, and has the following properties:
//Name of the product
//File path of image

var imageElements = document.getElementsByName('img');

var productIndex1 = 0;
var productIndex2 = 0;
var productImage3 = 0;
var totalClicks = 0;
var rounds = 25;
var allProducts = []

function Product(name, imageUrl){
    this.name = name
    this.imageUrl = imageUrl
    this.timesClicked = 0
    allProducts.push(this);
  }
  
new Product('bag', 'images/bag.jpg',);
new Product('banana', 'images/banana.jpg');
new Product('bathroom', 'images/bathroom.jpg');
new Product('boots', 'images/boots.jpg');
new Product('breakfast', 'images/breakfast.jpg');
new Product('bathroom', 'images/bubblegum.jpg');
new Product('boots', 'images/boots.jpg');
new Product('breakfast', 'images/breakfast.jpg')
new Product('bubblegum', 'images/bubblegum.jpg');
new Product('chair', 'images/chair.jpg');
new Product('cthulhu', 'images/cthulhu.jpg');
new Product('dog-duck', 'images/dog-duck.jpg')
new Product('dragon', 'images/dragon.jpg');
new Product('pen', 'images/pen.jpg');
new Product('pet-sweep', 'images/pet-sweep');
new Product('scissors', 'images/scissors.jpg');
new Product('shark', 'images/shark.jpg');
new Product('sweep', 'images/sweep.jpg');
new Product('tauntaun', 'images/tauntaun.jpg');
new Product('usb', 'images/usb.gif');
new Product('water-can', 'images/water-can.jpg');
new Product('wine-glass', 'images/wine-glass.jpg');

function imageWasClicked (event) {
  totalClicks++;
  if (event.srcElement.id === '1') {
    allProducts[productIndex1].timesClicked++;
} else if (event.srcElement.id === '2') {
    allProducts[productIndex2].timesClicked++;
  }
}
for (var i = 0; i < imageElements.length; i++) {

  console.log('this is the event listener for the click image event.');
  imageElements[i].addEventListener('click', imageWasClicked);
}

while((nextProductIndex2 === productIndex2) || (nextProductIndex2 === nextProductIndex1)){
    
}




//Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.








//Attach an event listener to the section of the HTML page where the images are going to be displayed.



//Once the users ‘clicks’ a product, generate three new products for the user to pick from.
//As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.
//In the constructor function define a property to hold the number of times a product has been clicked.

//After every selection by the viewer, update the newly added property to reflect if it was clicked.

//As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
//By default, the user should be presented with 25 rounds of voting before ending the session. Done. 
//Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes. Done. 
/*As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered. 

After voting rounds have been completed, remove the event listeners on the product.

Display the list of all the products followed by the votes received and number of times seen for each. Example: Banana Slicer had 3 votes and was shown 5 times */