
const model = require( '../models');




const { Busdetails } = model;

class BusDetail {

    static index(req, res) {
        return Busdetails.findAll({order : [['createdAt','DESC']], limit : 3}).then(task => res.status(200).send(task));
    }

    static create(req, res) {

        return Busdetails.create(req.body)
                  .then(book => res.status(201).send({
                    message: 'Booking successful'

                  }))
        }

        static show(req, res){
            let query = req.query.q
            return Busdetails.findAll({where:{category: query }}).then(task => res.status(200).send(task));
        }
}


module.exports = BusDetail;
