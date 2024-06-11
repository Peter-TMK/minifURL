const mongoose = require("mongoose");
import { nanoid } from "nanoid";

const Schema = mongoose.Schema;

const shortlUrlSchema = new Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      default: () => nanoid().substring(0, 10),
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Note", NoteSchema);

export const urlModel = mongoose.model("ShortUrl", shortlUrlSchema);
