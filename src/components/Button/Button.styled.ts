import styled from "styled-components";

export const InnerButton = styled.button`
  background-color: var(--secondary);
  box-shadow: var(--boxShadow);
  padding: 0.5rem;
  border-radius: 4px;
  color: var(--white);
  border: none;
  display: flex;
  justify-content: center;

  transition: background 0.3s ease;

  svg {
    transition: all 0.2s ease-in-out;
    max-width: 15px;
    max-height: 15px;

    margin-right: 0.3rem;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: var(--secondaryDark);

    svg {
      transform: translateX(-0.1rem);
    }
  }

  &:active,
  &:focus {
    border: 1px solid var(--secondaryLighter);
  }
`;
