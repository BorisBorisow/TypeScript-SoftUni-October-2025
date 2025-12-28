import { BaseProperty, ContainsId, PropertyType } from "./models";
import { ApplyCommission } from "./decorators";

export abstract class BasePropertyItem implements BaseProperty {
  public id: number;
  public address: string;
  public areaSqM: number; // (Area in square meters)
  public type: PropertyType;

  constructor(
    id: number,
    address: string,
    areaSqM: number,
    type: PropertyType
  ) {
    this.id = id;
    this.address = address;
    (this.areaSqM = areaSqM), (this.type = type);
  }

  abstract getAnnualTax(): number;
}

export class Apartment extends BasePropertyItem {
  public floor: number;
  private _salePrice: number;

  constructor(
    id: number,
    address: string,
    areaSqM: number,
    floor: number,
    salePrice: number
  ) {
    super(id, address, areaSqM, PropertyType.Apartment);
    this.floor = floor;
    this._salePrice = salePrice;
  }

  get baseSalePrice(): number {
    return this._salePrice;
  }

  @ApplyCommission
  get finalSalePrice() {
    return `Apartment Final Price: N/A (No Decorator)`;
  }

  getAnnualTax() {
    return this.areaSqM * 2.5 + this.floor * 5;
  }
}

export class House extends BasePropertyItem {
  public gardenAreaSqM: number;
  private _salePrice: number;
  constructor(
    id: number,
    address: string,
    areaSqM: number,
    gardenAreaSqM: number,
    salePrice: number
  ) {
    super(id, address, areaSqM, PropertyType.House);
    this.gardenAreaSqM = gardenAreaSqM;
    this._salePrice = salePrice;
  }

  get baseSalePrice(): number {
    return this._salePrice;
  }

  @ApplyCommission
  get finalSalePrice(): number {
    return this._salePrice;
  }

  getAnnualTax() {
    return this.areaSqM * 3.0 + this.gardenAreaSqM * 1.5;
  }
}

export function findItemById<T extends ContainsId>(arr: T[], id: number) {
  return arr.find((item) => item.id === id);
}
