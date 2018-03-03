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
  var sales = JSONparse(responseText);
}
