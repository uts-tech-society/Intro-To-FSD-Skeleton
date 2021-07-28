const Fortune = require("../models/fortuneModel");

module.exports.getAllFortunes = async (req, res) => {
  await Fortune.find()
    .then((fortunes) => {
      res.status(200).send(fortunes);
    })
    .catch((err) =>
      res.status(400).json({
        error: [
          {
            error: "Oh no, you're not fortunate >:)",
          },
        ],
      })
    );
};

module.exports.getRandomFortune = async (req, res) => {
  await Fortune.find()
    .then((fortunes) => {
      const randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
      res.status(200).send(randomFortune);
    })
    .catch((err) =>
      res.status(400).json({
        error: [
          {
            error: "Oh no, you're not fortunate >:)",
          },
        ],
      })
    );
};

module.exports.createNewFortune = async (req, res) => {
  let newFortune = new Fortune(req.body);

  await newFortune.save((err, Fortune) => {
    if (err) {
      return res.status(400).json({
        error: [
          {
            error: "Database didn't like your fortune (:",
          },
        ],
      });
    }
    res.json(Fortune);
  });
};

module.exports.updateExistingFortune = async (req, res) => {
  const {fortuneName, _id} = req.body;

  await Fortune.findByIdAndUpdate({_id}, { "fortuneName": fortuneName }, { new: true })
    .then((fortune) => {
      res.status(200).send(fortune);
    })
    .catch((err) =>
      res.status(400).json({
        error: [
          {
            error: "Fortune could not be updated :(",
          },
        ],
      })
    );
};

module.exports.deleteExistingFortune = async (req, res) => {
  await Fortune.deleteOne({ _id: req.params.id })
    .then((fortune) => {
      res.json({ message: "Successfully deleted fortune :)" });
    })
    .catch((err) => res.status(400).json({ error: err }));
};
