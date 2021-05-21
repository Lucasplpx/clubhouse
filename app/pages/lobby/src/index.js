import { constants } from '../../_shared/constants.js';
import LobbyController from './controller.js';
import LobbySocketBuilder from './util/lobbySocketBuilder.js';
import View from './view.js';

const user = {
  img: 'https://avatars.githubusercontent.com/u/35532721?v=4',
  username: 'Lucas ' + Date.now(),
};

const socketBuilder = new LobbySocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.lobby,
});

const dependencies = {
  socketBuilder,
  user,
  view: View,
};

await LobbyController.initialize(dependencies);
