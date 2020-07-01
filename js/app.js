'use strict';
console.log('app.js is connected');
// HTML array
var imageElements = document.getElementsByTagName('img');
var productIndex1 = 0;
var productIndex2 = 0;
var productIndex3 = 0;
var totalClicks = 0;
var rounds = 25;
var allProducts = [];
// constructor function
function Product (name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  this.timesShown = 0;
  allProducts.push(this);
}
// chart render function
function getProductsArray(parameterNameCouldBePotato) {
  var answer = [];
  console.log('This is the getproductsArray');
  for (var j = 0; j < allProducts.length; j++) {
    answer[j] = allProducts[j][parameterNameCouldBePotato];
  }
  console.log(answer);
  return answer;
}
// busMall objects
new Product('bag', 'images/bag.jpg');
new Product('banana', 'images/banana.jpg');
new Product('bathroom', 'images/bathroom.jpg');
new Product('boots', 'images/boots.jpg');
new Product('breakfast', 'images/breakfast.jpg');
new Product('bubblegum', 'images/bubblegum.jpg');
new Product('chair', 'images/chair.jpg');
new Product('cthulhu', 'images/cthulhu.jpg');
new Product('dog-duck', 'images/dog-duck.jpg');
new Product('dragon', 'images/dragon.jpg');
new Product('pen', 'images/pen.jpg');
new Product('pet-sweep', 'images/pet-sweep.jpg');
new Product('scissors', 'images/scissors.jpg');
new Product('shark', 'images/shark.jpg');
new Product('sweep', 'images/sweep.png');
new Product('tauntaun', 'images/tauntaun.jpg');
new Product('usb', 'images/usb.gif');
new Product('water-can', 'images/water-can.jpg');
new Product('wine-glass', 'images/wine-glass.jpg');
function imageWasClicked (event) {
  totalClicks++;
  if (event.srcElement.id === '1') {
    allProducts[productIndex1].timesClicked++;
    // console.log('clicked1');
  } else if (event.srcElement.id === '2') {
    allProducts[productIndex2].timesClicked++;
    // console.log('clicked2');
  } else if (event.srcElement.id === '3') {
    // console.log('clicked3');
    allProducts[productIndex3].timesClicked++;
  }
  // ensure different images from one click to next
  var nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  while ((productIndex1 === nextProductIndex1) || (nextProductIndex2 === nextProductIndex1)) {
    nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  }
  var nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  while ((nextProductIndex2 === productIndex2) || (nextProductIndex2 === nextProductIndex1)) {
    nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  }
  var nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  while ((nextProductIndex3 === productIndex3) || (nextProductIndex3 === nextProductIndex2)) {
    nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  }
  // passing variable
  productIndex1 = nextProductIndex1;
  productIndex2 = nextProductIndex2;
  productIndex3 = nextProductIndex3;
  // display a random picture, count times image shown, count times show for image in index1
  imageElements[0].src = allProducts[productIndex1].imageUrl;
  allProducts[productIndex1].timesShown++;
  imageElements[1].src = allProducts[productIndex2].imageUrl;
  allProducts[productIndex2].timesShown++;
  imageElements[2].src = allProducts[productIndex3].imageUrl;
  allProducts[productIndex3].timesShown++;
  // calculate rounds
  if (totalClicks >= rounds) {
    var footerElement = document.getElementsByTagName('footer')[0];
    if (footerElement.firstElementChild) {
      footerElement.firstElementChild.remove();
    }
    // footer
    // footerElement.textContent = 'You voted on 3 nifty busMall products. Way to go!';
    var asideUl = document.getElementById('voteResults');
    for (var x = 0; x < allProducts.length; x++) {
      var voteResultListItem = document.createElement('li');
      // add template literal
      voteResultListItem.textContent = `${allProducts[x].name} was clicked on ${allProducts[x].timesClicked} times and was shown ${allProducts[x].timesShown} times.`;
      asideUl.appendChild(voteResultListItem);
      var percentageListItem = document.createElement('li');
      if (allProducts[x].timesClicked === 0) {
        var math = `ZERO clicks and shown ${allProducts[x].timesShown} times.`;
      } else {
        // console.log(allProducts[x].timesShown);
        math = Math.round(((allProducts[x].timesClicked / allProducts[x].timesShown).toFixed(2) * 100)) + '%';
      }
      percentageListItem.textContent = `${allProducts[x].name} percentage of clicked on VS times shown is ` + math;
      asideUl.appendChild(percentageListItem);
    }
    // remove the add event listener
    for (var i = 0; i < imageElements.length; i++) {
      console.log('this is the event listener for the click image event.');
      imageElements[i].removeEventListener('click', imageWasClicked);
    }
    runMyChartNow();
  }//if greater than 25 click loop
}//close our image was clicked function
function runMyChartNow(){
  var ctx = document.getElementById('resultsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getProductsArray('name'),
      datasets: [{
        label: '# of Votes',
        //what does this data do? 
        //actually the valies in the chart
        data: getProductsArray('timesClicked'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
for (var x = 0; x < imageElements.length; x++) {
  console.log('this is the event listener for the click image event.');
  imageElements[x].addEventListener('click', imageWasClicked);
}











