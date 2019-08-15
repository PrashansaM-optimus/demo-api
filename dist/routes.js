"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const meetingController = require("./controllers/meetingController");
const router = express.Router();
router.get('/', (req, res) => {
    res.send('We are on home!');
});
router.get('/meeting', meetingController.allMeetings);
router.post('/meeting', meetingController.addMeeting);
exports.default = router;
//# sourceMappingURL=routes.js.map