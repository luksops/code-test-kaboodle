import { AccommodationType } from "../../MockData/accommodationTypes";

export const filterAccommodationsFromSearchInput = (
  accommodations: AccommodationType[],
  searchInput: string
) => {
  return accommodations.filter((accommodation) =>
    accommodation.name.toLowerCase().includes(searchInput.toLowerCase())
  );
};
