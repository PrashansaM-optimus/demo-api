import { Request, Response } from "express";
import Meeting from '../schemas/meetingSchema';

// Get all meetings
export let allMeetings = (req: Request, res: Response) => {
    let meetings = Meeting.find({}, (err, meetings) => {
        if (err) {
            res.send(err);
        } else {
            res.send(meetings);
        }
    });
}

// Add a meeting
export let addMeeting = (req: Request, res: Response) => {
    let meeting = new Meeting(req.body);
    meeting.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(meeting);
        }
    })
}
