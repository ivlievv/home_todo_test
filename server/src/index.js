import {User} from './db/models';

User.findByPk(45).then(data =>{console.log(data.toJSON());});