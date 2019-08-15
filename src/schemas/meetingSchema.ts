import * as mongoose from "mongoose";

export const MeetingSchema = new mongoose.Schema({
    mentor: {type: String, required: false},
    menti: {type: String, required: false},
    location: {type: String, required: false},
    agenda: {type: String, required: false},
    action: {type: String, required: false},
    issue: {type: String, required: false},
});

const Meeting = mongoose.model('meetings', MeetingSchema);
export default Meeting;