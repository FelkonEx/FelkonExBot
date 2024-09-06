import { recommendationCommand } from "./recommendations/recommendations";
import { pingCommand } from "./utility/ping";
import { serverInfoCommand } from "./utility/server";
import { userInfoCommand } from "./utility/user";

const Commands = [
    recommendationCommand,
    pingCommand,
    userInfoCommand,
    serverInfoCommand,
];

export { Commands };
