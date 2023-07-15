const Result = require("../models/results");
const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getResults = (req, res) => {
  Result.find() // cursor
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => handleError(res, err));
};

const getResult = (req, res) => {
  Result.findById(req.params.id)
    .then((answer) => {
      res.status(200).json(answer);
    })
    .catch((err) => handleError(res, err));
};

const deleteResult = (req, res) => {
  Result.findByIdAndDelete(req.params.id)
    .then((answer) => {
      res.status(200).json(answer);
    })
    .catch((err) => handleError(res, err));
};

const addResult = (req, res) => {
  const result = new Result(req.body);

  result
    .save()
    .then((answer) => {
      res.status(201).json(answer);
    })
    .catch((err) => handleError(res, err));
};

const updateResult = (req, res) => {
  Result.findByIdAndUpdate(req.params.id, req.body)
    .then((answer) => {
      res.status(201).json(answer);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  getResults,
  getResult,
  deleteResult,
  addResult,
  updateResult,
};
