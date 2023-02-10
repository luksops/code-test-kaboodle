import accommodationJson from "../MockData/accommodation.json";

export const paginateAccommodationJson = (
  json: typeof accommodationJson.accommodations,
  page: number
) => {
  return json.slice(page * 10, (page + 1) * 10);
};
