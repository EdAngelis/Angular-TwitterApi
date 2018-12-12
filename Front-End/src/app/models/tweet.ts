export class Tweet {
    
    constructor (_id="",user="", name="", body="", likes=[],avatar=""){
        
        this._id = _id;
        this.user = user;
        this.name = name;
        this.body = body;
        this.likes = likes[0];
        this.avatar = avatar;
    }

    
        _id: String
        user: String
        name: String
        body: String
        likes : Number[]
        avatar: String
    
}
