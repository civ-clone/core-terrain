import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Terrain from '../Terrain';
export declare class Created extends Rule<[Terrain], void> {}
export default Created;
export interface ICreatedRegistry
  extends IRuleRegistry<Created, [Terrain], void> {}
