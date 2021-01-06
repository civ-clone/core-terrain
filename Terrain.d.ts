import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
export interface ITerrain extends IDataObject {
  clone(): Terrain;
}
export declare class Terrain extends DataObject implements ITerrain {
  #private;
  constructor(ruleRegistry?: RuleRegistry);
  clone(): Terrain;
}
export default Terrain;
