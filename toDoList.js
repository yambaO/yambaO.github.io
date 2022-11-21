
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Remove a "checked" symbol when clicking on a list item after 1s
 var k = document.getElementById("myUl");
 k = addEventListener("click",function(e) {
  var tgt = e.target;
  if (e.target.tagName == "LI") {
    this.setTimeout(()=>{tgt.parentNode.removeChild(tgt);}, 1000);
     // or tgt.remove();
  }
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
}
  