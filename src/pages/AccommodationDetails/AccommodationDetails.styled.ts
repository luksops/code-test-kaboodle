import styled from "styled-components";
import { mediaQueries } from "../../Styles/media-queries";

export const AccommodationDetailsContainer = styled.div`
  margin-bottom: 100px;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const AccommodationDetailsBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .accommodation-details-title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 2rem;

    h1 {
      margin-left: 1rem;
    }
  }
`;

export const DescriptionAndFacility = styled.div`
  display: flex;

  @media ${mediaQueries.maxWidthLG} {
    flex-direction: column;
  }

  .accommodation-details-description {
    p {
      margin-bottom: 0.5rem;
    }

    margin-bottom: 2rem;
  }

  .accommodation-details-facilities {
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    padding: 1rem;
    border-radius: 4px;
    height: fit-content;

    box-shadow: var(--boxShadow);

    @media ${mediaQueries.minWidthMD} {
      margin-left: 3rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media ${mediaQueries.minWidthXL} {
      min-width: 35%;
    }

    @media ${mediaQueries.maxWidthXL} {
      min-width: 40%;
    }

    h2 {
      margin-bottom: 1rem;
    }
  }

  .accommodation-details-facilities-grid {
    display: grid;
    grid-row-gap: 0.5rem;
    grid-column-gap: 1.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media ${mediaQueries.minWidthLG} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export const AvailableRoomsSection = styled.div`
  margin-top: 4rem;
`;

export const NoAvailableRoomsSection = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  h2 {
    a {
      color: var(--secondary);
      text-decoration: underline;
    }
  }
`;
