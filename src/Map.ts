/// <reference types="@types/google.maps" />
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  customMap: google.maps.Map;
  constructor() {
    this.customMap = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 1,
      }
    );
  }
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
