export interface User {
  id: number;
  name: string;
  address: Address;
  phone: string;
  website: string;
}

export interface Address {
  street: string;
  city: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}
