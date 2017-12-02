function createInput() {
  const $Input = document.createElement("input");
  $Input.setAttribute("id", "input");
  $Input.addEventListener("keyup", e => {
    if (e.keyCode === 13) queryTerm(); //querys upon "Enter"
  });
  return $Input;
}

function createSubmit() {
  const $Submit = document.createElement("button");
  $Submit.addEventListener("click", queryTerm);
  return $Submit;
}

function queryTerm() {
  const input = document.getElementById("input").value;
  fetch(`/${input}`)
    .then(data => {
      console.log(data);
      appendTerms(data);
    })
    .catch(err => {
      throw err;
    });
}

function appendTerms(terms) {
  const $Output = document.getElementById("output");
  while ($Output.firstChild) {
    $Output.removeChild($Output.firstChild);
  }
  for (term of terms) {
    const $term = document.createElement("li");
    $term.textContent = term;
    $Output.appendChild($term);
  }
}
