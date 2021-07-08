const Member= require('../models/member.models.js');

// Create and Save a new Note
exports.create = (req, res) => {
    console.log("create")
// Validate request
if(!req.body.nom) {
    return res.status(400).send({
        message: "member content can not be empty"
    });
}

// Create a Member
const member = {
    nom: req.body.nom , 
    date: req.body.date,
    phd: req.body.phd ,
   adress: req.body.adress,
    tel: req.body.tel ,
    mail: req.body.mail ,
    date2: req.body.date2 ,
    phd1: req.body.phd1 ,
    Bio: req.body.Bio ,

    academic: req.body.academic
    // researchTopics: req.body.researchTopics,
    // scientificActivities: req.body. scientificActivities,
   // photo: req.body.photo  || "Dr. Sonda Ammar Bouhamed was born in Tunisia in 1986.",

};

// Save Member in the database
// member.save()
// .then(data => {
//     res.send(data);
// }).catch(err => {
//     res.status(500).send({
//         message: err.message || "Some error occurred while creating the Member."
//     });
// });
Member.create(member).then((element) => {
              res.json({ status: element.email + "  registered!!" });
            })
            .catch((err) => {
              res.send("error" + err);
            });
};

// Retrieve and return all Members from the database.
exports.findAll = (req, res) => {
    member.find()
    .then(member => {
        res.send(member);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving members."
        });
    });
};

// Update a member identified by the noteId in the request
exports.update = (req, res) => {
 // Validate Request
 if(!req.body.content) {
    return res.status(400).send({
        message: "member content can not be empty"
    });
}

// Find member and update it with the request body
member.findByIdAndUpdate(req.params.memberId, {
    title: req.body.title || "Untitled member",
    content: req.body.content
}, {new: true})
.then(member=> {
    if(!member) {
        return res.status(404).send({
            message: "member not found with id " + req.params.memberId
        });
    }
    res.send(member);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "member not found with id " + req.params.memberId
        });                
    }
    return res.status(500).send({
        message: "Error updating member with id " + req.params.memberId
    });
});
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    member.findByIdAndRemove(req.params.memberId)
    .then(member => {
        if(!member) {
            return res.status(404).send({
                message: "member not found with id " + req.params.memberId
            });
        }
        res.send({message: "member deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "member not found with id " + req.params.memberId
            });                
        }
        return res.status(500).send({
            message: "Could not delete member with id " + req.params.memberId
        });
    });
};