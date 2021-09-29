class EmployeePayrollData{
  
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get name(){
        return this._name;
    }
    
    set name(name){
        let nameRegex =RegExp('^([A-Z][a-z]{2,})$');
        if(nameRegex.test(name))
          this._name = name;
        else throw "Name is Incorrect"; 
       
    }
    get profileImg(){
        return  this._profileImg;
    }
    set profileImg(profileImg){
        this._profileImg = profileImg;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }
    get department(){
        return this._department;
    }
    set department(department){
        this._dept = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate = startDate;
    }
    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes = notes;
    }
    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocalDateString("en-Us",options);
        return "id="+this.id+", name="+ this.name+", profile="+this.profileImg+", gender="+this.gender+", department="+this.department+", sal;ary="+this.salary+", date="+this.startDate+", notes="+this.notes;
    }
}
