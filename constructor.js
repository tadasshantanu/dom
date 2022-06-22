function Student(firstName, lastName, rollNo, Sex, dob )
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.rollNo=rollNo;
    this.Sex=Sex;
    this.dob=new Date(dob);
    this.getBirthYear=function()
    {
        return this.dob.getFullYear();
    }
    this.getfullName=function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
   const Student1=new Student('Shantanu','Tadas','51','male','02-08-1995');
   const Student2=new Student('Sujay','Relkar','51','male','07-09-1995');

   console.log(Student1.firstName+' '+Student1.lastName);

   console.log(Student1.getBirthYear());
   console.log(Student1.getfullName());

   Student.prototype.min_age_eligible=function(x){

    const y=this.dob.getFullYear();
    
    const age=2022-y;
    
    const test=(age>=x)?`${this.firstName} is eligible with age ${age}`:`${this.firstName} is not eligible with age ${age}`;
    
    console.log(test);
    
    }
    
    const Student3=new Student("Mohit","Kumar",21,"Male",'1990,3,21');
    
    const Student4=new Student("Shruti","Soni",23,"female","1992,5,4");
    
    console.log(Student3.getBirthYear());
    
    console.log(Student4.getfullName());
    
    Student3.min_age_eligible(20);
    
    console.log(Student3.getBirthYear());
    
    console.log(Student4.getfullName());
    
    Student4.min_age_eligible(35);