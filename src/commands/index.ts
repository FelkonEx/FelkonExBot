import { Command, ModalCommand } from "types/customTypes";
import { recommendationCommand } from "./recommendations/recommendations";
import { recommendationsModalCommand } from "./recommendations/recommendationsModal";
import { pingCommand } from "./utility/ping";
import { serverInfoCommand } from "./utility/server";
import { userInfoCommand } from "./utility/user";


const TextCommands: Array<Command> = [
    recommendationCommand,
    pingCommand,
    userInfoCommand,
    serverInfoCommand,
];

const ModalCommands: Array<ModalCommand> = [recommendationsModalCommand];

const Commands = TextCommands.concat(ModalCommands);
export { Commands };
