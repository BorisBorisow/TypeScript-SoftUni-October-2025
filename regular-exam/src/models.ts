export enum PropertyType {
  "Apartment",
  "House",
  "LandPlot",
}

export interface BaseProperty {
  id: number;
  address: string;
  areaSqM: number; // (Area in square meters)
  type: PropertyType;
}

export interface Client {
  name: string;
  phone: string;
}

export interface ContainsId {
  id: number;
}
