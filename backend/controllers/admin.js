const Argo = require('../models/Argo');

exports.getIndex = async (req, res) => {
    const argo = await Argo.find((data) => data);

    try {
        console.log(argo);
        res.json(argo)
    } catch (error) {
        console.log(error);
    }
};



exports.postArgo = (req, res) => {
    const { name } = req.body;

    const argo = new Argo({ name: name });
    argo.save();
    console.log('Argo Added to the database');
    res.status(201).redirect('http://localhost:3000/');
};

