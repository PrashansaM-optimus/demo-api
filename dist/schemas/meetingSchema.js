"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.MeetingSchema = new mongoose.Schema({
    mentor: { type: String, required: false },
    menti: { type: String, required: false },
    location: { type: String, required: false },
    agenda: { type: String, required: false },
    action: { type: String, required: false },
    issue: { type: String, required: false },
});
const Meeting = mongoose.model('meetings', exports.MeetingSchema);
exports.default = Meeting;
//# sourceMappingURL=meetingSchema.js.map