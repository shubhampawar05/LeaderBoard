// let fname = document.getElementById('firstName');
// let lname = document.getElementById('lastName');
// let country = document.getElementById('Country');
// let score = document.getElementById('score');

let addBtn = document.getElementById("addPlayer");
let list = document.getElementById("playerlist");

const arr = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fname = document.getElementById("firstName").value;
  let lname = document.getElementById("lasttName").value;
  let country = document.getElementById("Country").value;
  let score = document.getElementById("score").value;

  if (fname == "" || lname == "" || country == "" || score == "") {
    alert("plese enter value..");
    return;
  }

  let values = {
    name: fname + " " + lname,
    country: country,
    score: parseInt(score),
  };
  arr.push(values);
  arr.sort((a, b) => {
    return b.score - a.score;
  });

  // arr.forEach((item)=>{

    // how we can proced with this way .......

    // add.addEventListener('click', (e)=>{
    //      if(e.target.innerText == '+5'){
    //         e.target.parentNode.parentNode.children[2].innerText = Number(e.target.parentNode.parentNode.children[2].innerText)+5;
    //      }
    //      updatefuction();
    // });
    // minus.addEventListener('click',(e)=>{
    //     if(e.target.innerText == '-5'){
    //         e.target.parentNode.parentNode.children[2].innerText = Number(e.target.parentNode.parentNode.children[2].innerText)-5;
    //      }
    //      updatefuction();
    // });
  // });

  list.innerHTML = " ";
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];

    let div = document.createElement("div");

    let name = document.createElement("div");
    let place = document.createElement("div");
    let points = document.createElement("div");
    let btn = document.createElement("div");
    let deletebtn = document.createElement("span");
    let add = document.createElement("button");
    let minus = document.createElement("button");

    div.classList.add("listdiv");
    name.classList.add("listname");
    add.classList.add("btn0");
    minus.classList.add("btn0");

    add.setAttribute("onclick", `addfuction(${index})`);
    minus.setAttribute("onclick", `minusfuction(${index})`);
    deletebtn.setAttribute("onclick", `deletefuction(${index})`);

    name.innerText = item.name;
    place.innerText = item.country;
    points.innerText = item.score;

    deletebtn.innerText = "❌";
    add.innerText = "➕ 5";
    minus.innerText = "➖ 5";

    div.append(name, place, points, add, minus, deletebtn);

    list.append(div);

    document.getElementById("firstName").value='';
    document.getElementById("lasttName").value='';
    document.getElementById("Country").value='';
    document.getElementById("score").value='';

    
  }
});

function updatefuction() {
  let list = document.getElementById("playerlist");
  arr.sort((a, b) => {
    return b.score - a.score;
  });

  list.innerHTML = " ";
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];

    let div = document.createElement("div");

    let name = document.createElement("div");
    let place = document.createElement("div");
    let points = document.createElement("div");
    let btn = document.createElement("div");
    let deletebtn = document.createElement("span");
    let add = document.createElement("button");
    let minus = document.createElement("button");

    div.classList.add("listdiv");
    name.classList.add("listname");
    add.classList.add("btn0");
    minus.classList.add("btn0");

    add.setAttribute("onclick", `addfuction(${index})`);
    minus.setAttribute("onclick", `minusfuction(${index})`);
    deletebtn.setAttribute("onclick", `deletefuction(${index})`);

    name.innerText = item.name;
    place.innerText = item.country;
    points.innerText = item.score;

    deletebtn.innerText = "abc";
    add.innerText = "+5";
    minus.innerText = "-5";

    div.append(name, place, points, add, minus, deletebtn);

    list.append(div);
  }
}

function addfuction(index) {
  arr[index].score += 5;
  updatefuction();
}
function minusfuction(index) {
  arr[index].score -= 5;
  updatefuction();
}
//
