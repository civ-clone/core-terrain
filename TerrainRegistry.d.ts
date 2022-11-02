import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import Terrain from './Terrain';
export interface ITerrainRegistry extends IConstructorRegistry<Terrain> {}
export declare class TerrainRegistry
  extends ConstructorRegistry<Terrain>
  implements ITerrainRegistry
{
  constructor();
}
export declare const instance: TerrainRegistry;
export default TerrainRegistry;
