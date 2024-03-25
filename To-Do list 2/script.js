

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
const btn = document.getElementById("BT");

function addTask() {
   if (inputBox.value === "") {
      alert("Kuch likh Too Sahi BKl!");
   } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);   
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
   }
   inputBox.value = "";
   saveData();
}

btn.addEventListener("click", () => {
   addTask();
});

listContainer.addEventListener("click", function(e) {
   if (e.target.tagName === "LI") { 
       e.target.classList.toggle("checked");
       saveData();
   } else if (e.target.tagName === "SPAN") { 
       e.target.parentElement.remove();
       saveData();
   }
}, false);

function saveData() {
   localStorage.setItem("data", listContainer.innerHTML); // localStorage.setItem() ka istemal kiya gaya hai
}

function showList() {
   listContainer.innerHTML = localStorage.getItem("data"); // localStorage.getItem() ko showList() mein istemal kiya gaya hai
}
showList();




