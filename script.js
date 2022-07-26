const MyName = "Amitesh Prabhakar.";
const NameArr = MyName.split('');
let i = 0;
const printname = function () {
  document.getElementById("Name").innerHTML += NameArr[i];
  i++;
  if (i === NameArr.length) {
    setTimeout( () => {
      document.getElementById("about").style.display = "inline";
      document.getElementById("video").style.display = "inline";
      document.getElementById("projects").style.display = "grid";
      document.getElementById("contact").style.display = "grid";
      document.getElementById("contact").style.display.justify = "center";
      document.getElementById("footer").style.display = "grid";}, 1000);
    return;}
  setTimeout(printname, 200);
};


if (window.addEventListener) { // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
  window.addEventListener("load", printname, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", printname);
}

function Refresh() {
  location.reload();
}