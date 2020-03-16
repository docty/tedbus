
const model = require( '../models');




const { Busdetails, Users } = model;

class BusDetail {

    static index(req, res) {
         return Busdetails.findAll().then(function(task){
            res.send(task);
         }); 
		//return Busdetails.findAll({order : [['createdAt','DESC']], limit : 3}).then(task => res.status(200).send(task));
    }

    static create(req, res) {
      let query = req.body.email;
      Users.findAndCountAll({where:{email: query }}).then(function(task){
             if (task.count == 0){
                 return Busdetails.create(req.body).then(book => res.status(201));
            }else{
              var data = {
                 userId:task.rows['0'].userId,
                 busname:req.body.busname,
                 price:req.body.price,
                 date:req.body.date,
                time:req.body.time,
                pip:req.body.pip,
                nop:req.body.nop,
                luggage:req.body.luggage,
                bustype:'null',
                status : 'Unpaid',
                busId : req.body.busId

              };
               return Busdetails.create(data).then(book => res.status(201));
              
            }
         });
       
        }

        static show(req, res){
            let query = req.params.userId;
			
            return Busdetails.findAll({where:{userId: query }}).then(task => res.status(200).send(task));
        }

        static payment(req, res){
            let query = req.params.id;
            
             Busdetails.update({status: 'Paid'}, {where:{busId : query}});
             res.send('Updated');
        }
}


module.exports = BusDetail;
