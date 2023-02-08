import accommodationJson from "../MockData/accommodation.json";

export const paginateAccommodationJson = (
  json: typeof accommodationJson,
  page: number
) => {
  return json.accommodations.slice(page * 10, (page + 1) * 10);
};
