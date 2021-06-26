function postHere() {
  console.log("I am being called.");

  // Read the text form the box;
  let inputElementRef = document.querySelector("#inputBoxId");
  let value = inputElementRef.value;

  let parentElement = document.querySelector("#parent");
  let newElement = `<div class="alert alert-danger my-2">${value}</div>`;

  // adding the new child.
  parentElement.innerHTML = newElement + parentElement.innerHTML;

  inputElementRef.value = "";
}
