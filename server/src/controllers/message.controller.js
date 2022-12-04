const router = require("express").Router();
const Message = require("../model/message.model");

router.get("/", async (req, res) => {
  const messages = await Message.find().lean().exec();

  res.status(200).json({messages});
});

router.post("/", async (req, res) => {
  const message = await Message.create(req.body);

  res.status(201).json({message});
});

router.get("/:id", async (req, res) => {
  const message = await Message.findById(req.params.id).lean().exec();

  res.status(200).json({message});
});

router.patch("/:id", async (req, res) => {
  const message = await Message.findByIdAndUpdate(req.params.id, req.body);

  res.status(201).json({message});
});

router.delete("/:id", async (req, res) => {
  const message = await Message.findByIdAndDelete(req.params.id);

  res.status(201).json({message});
});

module.exports = router;
