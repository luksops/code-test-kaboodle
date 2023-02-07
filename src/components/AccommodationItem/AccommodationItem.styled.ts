import styled from "styled-components";

export const AccommodationGridItem = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--primaryLighter);
`;

export const AccommodationImage = styled.div<{
  imageUrl: string;
}>`
  min-width: 35%;
  height: 100%;
  background: center/cover no-repeat url(${(props) => props.imageUrl});
`;
export const AccommodationContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 0.5rem;

  .accommodation-content-name-and-rating {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 600;

    .accommodation-content-rating {
      background-color: var(--secondary);
      padding: 0.5rem;
      border-radius: 4px;
      color: var(--white);

      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin-right: 0.5rem;
      }
    }
  }

  .accommodation-content-location {
    color: var(--textColorSecondaryLighter);
    margin-bottom: 1rem;
  }

  .accommodation-content-description {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    color: var(--textColorSecondaryLight);
    margin-bottom: 1rem;
  }

  .accommodation-content-type-facilities {
    display: flex;
    justify-content: space-between;
    color: var(--textColorSecondaryLight);
    font-weight: 700;
    /* justify-content: end; */
    align-items: flex-end;
    flex-grow: 1;
  }
`;
