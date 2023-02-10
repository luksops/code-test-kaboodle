import styled from "styled-components";

export const HomepageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding: 0.5rem;
    border-radius: 8px;
    border: 2px var(--secondaryDark) solid;
    background-color: var(--primaryDark);
    font-weight: 600;
    color: var(--white);

    &::placeholder {
      color: var(--white);
      font-weight: 700;
    }
  }
`;

export const NoSearchResultsWrapper = styled.div`
  grid-column: 1 / 3;
`;


