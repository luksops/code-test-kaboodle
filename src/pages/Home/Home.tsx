import { FC, useEffect, useState } from "react";
import accommodationJson from "../../MockData/accommodation.json";
import { AccommodationItem } from "../../components/AccommodationItem/AccommodationItem";
import { ListGrid } from "../../components/Grid2Cols/Grid2Cols.styled";
import { HomepageTitle } from "./Home.styled";
import { paginateAccommodationJson } from "../../helpers/paginateAccommodatonJson";
import { AccommodationType } from "../../MockData/accommodationTypes";
import { Pagination } from "../../components/Pagination/Pagination";

export const Home: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [paginatedAccommodations, setPaginatedAccommodations] =
    useState<AccommodationType[]>();

  useEffect(() => {
    const newAccommodationsArray = paginateAccommodationJson(
      accommodationJson,
      currentPage
    );

    setPaginatedAccommodations(newAccommodationsArray);
  }, [currentPage]);

  return (
    <>
      <HomepageTitle>Kabookings</HomepageTitle>

      <Pagination
        changePageFunction={setCurrentPage}
        currentPage={currentPage}
      />
      <ListGrid>
        {paginatedAccommodations?.map((accommodation) => (
          <AccommodationItem
            accommodation={accommodation}
            key={accommodation.id}
          />
        ))}
      </ListGrid>
      <Pagination
        changePageFunction={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};
