import { FC, useEffect, useState } from "react";
import accommodationJson from "../../MockData/accommodation.json";
import { AccommodationItem } from "../../components/AccommodationItem/AccommodationItem";
import { ListGrid } from "../../components/Grid2Cols/Grid2Cols.styled";
import { HomepageTitle, SearchInputWrapper } from "./Home.styled";
import { paginateAccommodationJson } from "../../helpers/paginateAccommodatonJson";
import { AccommodationType } from "../../MockData/accommodationTypes";
import { Pagination } from "../../components/Pagination/Pagination";
import { filterAccommodationsFromSearchInput } from "./Home.helper";

export const Home: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>("");
  const [paginatedAccommodations, setPaginatedAccommodations] =
    useState<AccommodationType[]>();

  useEffect(() => {
    let newAccommodationsArray;
    if (searchInput.length < 1) {
      newAccommodationsArray = paginateAccommodationJson(
        accommodationJson.accommodations,
        currentPage
      );
    } else {
      const filteredAccommodationArray = filterAccommodationsFromSearchInput(
        accommodationJson.accommodations,
        searchInput
      );

      newAccommodationsArray = paginateAccommodationJson(
        filteredAccommodationArray,
        currentPage
      );
    }

    setPaginatedAccommodations(newAccommodationsArray);
  }, [currentPage, searchInput]);

  const handleSearch = (newSearchString: string) => {
    setSearchInput(newSearchString);
  };

  return (
    <>
      <HomepageTitle>Kabookings</HomepageTitle>

      <SearchInputWrapper>
        <input
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          placeholder="Search a hotel by name"
        />
      </SearchInputWrapper>

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
