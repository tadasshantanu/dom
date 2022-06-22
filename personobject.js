const person={
    firstName:'shantanu',
    lastName:'tadas',
    age:'27',
    hobbies:['music','movies','sports'],
    address: {
        street:'yashwanth colony',
        city:'wardha',
        state:'maharashtra'
    }
    }
console.log(person.hobbies[1])


const {address: {state}}=person;
console.log(state);
//destructor
person.age ='26';
console.log(person); 
person.state='gujrat';
console.log(person);


const todos=[
    {
        id: 1,
        text:'sharpner is the great learning platform',
        iscompleted:true
    },
    {
        id:2,
        text:'sharpner allow pay after placement',
        iscompleted:true
    },
    {
        id:3,
        text:'dentist appt',
        iscompleted:false
    }
];
console.log(todos); 


    var i=0;
    while(i<todos.length)
    {
    console.log(todos[i].id);
    i++;
    }
    
  
