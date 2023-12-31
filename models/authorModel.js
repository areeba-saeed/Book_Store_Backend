const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    urlName: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Authors", AuthorSchema);
