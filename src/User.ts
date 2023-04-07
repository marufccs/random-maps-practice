import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `The user's name is: ${this.name}`;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
