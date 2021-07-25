const Fortune = require("../models/fortuneModel");

module.exports.getAllFortune = async (req, res) => {
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

module.exports.updateExistingFortune = async (req, res) => {
  await Fortune.findOneAndUpdate({ _id: req.params.FortuneId }, req.body, {
    new: true,
  })
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
  await Fortune.deleteOne({ _id: req.params.FortuneId })
    .then((fortune) => {
      res.json({ message: "Successfully deleted fortune :)" });
    })
    .catch((err) => res.status(400).json({ error: err }));
};
