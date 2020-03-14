
const model = require( '../models');




const { Contactus } = model;

class Contact {

    static index(req, res) {
        return Contactus.findAll({order : [['createdAt','DESC']], limit : 3}).then(task => res.status(200).send(task));
    }

    static create(req, res) {

        return Contactus.create(req.body)
                  .then(book => res.status(201).send({
                    message: 'Booking successful'

                  }))
        }

        static show(req, res){
            let query = req.query.q
            return Contactus.findAll({where:{category: query }}).then(task => res.status(200).send(task));
        }
}


module.exports = Contact;
