import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    "id": 1,
    "name": "Smith Village",
    "date": new Date('07/03/2017'),
    "comments": "Night drive with dizzle.",
    "distance": 26.2,
    "gpxData": "../../assets/gpx/1.gpx",
  },
  {
    "id": 2,
    "name": 'Industrial Park',
    "date": new Date('07/08/2017'),
    "comments": 'Cool and windy.',
    "distance": 31.2,
    "gpxData": '../../assets/gpx/2.gpx',
  },
  {
     "id": 3,
     "name": 'National Forest',
     "date": new Date('07/13/2017'),
     "comments": 'Exciting drive!',
     "distance": 23.2,
     "gpxData": '../../assets/gpx/3.gpx',
  },
  {
     "id": 4,
     "name": 'Lake Shore',
     "date": new Date('07/19/2017'),
     "comments": 'Heavy rains!',
     "distance": 38.4,
     "gpxData": '../../assets/gpx/4.gpx',
  }
]
