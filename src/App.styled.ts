import styled from "styled-components";
import { mediaQueries } from "./Styles/media-queries";

export const AppContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  margin-top: 15vh;

  @media ${mediaQueries.minWidthLG} {
    padding: 0 7rem;
  }

  @media ${mediaQueries.maxWidthLG} {
    padding: 0 5.5rem;
  }

  @media ${mediaQueries.maxWidthMD} {
    padding: 0 4rem;
  }

  @media ${mediaQueries.maxWidthSM} {
    padding: 0 2.5rem;
  }

  @media ${mediaQueries.maxWidthXS} {
    padding: 0 1.5rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;
