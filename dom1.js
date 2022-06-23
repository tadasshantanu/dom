var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="green";
console.log(itemList.parentElement.parentElement.parentElement);
 console.log(itemList.childNodes);



 console.log(itemList.children); 
 
 console.log(itemList.children[1]);
 
 itemList.children[1].style.backgroundColor = 'yellow';
 


 
console.log(itemList.firstChild);
 
 console.log(itemList.firstElementChild);
 
 itemList.firstElementChild.textContent = 'Hello 1';
 
 // // firstElementChild
  //lastChild
 
  console.log(itemList.lastChild);
 
  // lastElementChild
 
 console.log(itemList.lastElementChild);
 
 itemList.lastElementChild.textContent = 'Hello 4';
 
 
 //nextSibling 
 console.log(itemList.nextSibling);
 
//nextElementSibling 
 console.log(itemList.nextSibling)
// previousSibling
// console.log(itemList.previousSibling);
 // previousElementSibling

// console.log(itemList.previous ElementSibling); itemlist.previousElementSibling.style.color = 'green';



//createElement
 var newDiv=document.createElement('div');

// Add class

 newDiv.className= 'hello';


// Add id
 newDiv.id = 'hello1';


 newDiv.setAttribute('title', 'Hello Div');



// Create text node

var newDivText = document.createTextNode('Hello World');
// Add text to div

newDiv.appendChild(newDivText);
 console.log(newDiv);