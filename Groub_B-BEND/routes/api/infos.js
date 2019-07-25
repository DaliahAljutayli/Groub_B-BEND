const express = require('express');
const router = express.Router();

const Info = require('../../models/Info');


router.get('/', (req, res) => {
  Info.find()
    .then(infos => res.json(infos));
});


router.post('/', (req, res) => {
  const newInfo = new Info({
    Name: req.body.Name,
    Univercity: req.body.Univercity,
    Major: req.body.Major,
    File: req.body.File
  });
  newInfo.save().then(info => res.json(info));
});


module.exports = router;