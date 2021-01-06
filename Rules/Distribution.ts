import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Terrain from '../Terrain';

export interface IDistributionDefinition {
  from?: number;
  to?: number;
  coverage?: number;
  cluster?: boolean;
  clusterChance?: number;
  path?: boolean;
  pathChance?: number;
  fill?: boolean;
}

type IDistributionArgs = [typeof Terrain, Terrain[]];

export class Distribution extends Rule<
  IDistributionArgs,
  IDistributionDefinition[]
> {}

export default Distribution;

export interface IDistributionRegistry
  extends IRuleRegistry<
    Distribution,
    IDistributionArgs,
    IDistributionDefinition[]
  > {}
