document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit',(e) => {
   e.preventDefault();
   if (e.target.name.value != ""){
     li = document.createElement("li");
     li.innerText = e.target.name.value;
     ul.appendChild(li);
     e.target.reset();
});


// goal to update the to do section with text entered in the description tab upon click

// document.querySelector('form').addEventListener('submit',(e) => {
//    e.preventDefault();
//    if (e.target.name.value != ""){
//      li = document.createElement("li");
//      li.innerText = e.target.name.value;
//      ul.appendChild(li);
//      e.target.reset();
//      document.querySelectorAll("li");
//      lis.forEach((li)=> {
//        li.addEventListener("click", (e) =>{
//          li.style.color = "green";
//        })
//      }
//    }

  
//    from handler function

//    let handleForm = (e) => {
//   e.preventDefault();
//   if (e.target.name.value != "") {
//     li = document.createElement("li");
//     li.innerText = e.target.name.value;
//     ul.appendChild(li);
//     e.target.reset();

// }
// Way 1

// const ul = document.querySelector("ul.names");
// ul.addEventListener("click", handleLiClick)

// const handleLiClick = (e) => {
//   e.target.style.color = "green";
//   e.target.style.backgroundColor = "yellow";
// });

// Way 2 
// const ul = document.querySelector("ul.names");
// ul.addEventListener("click", (e) => {
//   e.target.style.color = "green";
//   e.target.style.backgroundColor = "yellow";
// });
   

// add form

// let form = document.querySelector('form')

// find Element, add listener 