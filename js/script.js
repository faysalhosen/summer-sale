// document.getElementById('kitchenBtn').addEventListener('click',function(){
//     console.log("hello world");
// })
 function handleClickBtn(event){
  const productName = event.childNodes[3].childNodes[3].innerText;
  // console.log(productName);
  const productNameContainer = document.querySelector("#selected-Items")
  const count = productNameContainer.childElementCount;
 const p=document.createElement("p");
 p.innerText= count+1+" "+productName;
 productNameContainer.appendChild(p);

  // console.log(event.childNodes[3].childNodes[3].innerText);

//    const selectedItemsContainer = document.getElementById ("selected-Items")
//   const itemName = target.parentNode.childrenNode[1].innerText;
//   li.innerText = itemName;
//   selectedItemsContainer.appendChild(li);
// console.log(target.parentNode.childrenNode[2].innerText)
//  }

 

// function handleClickBtn(){
//   console.log("hello world")
 }