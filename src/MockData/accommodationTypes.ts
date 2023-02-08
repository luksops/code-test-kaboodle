import accommodationsJson from "./accommodation.json";

type Modify<T, R> = Omit<T, keyof R> & R;

export type FacilityType = { id: number; label: string } | undefined;

export type AccommodationType =
  typeof accommodationsJson.accommodations[number];

export interface AccommodationAvailabilityType {
  id: number;
  available: number;
  total: number;
}

export type AccommodationRoom = Modify<
  AccommodationType["rooms"][number],
  {
    facilities?: FacilityType[];
    price?: {
      value: number;
      currency_id: number;
      currency_iso_code: string;
      currency_exponent: number;
      price: string;
    };
    type?: string;
  }
>;

export type AvailableAccommodationType = AccommodationRoom &
  AccommodationAvailabilityType;

