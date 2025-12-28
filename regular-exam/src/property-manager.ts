import { BaseProperty, Client } from "./models";
import { BasePropertyItem, findItemById } from "./property-types";
import { PropertyType } from "./models";

export class PropertyManager {
  propertyItems: BasePropertyItem[] = [];
  clients: Map<number, Client[]> = new Map();

  addProperty(item: BasePropertyItem): string {
    // in description was BaseProperty
    this.propertyItems.push(item);
    this.clients.set(item.id, []);

    return `Property "${item.address}" (ID: ${item.id}) has been added.`;
  }

  registerClient(propertyId: number, client: Client): string {
    const existing = this.clients.get(propertyId);

    if (!existing) {
      return `ERROR: Property with ID ${propertyId} not found.`;
    }
    existing.push(client);
    return `Client ${client.name} registered for property ID ${propertyId} successfully.`;
  }

  listAllProperties(): string[] {
    const result: string[] = [];
    result.push("--- List of All Properties ---");

    for (const item of this.propertyItems) {
      if (item.type === PropertyType.Apartment) {
        const apart = item as any;
        result.push(
          `[APARTMENT] ${apart.address} (${apart.areaSqM} sqm, Floor ${
            apart.floor
          }) - Annual Tax: ${apart.getAnnualTax().toFixed(2)}`
        );
      } else if (item.type === PropertyType.House) {
        const house = item as any;
        result.push(
          `[HOUSE] ${house.address} (${house.areaSqM} sqm, Garden ${
            house.gardenAreaSqM
          } sqm) - Annual Tax: ${house.getAnnualTax().toFixed(2)}`
        );
      } else {
        result.push(
          `[${item.type.toString().toUpperCase()}] ${item.address} (${
            item.areaSqM
          } sqm) - Annual Tax: ${item.getAnnualTax().toFixed(2)}`
        );
      }
    }
    return result;
  }

  findProperty(propertyId: number): BaseProperty | undefined {
    return findItemById(this.propertyItems, propertyId);
  }
}
