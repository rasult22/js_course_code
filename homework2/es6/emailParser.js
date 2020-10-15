export default class EmailParser{
    constructor(email){
        this.email = email;
    }

    get isCorrect(){
        let reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return !!reg.exec(this.email);
    }

    get name() {
        if (!this.isCorrect) return null;

        return this.email.split('@')[0];
    }

    get domain() {
        if (!this.isCorrect) return null;
        
        return '@' + this.email.split('@')[1];
    }
}