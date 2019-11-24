//import model from '../models';
const model = require( '../models');




const { Users } = model;

class User {

    static index(req, res) {
        return Task.findAll({order : [['createdAt','DESC']], limit : 3}).then(task => res.status(200).send(task));
    }

    static create(req, res) {
        let data = {surname: 'surname', firstname:'firstname', contact:'contact',email:'email'};
        return Users.create(data)
                  .then(book => res.status(201).send({
                    message: 'Task been created successfully'

                  }))
        }

        static show(req, res){
            let query = req.query.q
            return Users.findAll({where:{category: query }}).then(task => res.status(200).send(task));
        }
}

//export default Tasks
module.exports = User;
