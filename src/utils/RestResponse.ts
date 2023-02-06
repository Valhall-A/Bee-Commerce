export class RestResponse<T> {
    private content:T;
    private errors:string[];

    constructor(obj:{content:T, errors:string[]}){
        this.content = obj.content;
        this.errors = obj.errors;
    }
}