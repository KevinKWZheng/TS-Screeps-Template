import { ErrorMapper } from "./util/ErrorMapper";

console.log("Code loaded");

export const loop = ErrorMapper.wrapLoop(() => {
    console.log("Hello, world!");
    for (const name in Memory.creeps) {
        if (!(name in Game.creeps)) {
            delete Memory.creeps[name];
            console.log(`Deleted memory of missing creep: ${name}`);
        }
    }
});