class Rate{
    construnctor(inscriptionId, rate, comments){
        this.inscriptionId=inscriptionId;
        this.rate=rate;
        this.comments=comments;
    }
    getData(){
        return{
            inscriptionId: this.inscriptionId,
            rate:this.rate,
            comments:this.comments
        };
    }
}

export default Rate;