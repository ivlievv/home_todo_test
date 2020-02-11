const {User} = require('./db/models');

function createUser(user) {

}

async function getUser(id) {

    try {
        const user = await User.findByPk(id);
        if (user){
            return user.get();
        }else {
            throw new Error('404 not found');
        }
    }catch (e) {
        console.error(e);
    }
}

function updateUser() {

}

function deleteUser() {

}

getUser(45).then(console.log).catch(console.error);