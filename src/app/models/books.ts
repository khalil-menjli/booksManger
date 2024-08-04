export class Books {
    public id!: number;
    public name!: string;
    public auther!: string;
    public rating!: number;
    public pages!: number;
    public pagesRead!: number;
    public category!: string;
    constructor(name:string,auther:string, rating:number,pages:number,pagesRead:number, category:string ){
        this.name = name;
        this.auther = auther;
        this.rating = rating;
        this.pages = pages;
        this.pagesRead = pagesRead;
        this.category = category;

    }

}
