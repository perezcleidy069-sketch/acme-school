class Teacher{
    constructor(firstName, lastName, identificationTypeId, identificationNumber, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.identificationTypeId=identificationTypeId;
        this.identificationNumber=identificationNumber;
        this.email=email
    }
    getData(){
        return{
            firstName:this.firstName,
            lastName:this.firstName,
            identificationTypeId:this.identificationTypeId,
            identificationNumber:this.identificationNumber,
            email:this.email
        };
    }
}

export default Teacher;