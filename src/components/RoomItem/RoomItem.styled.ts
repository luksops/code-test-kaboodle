import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  background-color: var(--primaryLighter);
  padding: 1rem;
  border-radius: 6px;
`;

export const RoomNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;

  div {
    background-color: var(--primary);
    padding: 0.5rem;
    border-radius: 4px;
    height: fit-content;
  }
`;

export const AvailableRooms = styled.p`
  font-weight: 300;
  padding-bottom: 1rem;
`;

export const RoomCapacity = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;

  svg {
    fill: var(--primary);
    height: 20px;
    width: 20px;
  }
`;
