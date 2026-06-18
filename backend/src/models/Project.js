const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    label: { type: String, trim: true, default: "" },
    subtitle: { type: String, default: "" },
    description: { type: String, default: "" },
    location: { type: String, trim: true, default: "" },
    status: { type: String, trim: true, default: "" },
    category: { type: String, trim: true, default: "" },
    client: { type: String, trim: true, default: "" },
    duration: { type: String, trim: true, default: "" },
    image: { type: String, default: "" },
    galleryImages: { type: [String], default: [] },
    outcomes: { type: [String], default: [] },
    keyMetrics: {
      type: [
        {
          value: { type: String, default: "" },
          label: { type: String, default: "" },
          icon: { type: String, default: "zap" },
        },
      ],
      default: [],
    },
    scope: {
      type: [
        {
          title: { type: String, default: "" },
          items: { type: [String], default: [] },
        },
      ],
      default: [],
    },
    challenges: {
      type: [
        {
          title: { type: String, default: "" },
          description: { type: String, default: "" },
        },
      ],
      default: [],
    },
    large: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
