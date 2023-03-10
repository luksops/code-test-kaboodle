import { FC, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AccommodationAvailabilityType,
  AccommodationType,
} from "../../MockData/accommodationTypes";
import accommodationsJson from "../../MockData/accommodation.json";
import accommodationsAvailabilityJson from "../../MockData/accommodation_availability.json";
import parseHTML from "html-react-parser";
import {
  AccommodationDetailsContainer,
  AccommodationDetailsBanner,
  DescriptionAndFacility,
  AvailableRoomsSection,
  NoAvailableRoomsSection,
} from "./AccommodationDetails.styled";
import { ListGrid } from "../../components/Grid2Cols/Grid2Cols.styled";
import { Button } from "../../components/Button/Button";
import { FaChevronLeft } from "react-icons/fa";
import { RoomItem } from "../../components/RoomItem/RoomItem";
import { AvailableAccommodationType } from "../../MockData/accommodationTypes";

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

  const availableRoomsList = useMemo(():
    | (AvailableAccommodationType | null)[]
    | undefined => {
    const findAvailableRooms = accommodation?.rooms.map((accRoom) => {
      const availableRooms: AccommodationAvailabilityType | undefined =
        accommodationsAvailabilityJson.rooms.find(
          (availableRoom) => accRoom.id === availableRoom.id
        );

      return availableRooms ? { ...availableRooms, ...accRoom } : null;
    });

    return findAvailableRooms?.filter((room) => Boolean(room) !== false);
  }, [accommodation]);

  return (
    <AccommodationDetailsContainer>
      <AccommodationDetailsBanner>
        <div className="accommodation-details-title-wrapper">
          <Button href="/" icon={<FaChevronLeft />} placeholder="Home" />
          <h1>{accommodation?.name}</h1>
        </div>
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

      {availableRoomsList?.length ? (
        <AvailableRoomsSection>
          <h2>Available Rooms:</h2>
          <ListGrid>
            {availableRoomsList?.map(
              (room) => room && <RoomItem key={room.id} room={room} />
            )}
          </ListGrid>
        </AvailableRoomsSection>
      ) : (
        <NoAvailableRoomsSection>
          <h2>
            Sorry, {accommodation?.location.name} has no available rooms at the
            moment. <br /> <Link to="/">Go back to homepage</Link> to find out
            other options.
          </h2>
        </NoAvailableRoomsSection>
      )}
    </AccommodationDetailsContainer>
  );
};
