import styled from "styled-components";
import { mediaQueries } from "../../Styles/media-queries";

export const AccommodationGridItem = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--primaryLighter);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:nth-last-child(2) {
    @media ${mediaQueries.minWidthLG} {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  a {
    min-width: 35%;
    height: 100%;

    @media ${mediaQueries.maxWidthMD} {
      min-width: 0;
      height: 0;
    }
  }
`;

export const AccommodationImage = styled.div<{
  imageUrl: string;
}>`
  min-width: 100%;
  height: 100%;

  @media ${mediaQueries.minWidthMD} {
    background: center/cover no-repeat url(${(props) => props.imageUrl});
  }
`;

export const AccommodationContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 1rem;

  .accommodation-content-name-and-rating {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 600;

    .accommodation-content-rating {
      background-color: var(--secondary);
      padding: 0.5rem;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin-right: 0.5rem;
      }
    }
  }

  .accommodation-content-location {
    font-weight: 300;
    color: var(--secondaryLighter);
    margin-bottom: 1rem;
  }

  .accommodation-content-description {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    margin-bottom: 1rem;
  }

  .accommodation-content-type-facilities {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    align-items: flex-end;
    flex-grow: 1;
  }
`;
