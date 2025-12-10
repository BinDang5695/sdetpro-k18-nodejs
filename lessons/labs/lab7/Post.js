
class Post {

    constructor(userId, id, title, body) {
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }

    get userId() {
        return this._userId;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }

    set userId(userId) {
        this._userId = userId;
    }

    set id(id) {
        this._id = id;
    }

    set title(title) {
        this._title = title;
    }

    set body(body) {
        this._body = body;
    }
}
module.exports = Post;
