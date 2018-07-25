var input = document.getElementById("myInput");
input.addEventListener("click", () => document.getElementById("list").textContent = "");
input.addEventListener("input", function(e) {
  value = this.value;
  feachApi("wordAutoComplete=" + value, "post", "/search", function(arr) {
    rendering(arr)
  });
});

function rendering(arr) {
  var list = document.getElementById("list");
  list.textContent = "";
  boldLatter(arr, input.value).forEach(element => {
    var option = document.createElement("option");
    option.setAttribute("value", element);
    option.textContent = element;
    list.appendChild(option);
  });
}
const feachApi = function(value, method, url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      cb(obj);
    }
  }
  xhr.open(method, url);
  xhr.send(value);
}
