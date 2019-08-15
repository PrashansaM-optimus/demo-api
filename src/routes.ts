import * as express from "express";
import * as meetingController from './controllers/meetingController';

const router = express.Router();
router.get('/', (req: any, res: any) => {
    res.send('We are on home!');
});
router.get('/meeting', meetingController.allMeetings);
router.post('/meeting', meetingController.addMeeting);

export default router;