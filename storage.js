// localStorage.setItem("key", "value")

//Store Data
// localStorage.setItem("userName", "Rahim");
// localStorage.setItem("user", "Karim");
// localStorage.setItem("userN", "Saydur Rahman");
// localStorage.setItem("Good student", "Jamil");





// //Read data
// let Names = localStorage.getItem("Good student");

// console.log(Names) // data read 

// //Delete Data
// localStorage.removeItem("userName");
// localStorage.removeItem("user");
// localStorage.removeItem("userN");
// localStorage.removeItem("Good student")



const input = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const clearBtn = document.getElementById("clearBtn");


addBtn.onclick = () => {
  const name = input.value.trim(); //name = jamil,saydur
  if (!name) {
    alert("Please enter a name!");
    return;

  }

 // names= jamil,syadur
  let names = JSON.parse(localStorage.getItem("names")) || []; //Read data
  
 
  names.push(name); // names = jamil ...push(saydur rahman)

  localStorage.setItem("names", JSON.stringify(names));//Store data [jamil,saydur,ayon mollik]

  alert("Name added!");
  input.value = ""; 
};


showBtn.onclick = () => { //read data
  const names = JSON.parse(localStorage.getItem("names")) || []; //[jamil,saydur,ayon mollik]
  if (names.length > 0) {
    alert("Saved names:\n" + names.join("\n"));
  } else {
    alert("No names saved yet!");
  }
};

clearBtn.onclick = () => {
  localStorage.removeItem("names");
  alert("All names cleared!");
};



















// const save = document.getElementById("save");
// const show = document.getElementById("show");
// const clear = document.getElementById("clear");
// const input = document.getElementById("nameInput");

// save.onclick = () => {
//   localStorage.name = input.value;  //localStorage.setItem("name", value)
//   alert("Name saved successfully!");
// };

// show.onclick = () => {
//   let name = localStorage.getItem("name");
//   console.log(name);
//   alert(name || "No name saved!");
// };

// clear.onclick = () => {
//   delete localStorage.name;
//   input.value = "";
//   alert("Data removed!");
// };

