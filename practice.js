//document.getElementsByTagName("h1")
//document.getElementsByClassName("second")[0]
//document.getElementById("first")
//document.querySelectorAll("li") //Shows all li items
//document.querySelector("li") //shows the first li items
//document.querySelectorAll("li, h1") //Shows all li and h1 items
//document.querySelector("li").getAttribute("random"); //gets any attribute (like width)
//document.querySelector("li").getAttribute("random", "1000") //sets the random attribute to 1000px
//document.querySelector("h1").style.background = "yellow"; //changes the first h1 to have a yellow background

//var h1 =document.querySelector("h1");
//h1.className = "coolTitle" //adds the class "coolTitle" to the first h1 element

//document.querySelector("li").classList; //shows the list of classes on the first li
// classList allows add, remove, and toggle
// classList.remove("coolTitle");
// classlist.add("coolTitle");
// classList.toggle("classList");// This toggles the class from being added/removed. Like a switch
//document.querySelector("li")[1].parentElement; //selects the parent element of the first li

/*var button = document.getElementById("clickme");
button.addEventListener("click", function() {
    console.log("Click!!!!!");
    alert("CLICK!!!");
})
button.addEventListener("mouseenter", function() {
    console.log("User hovered over the button");
})
button.addEventListener("mouseleave", function() {
    console.log("User left the button");
})*/

// ====== VARIABLES ====== //
var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
let dButton = document.querySelectorAll("ul button");

// ====== EVENT LISTENERS ====== //
button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)

// ====== MAKE INITIAL LI ITEMS CLICKABLE ====== //
makeLIClickable();
deleteLI();

// ====== FUNCTIONS ====== //
//Delete

function deleteLI() {
    let deleteButton = document.querySelectorAll("ul button");
    for (let i=0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function(e) {
            e.currentTarget.parentNode.remove();
        })
    }
}

//Add
function makeLIClickable() {
    liDone = document.querySelectorAll("li");
    for (var i=0; i < liDone.length; i++) {
        console.log(i);
        liDone[i].addEventListener("click", toggleDone)
    }
    function toggleDone() {
        this.classList.toggle("done");
        this.classList.toggle("changeColor");
    }
}


function inputlength() {
    return input.value.length;
}
function newListItems() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    li.appendChild(document.createTextNode(" " + input.value));
    ul.appendChild(li);
    button.addEventListener("click", deleteLI)
    li.addEventListener("click", toggleDone)
    function toggleDone() {
        this.classList.toggle("done");
        this.classList.toggle("changeColor");
    }
    function deleteLI(e) {
        e.currentTarget.parentNode.remove();
    }
}

function createListElement() {
    newListItems();
    input.value = "";
}

function addListAfterClick() {
    if (inputlength() > 0) {
        createListElement();
    } else {
        alert("Please type an item to enter to the list");
    }
}

function addListAfterKeypress(event) {
    if (inputlength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
