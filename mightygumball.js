window.onload = function() {
  var url = "https://iarobinson.github.io/gumball/sales.json";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    if (request.status == 200) {
      updateSales(request.responseText);
    }
  };

  request.send(null);
}

function updateSales(responseText) {
  var salesDiv = document.getElementById("sales");
  // // The below code is what we use to dump raw JSON into the DOM
  // //  It doesn't look great, but it shows us the API is connected properly.
  // salesDiv.innerHTML = responseText;
  
  // We parse the JSON from a string into an object
  var sales = JSON.parse(responseText);
  
  // Now we move through the object entering parsed information into DOM
  for (var i = 0; i < sales.length; i += 1) {
    var singleSale = sales[i];
    var saleDOMObject = document.createElement("div");
    saleDOMObject.setAttribute("class", "saleItem");
    saleDOMObject.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
    salesDiv.appendChild(div);
  }
}
