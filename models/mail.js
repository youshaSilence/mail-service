const { Schema, Model } = require('mongoose');

const mailSchema = new Schema({
    recipient: { type: String, required: true },
    subject: String,
    text: String,
    status: { type: Number, default: 0 }, // 0 - processing, 1 - successfully sent, 2 - error
    sent_time: Date, // When mail was sent (not when this doc was added to collection)
});

module.exports = new Model('Mail', mailSchema);
