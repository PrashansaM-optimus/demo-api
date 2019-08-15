"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meetingSchema_1 = require("../schemas/meetingSchema");
// Get all meetings
exports.allMeetings = (req, res) => {
    let meetings = meetingSchema_1.default.find({}, (err, meetings) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(meetings);
        }
    });
};
// Add a meeting
exports.addMeeting = (req, res) => {
    let meeting = new meetingSchema_1.default(req.body);
    meeting.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(meeting);
        }
    });
};
//# sourceMappingURL=meetingController.js.map