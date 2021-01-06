import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Terrain from '../Terrain';
export declare class DistributionGroups extends Rule<[], typeof Terrain[]> {}
export default DistributionGroups;
export interface IDistributionGroupsRegistry
  extends IRuleRegistry<DistributionGroups, [], typeof Terrain[]> {}
