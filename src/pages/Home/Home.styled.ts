import styled from "styled-components";
import { mediaQueries } from "../../Styles/media-queries";

export const ListGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  background-color: var(--white);
  border-radius: 8px;
  color: var(--textColorSecondary);
  padding: 1.5rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  @media ${mediaQueries.minWidthLG} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${mediaQueries.maxWidthLG} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
