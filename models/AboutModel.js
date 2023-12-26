const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    machines: {
      type: Number,
      required: [true, "Please provide a machines value"],
    },
    partners: {
      type: Number,
      required: [true, "Please provide a partners value"],
    },
    cities: {
      type: Number,
      required: [true, "Please provide a cities value"],
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("About", AboutSchema);
