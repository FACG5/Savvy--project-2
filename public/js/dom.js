var input = document.getElementById("myInput");
input.addEventListener("input", function(e) {
  value = this.value;
  feachApi("wordAutoComplete=" + value, "post", "/search", function(arr) {
    rendering(arr);
  });
});

var btn = document.getElementById("btn");
btn.addEventListener("click", function(e) {
  var div = document.querySelector("elemant");
  var res = document.getElementById("results");

  res.textContent = "";
  e.preventDefault();
  url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=" + input.value;
  feachApi(null, "GET", url, function(arr) {
    arr.forEach(function(x) {
      var name = x.name;
      var pic = x.image_link;
      var nameEle = document.createElement("h4");
      var imgEle = document.createElement("img");
      var div = document.createElement("div");
      imgEle.classList.add("img_makeup");
      nameEle.textContent = name;
      imgEle.src = pic;

      div.appendChild(imgEle);
      div.appendChild(nameEle);
      res.appendChild(div);
    });
  });
});

function rendering(arr) {
  var list = document.getElementById("list");

  list.textContent = "";
  boldLetter(arr, input.value).forEach(element => {
    var option = document.createElement("option");
    option.setAttribute("value", element);
    option.textContent = element;
    list.appendChild(option);
  });
}
