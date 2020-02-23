//import model from '../models';
const model = require( '../models');




const { Users } = model;

class User {

    static index(req, res) {
        return Task.findAll({order : [['createdAt','DESC']], limit : 3}).then(task => res.status(200).send(task));
    }

    static create(req, res) {

        //var idea =  req.body.id;
        //res.send(idea);
         return Users.create(req.body).then(book => res.status(201).send({
                     message: 'Booking successfully'

                 }));
        }

        static show(req, res){
            let query = req.query.q
            return Users.findAll({where:{category: query }}).then(task => res.status(200).send(task));
        }
}

//export default Tasks
module.exports = User;
