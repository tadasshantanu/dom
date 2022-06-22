//console.log(document.all);
//console.log(document.head);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.title);
//console.log(document.images);
//document.title=123;



//get element by id
//console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
headerTitle.textContent =  'Hello';
//headerTitle.textContent = 'goodbye';
//headerTitle.innerHTML = '<h3>hello</h3>';
var titles=document.querySelectorAll('.title');
titles[0].textContent='ADD ITEMS';
titles[0].style.color = 'green'; 
var items = document.getElementsByClassName('list-group-item');
//items[1].style.backgroundColor='yellow';
items[0].textContent='SHANTANU';
items[1].textContent='VINOD';
items[2].textContent='TADAS';
items[3].textContent='WARDHA';
items[0].style.color = 'green'; 
//items[1].style.color = 'red'; 
items[2].style.color = 'blue'; 
items[3].style.color = 'brown'; 

var li =document.getElementsByTagName('li')
li[4].style.backgroundColor='#f4f4f4';
items[1].style.color = 'red';
items[1].style.backgroundColor='green';
items[2].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}