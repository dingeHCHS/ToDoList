
document.getElementById("addBtn").addEventListener("click", addText);


function addText(){
  //Line Item
  var listItem = document.createElement("li");
  listItem.innerHTML = document.getElementById("myInput").value;
  document.getElementById("myUl").appendChild(listItem);
  
  //Delete Button
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "x";
  deleteBtn.className = "delete";
  deleteBtn.onclick = removeText;
  listItem.appendChild(deleteBtn);
}

function removeText(){
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}
