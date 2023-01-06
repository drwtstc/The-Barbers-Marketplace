const Patron = require("../models/patron");

module.exports = {
    new: newPatron,
    editPatron,
    create,
    index,
    // show,
    update,
    delete: deletePatron
};

function newPatron(req, res){
    res.render('patrons/new');
}

function editPatron(req, res){
    const patron = patron.findById(req.params.id, function(err, patron){
        res.render('patrons/edit', {patron})
    })
}

function create(req, res) {
    const patron = new Patron(req.body)
    patron.save(function(err) {
        console.log(err)
        if (err) return res.render('patrons/new');
        res.redirect('/patrons');
    })
}

function index(req, res){
    Patron.find({}, function(err, patrons){
        console.log(patrons)
        res.render('patrons/index', {patrons})
    })
}

// function show(req, res) {
//     patron.findById(req.params.id, function(err, patron) {
//         res.render('patrons/show', {patron})
//     });
// }

function update(req, res) {
    Patron.findByIdAndUpdate(req.params.id, req.body, function(err, patron) {
            if (err || !patron) return res.redirect('/patrons');
            res.redirect (`/patrons/${patron._id}`);
        }
    );
}

function deletePatron(req, res) {
    Patron.findByIdAndDelete(req.params.id, function(err,patron){
        if (err) {
            res.send(err);
          } else {
            res.send(`${patron.name} was deleted.`);
          }
    })
}