"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Terrain_ruleRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terrain = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Created_1 = require("./Rules/Created");
class Terrain extends DataObject_1.DataObject {
    constructor(ruleRegistry = RuleRegistry_1.instance) {
        super();
        _Terrain_ruleRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _Terrain_ruleRegistry, ruleRegistry, "f");
        __classPrivateFieldGet(this, _Terrain_ruleRegistry, "f").process(Created_1.default, this);
    }
    clone() {
        const clone = new this.constructor(__classPrivateFieldGet(this, _Terrain_ruleRegistry, "f"));
        // TODO: make a `Cloned` `Rule` to handle cloning features
        // clone
        //   .features()
        //   .push(
        //     ...this.#features.map(
        //       (feature: TerrainFeature): TerrainFeature => feature.clone()
        //     )
        //   );
        return clone;
    }
}
exports.Terrain = Terrain;
_Terrain_ruleRegistry = new WeakMap();
exports.default = Terrain;
//# sourceMappingURL=Terrain.js.map