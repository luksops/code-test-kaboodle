import { FC } from "react";
import accommodationJson from "../../MockData/accommodation.json";
import { AccommodationItem } from "../../components/AccommodationItem/AccommodationItem";
import { ListGrid } from "../../components/Grid2Cols/Grid2Cols.styled";
import { HomepageTitle } from "./Home.styled";

export const Home: FC = () => {
  return (
    <>
      <HomepageTitle>Kabookings</HomepageTitle>

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
