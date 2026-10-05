class Students{
    constructor(code, firstName, lastName, identificationTypeId, identificationNumber, gender, birthDate, email, address, cityId){
        this.code=code;
        this.firstName=firstName;
        this.lastName=lastName;
        this.identificationTypeId=identificationTypeId;
        this.identificationNumber=identificationNumber;
        this.gender=gender;
        this.birthDate=birthDate;
        this.email=email;
        this.address=address;
        this.cityId=cityId

    }

    getData(){
        return{
            code:this.code,
            firstName:this.firstName,
            lastName:this.firstName,
            identificationTypeId:this.identificationTypeId,
            identificationNumber:this.identificationNumber,
            gender:this.gender,
            birthDate:this.birthDate,
            email:this.email,
            address:this.address,
            cityId:this.cityId
        }
    }
}

export default Students;