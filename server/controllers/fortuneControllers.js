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
            error: "An error has occured",
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
            error: "An error has occured",
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
            error: "An error has occured",
          },
        ],
      });
    }
    res.json(Fortune);
  });
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
            error: "An error has occured",
          },
        ],
      })
    );
};

module.exports.deleteExistingFortune = async (req, res) => {
  await Fortune.deleteOne({ _id: req.params.FortuneId })
    .then((fortune) => {
      res.json({ message: "Successfully deleted :)" });
    })
    .catch((err) =>
      res.status(400).json({
        error: [
          {
            error: "An error has occured",
          },
        ],
      })
    );
};
