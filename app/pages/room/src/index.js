import { constants } from '../../_shared/constants.js';
import RoomController from './controller.js';
import RoomSocketBuilder from './util/roomSocket.js';
import View from './view.js';

const urlParams = new URLSearchParams(window.location.search);
const keys = ['id', 'topic'];

const urlData = keys.map((key) => [key, urlParams.get(key)]);

const user = {
  img: 'https://avatars.githubusercontent.com/u/35532721?v=4',
  username: 'Lucas ' + Date.now(),
};

const roomInfo = {
  room: { ...Object.fromEntries(urlData) },
  user,
};

const socketBuilder = new RoomSocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room,
});

const dependencies = {
  view: View,
  socketBuilder,
  roomInfo,
};

await RoomController.initialize(dependencies);
