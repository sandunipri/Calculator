console.log("hello world");

let AC = document.getElementById("AC");
let Num = document.getElementById("Num");
let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let zero = document.getElementById("zero");
let num9 = document.getElementById("9");
let sum = document.getElementById("sum");
let sub = document.getElementById("sub");
let div = document.getElementById("div");
let mul = document.getElementById("mul");
let equal = document.getElementById("equal");
let point = document.getElementById("point");

num1.addEventListener("click", function () {
  Num.value += num1.textContent;
});

num2.addEventListener("click", function () {
  Num.value += num2.textContent;
});

num3.addEventListener("click", function () {
  Num.value += num3.textContent;
});

num4.addEventListener("click", function () {
  Num.value += num4.textContent;
});

num5.addEventListener("click", function () {
  Num.value += num5.textContent;
});

num6.addEventListener("click", function () {
  Num.value += num6.textContent;
});

num7.addEventListener("click", function () {
  Num.value += num7.textContent;
});

num8.addEventListener("click", function () {
  Num.value += num8.textContent;
});

num9.addEventListener("click", function () {
  Num.value += num9.textContent;
});

zero.addEventListener("click", function () {
  Num.value += zero.textContent;
});

point.addEventListener("click", function () {
  Num.value += point.textContent;
});

AC.addEventListener("click", function () {
  Num.value = "";
});

sum.addEventListener("click", function () {
  Num.value += sum.textContent;
});

sub.addEventListener("click", function () {
  Num.value += sub.textContent;
});

div.addEventListener("click", function () {
  Num.value += div.textContent;
});

mul.addEventListener("click", function () {
  Num.value += mul.textContent;
});

equal.addEventListener("click", function () {
  Num.value = eval(Num.value);
});
