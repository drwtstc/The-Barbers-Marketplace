const Barber = require("../models/barber");

module.exports = {
    new: newBarber,
    editBarber,
    create,
    index,
    show,
    update,
    delete: deleteBarber
};

function newBarber(req, res){
    res.render('barbers/new');
}

function editBarber(req, res){
    const barber = Barber.findById(req.params.id, function(err, barber){
        res.render('barbers/edit', {barber})
    })
}

function create(req, res) {
    const barber = new Barber(req.body)
    barber.save(function(err) {
        console.log(err)
        if (err) return res.render('barbers/new');
        res.redirect('/barbers');
    })
}

function index(req, res){
    Barber.find({}, function(err, barbers){
        console.log(barbers)
        res.render('barbers/index', {barbers})
    })
}

function show(req, res) {
    Barber.findById(req.params.id, function(err, barber) {
        res.render('barbers/show', {barber})
    });
}

function update(req, res) {
    Barber.findByIdAndUpdate(req.params.id, req.body, function(err, barber) {
            if (err || !barber) return res.redirect('/barbers');
            res.redirect (`/barbers/${barber._id}`);
        }
    );
}

function deleteBarber(req, res) {
    Barber.findByIdAndDelete(req.params.id, function(err,barber){
        if (err) {
            res.send(err);
          } else {
            res.send(`${barber.name} was deleted.`);
          }
    })
}