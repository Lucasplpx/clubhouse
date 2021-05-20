import Attendee from './attendee.js';

export default class Room {
  constructor({
    id,
    topic,
    attendeesCount,
    speakersCount,
    featureAttendees,
    owner,
    users,
  }) {
    this.id = id;
    this.topic = topic;
    this.attendeesCount = attendeesCount;
    this.speakersCount = speakersCount;
    this.featureAttendees = featureAttendees?.map(
      (attendee) => new Attendee(attendee)
    );
    this.owner = new Attendee(owner);
    this.users = users;
  }
}
