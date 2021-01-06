import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import { Created, ICreatedRegistry } from './Rules/Created';

export interface ITerrain extends IDataObject {
  clone(): Terrain;
}

export class Terrain extends DataObject implements ITerrain {
  #ruleRegistry: RuleRegistry;

  constructor(ruleRegistry: RuleRegistry = ruleRegistryInstance) {
    super();

    this.#ruleRegistry = ruleRegistry;

    (this.#ruleRegistry as ICreatedRegistry).process(Created, this);
  }

  clone(): Terrain {
    const clone = new (<typeof Terrain>this.constructor)(this.#ruleRegistry);

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

export default Terrain;
