"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.TerrainRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const Terrain_1 = require("./Terrain");
class TerrainRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(Terrain_1.default);
    }
}
exports.TerrainRegistry = TerrainRegistry;
exports.instance = new TerrainRegistry();
exports.default = TerrainRegistry;
//# sourceMappingURL=TerrainRegistry.js.map