const router = require("express").Router();
const User = require("../model/user.model");

router.get("/", async (req, res) => {
    const users = await User.find().lean().exec();

    res.status(200).json({ users });
});

router.post("/", async (req, res) => {
    const user = await User.create(req.body);

    res.status(201).json({ user });
});

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id).lean().exec();

    res.status(200).json({ user });
});

router.patch("/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    res.status(201).json({ user });
});

router.delete("/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(201).json({ user });
});

module.exports = router;
