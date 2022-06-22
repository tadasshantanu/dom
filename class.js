class Student{
constructor(firstName, lastName, rollNo, Sex, dob )
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.rollNo=rollNo;
    this.Sex=Sex;
    this.dob=new Date(dob);
}
    getBirthYear()
    {
        return this.dob.getFullYear();
    }
    getfullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
   const Student1=new Student('Shantanu','Tadas','51','male','02,08,1995');
   const Student2=new Student('Sujay','Relkar','51','male','07-09-1995');

   console.log(Student2.getfullName());
   console.log(Student1);

   