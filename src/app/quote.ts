export class Quote {
    upvotes:number;
    downvotes:number;
    showDescription: boolean;
    constructor(public yourName:string, public author:string, public quote:string, public date: Date){
        this.upvotes=0;
        this.downvotes=0;
        this.showDescription=false;
    }
}
