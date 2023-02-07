import { FC } from "react";
import accommodationJson from "../../MockData/accommodation.json";
import { AccommodationItem } from "../../components/AccommodationItem/AccommodationItem";
import { ListGrid } from "./Home.styled";

export const Home: FC = () => {
  return (
    <>
      <h1>Kabookings</h1>

      <ListGrid>
        {accommodationJson.accommodations.map((accommodation) => (
          <AccommodationItem
            accommodation={accommodation}
            key={accommodation.id}
          />
        ))}
      </ListGrid>
    </>
  );
};
