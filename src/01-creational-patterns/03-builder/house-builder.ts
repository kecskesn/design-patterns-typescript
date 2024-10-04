import House from './house';

// builder
interface IHouseBuilder {
  house: House;
  setBuildingType(buildingType: string): this;
  setWallMaterial(wallMaterial: string): this;
  setNumberDoors(number: number): this;
  setNumberWindows(number: number): this;
  setHasDragon(hasDragon: boolean): this;
  getResult(): House;
}

export default class HouseBuilder implements IHouseBuilder {
  house: House;

  constructor() {
    this.house = new House();
  }

  setBuildingType(buildingType: string): this {
    this.house.buildingType = buildingType;
    return this;
  }

  setWallMaterial(wallMaterial: string): this {
    this.house.wallMaterial = wallMaterial;
    return this;
  }

  setNumberDoors(number: number): this {
    this.house.doors = number;
    return this;
  }

  setNumberWindows(number: number): this {
    this.house.windows = number;
    return this;
  }

  setHasDragon(hasDragon: boolean): this {
    this.house.hasDragon = hasDragon;
    return this;
  }

  getResult(): House {
    return this.house;
  }
}
