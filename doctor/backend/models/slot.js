const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    time:{
      type: String,
      trim: true,
      required: true,
    },
    available: {
        type: String,
        trim: true,
        required: true,
    }
});

const slot = mongoose.model('slot', slotSchema);
module.exports = slot;
