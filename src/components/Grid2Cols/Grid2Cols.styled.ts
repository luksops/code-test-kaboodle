import styled from "styled-components";
import { mediaQueries } from "../../Styles/media-queries";

export const ListGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  background-color: var(--primary);
  border-radius: 8px;
  padding: 1.5rem;

  box-shadow: var(--boxShadow);

  @media ${mediaQueries.minWidthLG} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${mediaQueries.maxWidthLG} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
