/* Homework 1 */

const hello_input = document.querySelector("#hello_input");
const link_a = document.querySelector("#link_a");
const hello_button = document.querySelector("#hello_button");

hello_input.classList.add("hello_input");
link_a.classList.add("link");
link_a.classList.add("link-red");
link_a.classList.remove("link-red");
hello_button.classList.remove("btn");

/* Homework 1 */

/* Homework 2 */
const first_div = document.querySelector(".first_div");

first_div.style.marginTop = "20px"; //დავალებაში არ იყო ეს მოქმედება გასაკეთებელი.
first_div.style.width = "150px";
first_div.style.height = "100px";
first_div.style.backgroundColor = "black";
first_div.style.border = "1px solid red";
hello_input.style.color = "lime";
hello_input.style.padding = "10px 20px";
link_a.style.display = "none"; // display: none აქრობს ელემენტს და ადგილს არ იკავებს
// link_a.style.visibility = "hidden"; //visibility: hidden აქრობს ელემენტს და ცარიელ ადგილს იკავებს
// link_a.style.opacity = 0; //opacity: 0 აქრობს ელემენტის სიკაშკაშეს და მოქმედებს არსებული ელემენტი

/* Homework 2 */

/* Homework 3 */
const paragraph = document.querySelector(".paragraph");

paragraph.textContent = "Hello I Am Paragraph";

const string1 = "Hello,";
const string2 = "Goodbye";

const string3 = string1 + " " + string2;

//მოცემულ პარაგრაფში ჩაქწერეთ ამ მესამე მიღებული სტრინგის მნიშვნელობა >>>
// = ანიჭებს ახალ ტექსტს, += ამატებს არსებულ ტექსტს ახალ ტექსტს
paragraph.textContent = string3;

/* Homework 3 */

/* Homework 4 */
function func1() {
  const num1 = 1;
  console.log(num1);
}

func1();

function func2() {
  const bool1 = true;
  const num1 = 1;
  const num2 = 2;

  console.log(bool1, num1, num2);
}

func2();

function findSquare(number) {
  const square = number * number;

  console.log("Square Is: ", square);
}

findSquare(5);
findSquare(10);

function findSum(number1, number2, number3) {
  const sum = number1 + number2 + number3;
  console.log("Sum Is: ", sum);
}

findSum(1, 2, 3);

function printLength(string) {
  const length = string.length;
  console.log("Length Size Is: ", length);
}

printLength("Length Size");
/* Homework 4 */

/* Homework 5 */
const hello_h2 = document.querySelector("#hello_h2");
const helloH2 = document.querySelector(".hello-h2");
const hide_paragraph = document.querySelector(".hide_paragraph");
const show_paragraph = document.querySelector(".show_paragraph");
const this_is_paragraph = document.querySelector(".this_is_paragraph");
const span_click = document.querySelector(".span_click");

hello_h2.addEventListener("click", function () {
  helloH2.classList.remove("hello-h2");
});

hide_paragraph.addEventListener("click", function () {
  this_is_paragraph.style.display = "none";
});
show_paragraph.addEventListener("click", function () {
  this_is_paragraph.style.display = "block";
});

span_click.addEventListener("click", function () {
  const variable1 = 10000;
  const variable2 = 20000;
  const sum = variable1 + variable2;
  span_click.textContent = sum;
  span_click.style.border = "1px solid yellow";
});
/* Homework 5 */
