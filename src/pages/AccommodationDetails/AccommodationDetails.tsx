import { FC, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AccommodationType } from "../../MockData/accommodationTypes";
import accommodationsJson from "../../MockData/accommodation.json";
import accommodationsAvailabilityJson from "../../MockData/accommodation_availability.json";
import parseHTML from "html-react-parser";
import {
  AccommodationDetailsContainer,
  AccommodationDetailsBanner,
  DescriptionAndFacility,
  AvailableRoomsSection,
} from "./AccommodationDetails.styled";
import { ListGrid } from "../../components/Grid2Cols/Grid2Cols.styled";

export const AccommodationDetails: FC = () => {
  const { accommodationId } = useParams() as { accommodationId: string };
  const [accommodation, setAccommodation] = useState<AccommodationType>();

  useEffect(() => {
    // Find accommodation by id from useParams
    const currentAccommodation = accommodationsJson.accommodations.find(
      (item) => String(item.id) === accommodationId
    );

    // Set accommodation to state
    if (currentAccommodation) setAccommodation({ ...currentAccommodation });
  }, [accommodationId]);

  const availableRoomsList = useMemo(() => {
    const findAvailableRooms = accommodation?.rooms.map((accRoom) => {
      const availableRooms = accommodationsAvailabilityJson.rooms.filter(
        (availableRoom) => accRoom.id === availableRoom.id
      );

      return availableRooms.length ? { ...availableRooms, ...accRoom } : null;
    });

    return findAvailableRooms?.filter((room) => room);
  }, [accommodation]);

  return (
    <>
      <AccommodationDetailsContainer>
        <AccommodationDetailsBanner>
          <h1>{accommodation?.name}</h1>
          <img
            src={accommodation?.images[0].filename}
            alt={accommodation?.images[0].alt}
          />
        </AccommodationDetailsBanner>

        <h2>More about {accommodation?.location.name}:</h2>
        <DescriptionAndFacility>
          <div className="accommodation-details-description">
            {accommodation?.description && parseHTML(accommodation.description)}
          </div>

          <div className="accommodation-details-facilities">
            <h2>Facilities Available:</h2>
            <div className="accommodation-details-facilities-grid">
              {accommodation?.facilities.map((facility, index) => (
                <p>
                  {index + 1}. {facility.label}
                </p>
              ))}
            </div>
          </div>
        </DescriptionAndFacility>

        <AvailableRoomsSection>
          <h2>Available Rooms:</h2>
          <ListGrid>
            {availableRoomsList?.map((room) => (
              <p>{room?.name}</p>
            ))}
          </ListGrid>
        </AvailableRoomsSection>
      </AccommodationDetailsContainer>
    </>
  );
};
