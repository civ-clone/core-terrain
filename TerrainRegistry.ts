import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import Terrain from './Terrain';

export interface ITerrainRegistry extends IConstructorRegistry<Terrain> {}

export class TerrainRegistry
  extends ConstructorRegistry<Terrain>
  implements ITerrainRegistry {
  constructor() {
    super(Terrain);
  }
}

export const instance: TerrainRegistry = new TerrainRegistry();

export default TerrainRegistry;
