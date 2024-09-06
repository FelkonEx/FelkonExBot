import { commandHandler } from "./commandHandler";
import { autoResponseHandler } from "./autoResponseHandler";
import { clientReadyHandler } from "./clientReadyHandler";

const Events = [commandHandler, autoResponseHandler, clientReadyHandler];

export { Events };
