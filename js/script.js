const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];
//question 1

let cat = {
  complain: function () {
    console.log("Meow");
  },
};

// checking if it works
cat.complain();

//question 2

let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//question 3

heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

let paragraphs = document.querySelectorAll("p");

for (p of paragraphs) {
  p.style.color = "red";
}

//question 6

let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p> New Paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

//question 7

function listLogger(list) {
  for (key of list) {
    console.log(key.name);
  }
}
listLogger(cats);

//question 8

function createCats(cats) {
  let html = "";
  for (i = 0; i < cats.length; i++) {
    let age = "Age unknown";
    if (cats[i].age) {
      age = cats[i].age;
    }
    html += `<div><h5>${cats[i].name}</h5><p>${age}</p></div>`;
  }
  return html;
}
let target = document.querySelector(".cat-container");
let output = createCats(cats);
target.innerHTML = output;
