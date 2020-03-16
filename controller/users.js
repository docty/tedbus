
const model = require( '../models');




const { Users , Busdetails} = model;

class User {

    static index(req, res) {
        return Users.findAll().then(task => res.status(200).send(task));
        //Users.findAll({order : [['createdAt','DESC']], limit : 3}).then(task => res.status(200).send(task));
    }

    static create(req, res) {
        let query = req.body.email;
        Users.findAndCountAll({where:{email: query }}).then(function(task){
             if (task.count == 0){
                 return Users.create(req.body).then(book => res.status(201));
            }
         });



        }

        static show(req, res){
			let query = req.params.id;
            return Users.findAll({where:{userId: query }, include: [{model: Busdetails}]}).then(task => res.status(200).send(task));


        }
		
		static  remove(req, res){
            let query = req.query.id;
            return Users.destroy({where:{id: query }}).then(task => res.status(200));


        }
}


module.exports = User;
