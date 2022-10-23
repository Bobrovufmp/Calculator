const itemHtml = document.querySelectorAll(".item");
const cleanHtml = document.querySelector(".clean");
const equalHtml = document.querySelector(".equal")
const backHtml = document.querySelector('.back')


function insert(param) {
  document.form.textView.value = document.form.textView.value + param;
}
function cleanInsert() {
  document.form.textView.value = "";
}

function back() {
    let arr = document.form.textView.value
    document.form.textView.value = arr.substring(0, arr.length - 1)
    return arr
}

function equal() {
    let arr = document.form.textView.value
    if (arr) {
      document.form.textView.value = eval(arr)
    }
    return arr
}