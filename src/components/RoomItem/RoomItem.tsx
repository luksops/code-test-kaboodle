import { FC } from "react";
import { AvailableAccommodationType } from "../../MockData/accommodationTypes";
import {
  AvailableRooms,
  RoomCapacity,
  RoomItemWrapper,
  RoomNamePrice,
} from "./RoomItem.styled";
import { GiPerson } from "react-icons/gi";

interface Props {
  room: AvailableAccommodationType;
}

export const RoomItem: FC<Props> = ({ room }) => {
  return (
    <RoomItemWrapper>
      <RoomNamePrice>
        <span>
          <p>{room.name}</p>
          <AvailableRooms>
            {room.available > 1
              ? `${room.available} rooms available`
              : `Last room available`}
          </AvailableRooms>
        </span>
        <div>{room.price?.price}</div>
      </RoomNamePrice>

      <p>Room type: {room.type}</p>
      <RoomCapacity>
        From: {room.max_occupancy}
        <GiPerson /> To: {room.min_occupancy}
        <GiPerson />
      </RoomCapacity>
    </RoomItemWrapper>
  );
};
