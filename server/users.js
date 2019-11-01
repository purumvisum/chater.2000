class Users {
    constructor() {
        this.users = [];
    }

    add(id, name, room) {
        this.users.push({
            id, name, room
        })
    }

    remove(id) {
        const user = this.get(id);
        if (user) {
            this.users = this.users.filter( user => user.id !== user.id)
        }
        return user;
    }

    get(id) {
        return this.users.find(user => user.id === id);
    }

    getByRoom(room) {
        return this.users.find(user => user.room === room);
    }
}

module.exports = function () {
    return new Users();
}
