const mongoose = require("mongoose");
const User = require("./user.model");

const messageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    otp: { type: Number, length: 6, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    sentStatus: { type: Boolean, default: false }
}, { versionKey: false, timestamps: true });

module.exports = mongoose.model("message", messageSchema);
