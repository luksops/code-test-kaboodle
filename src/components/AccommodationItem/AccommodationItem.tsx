import { FC } from "react";
import {
  AccommodationContent,
  AccommodationGridItem,
  AccommodationImage,
} from "./AccommodationItem.styled";
import accommodationJson from "../../MockData/accommodation.json";
import { FaStar } from "react-icons/fa";
import parseHTML from "html-react-parser";

interface Props {
  accommodation: typeof accommodationJson.accommodations[0];
}

export const AccommodationItem: FC<Props> = ({ accommodation }) => {
  return (
    <AccommodationGridItem>
      <AccommodationImage
        imageUrl={accommodation.images[0].filename}
        title={accommodation.images[0].alt}
      />
      <AccommodationContent>
        <div className="accommodation-content-name-and-rating">
          <p>{accommodation.name}</p>
          <div className="accommodation-content-rating">
            <p>{accommodation.rating.id}</p>
            <FaStar />
          </div>
        </div>

        <p className="accommodation-content-location">
          {accommodation.country.name}
        </p>

        <div className="accommodation-content-description">
          {parseHTML(accommodation.description)}
        </div>

        <div className="accommodation-content-type-facilities">
          <p>{accommodation.type.name}</p>
          <p>
            {accommodation.facilities.length}
            {accommodation.facilities.length > 1
              ? " facilities"
              : " facility"}{" "}
            available
          </p>
        </div>
      </AccommodationContent>
    </AccommodationGridItem>
  );
};
