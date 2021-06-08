export class User {
    id;
    username;

    constructor(obj: any) {
        console.log(obj)
        Object.assign(this, obj);
    }
}