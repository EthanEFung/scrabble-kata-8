function createSearchBar() {
  const $Search = document.createElement("div");
  $Search.setAttribute("id", "search-bar");
  $Search.appendChild(createInput()); //input logic in controllers.js
  $Search.appendChild(createSubmit()); //submit logic in controllers.js
  return $Search;
}

function createOutput() {
  const $Output = document.createElement("ul");
  $Output.setAttribute("id", "output");
  return $Output;
}

window.onload = function() {
  document.body.appendChild(createSearchBar());
  document.body.appendChild(createOutput());
};
