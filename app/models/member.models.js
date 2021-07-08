const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    nom: String,
    date: String,
    phd: String,
    adress:String,
    tel:String,
    mail:String,
    date2:String,
    phd1:String,
    Bio:String,
    academic:String,
    par1:String,
    // photo: String,
    // researchTopics: String,
    //scientificActivities : String,
    // publications : String,
    // bookChapters : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', MemberSchema);