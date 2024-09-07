import { commandHandler } from "./commandHandler";
import { autoResponseHandler } from "./autoResponseHandler";
import { clientReadyHandler } from "./clientReadyHandler";
import { modalSubmitHandler } from "./modalSubmitHandler";

const Events = [
    commandHandler,
    autoResponseHandler,
    clientReadyHandler,
    modalSubmitHandler,
];

export { Events };
