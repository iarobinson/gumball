window.onload = function() {

}

function updateSales(sales) {
  var salesDiv = document.getElementById("sales");
  
  // Now we move through the object entering parsed information into DOM
  for (var i = 0; i < sales.length; i += 1) {
    var singleSale = sales[i];
    var saleDOMObject = document.createElement("div");
    saleDOMObject.setAttribute("class", "saleItem");
    saleDOMObject.innerHTML = singleSale.name + " sold " + singleSale.sales + " gumballs";
    salesDiv.appendChild(saleDOMObject);
  }
}
