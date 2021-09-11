var allTasks = []
var close = document.getElementsByClassName("close");

//for load from localstorage
if (localStorage.getItem('tasks') === null){
  tasks = []
}else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(element => {
    var li = document.createElement("li");
    var inputValue = element;
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.setAttribute("onclick", "hideItem()")
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        tasks = JSON.parse(localStorage.getItem('tasks'));
        var contentForDel = this.parentElement.childNodes[0].textContent;
        var contentIndex = tasks.indexOf(contentForDel)
        tasks.splice(contentIndex, 1)
        localStorage.clear()
        localStorage.setItem('tasks', JSON.stringify(tasks))
        div.remove()
      }
    }
  });
}
// Click on a close button to hide the current list item
function hideItem() { 
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      
      tasks = JSON.parse(localStorage.getItem('tasks'));
      var contentForDel = this.parentElement.childNodes[0].textContent;
      var contentIndex = tasks.indexOf(contentForDel);
      tasks.splice(contentIndex, 1);
      localStorage.clear();
      localStorage.setItem('tasks', JSON.stringify(tasks));
      div.remove();
    };
    // var contentForDel = close[i].parentElement.childNodes[0].textContent;
    // var contentIndex = allTasks.indexOf(contentForDel);
    // allTasks.splice(contentIndex, 1);
    
  }

}

//Click on a close button to hide all of list item
function clearItems() {
  document.getElementById("myUL").innerHTML = "";
  localStorage.clear();
  alert("همه ی تسک ها پاک شد.")
  document.getElementById("myUL").style.display = "none"
  document.getElementById("myInput").value = "";
}

//Click on a create button to create new item
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var txt = document.createTextNode(inputValue);
  li.appendChild(txt);
  

  if (localStorage.getItem("tasks") === null){
    tasks = []
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }


  if (inputValue === '') {
    alert("You must write something!");
  } else if (tasks.includes(inputValue)) {
    alert("you can not write duplicate task!")
  } else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.setAttribute("onclick", "hideItem()")
    li.appendChild(span);

    tasks.push(inputValue)
    localStorage.setItem('tasks', JSON.stringify(tasks));

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        tasks = JSON.parse(localStorage.getItem('tasks'));
        var contentForDel = this.parentElement.childNodes[0].textContent;
        var contentIndex = tasks.indexOf(contentForDel)
        tasks.splice(contentIndex, 1)
        localStorage.clear()
        localStorage.setItem('tasks', JSON.stringify(tasks))
        div.remove()
      }
    }
  }


  event.preventDefault();
}

//Click on a show button to unhide  list item
function showItems(){
   document.getElementById("myUL").style.display = "initial"
}

tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks.length === 0) {
  localStorage.clear();
}