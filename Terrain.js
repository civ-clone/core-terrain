"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _ruleRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terrain = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Created_1 = require("./Rules/Created");
class Terrain extends DataObject_1.DataObject {
    constructor(ruleRegistry = RuleRegistry_1.instance) {
        super();
        _ruleRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _ruleRegistry, ruleRegistry);
        __classPrivateFieldGet(this, _ruleRegistry).process(Created_1.Created, this);
    }
    clone() {
        const clone = new this.constructor(__classPrivateFieldGet(this, _ruleRegistry));
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
_ruleRegistry = new WeakMap();
exports.default = Terrain;
//# sourceMappingURL=Terrain.js.map