import styled from "styled-components";

export const InnerButton = styled.button<{
  iconPosition: "left" | "right";
  hasIcon: boolean;
  disabled: boolean;
}>`
  background-color: var(--secondary);
  box-shadow: var(--boxShadow);
  padding: 0.5rem;
  border-radius: 4px;
  color: var(--white);
  border: none;
  display: flex;
  justify-content: center;
  cursor: pointer;

  ${(props) => props.disabled && "cursor: not-allowed;"}

  transition: background 0.3s ease;

  p {
    ${(props) => props.hasIcon && `margin-${props.iconPosition}: 0.3rem`}
  }

  svg {
    transition: all 0.2s ease-in-out;
    max-width: 15px;
    max-height: 15px;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: var(--secondaryDark);

    svg {
      ${(props) =>
        props.iconPosition === "left"
          ? "transform: translateX(-0.1rem)"
          : "transform: translateX(0.1rem)"}
    }
  }


`;
