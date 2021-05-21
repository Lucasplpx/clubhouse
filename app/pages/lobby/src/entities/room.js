class Attendee {
  constructor({ id, img, username }) {
    this.id = id;
    this.img = img;
    this.username = username;
  }
}

export default class Room {
  constructor({
    id,
    topic,
    subTopic,
    roomLink,
    attendeesCount,
    speakersCount,
    featureAttendees,
    owner,
  }) {
    this.id = id;
    this.topic = topic;
    this.subTopic = subTopic || 'Semana JS Expert 4.0';
    this.attendeesCount = attendeesCount;
    this.speakersCount = speakersCount;
    this.featureAttendees = featureAttendees?.map(
      (attendee) => new Attendee(attendee)
    );
    this.owner = new Attendee(owner);
    this.roomLink = roomLink;
  }
}
