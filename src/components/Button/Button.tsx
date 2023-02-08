import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { InnerButton } from "./Button.styled";

interface Props {
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  placeholder: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
}

export const Button: FC<Props> = ({
  onClick,
  href,
  icon,
  placeholder,
  iconPosition = "left",
  disabled = false,
}) => {
  return href ? (
    <Link to={href}>
      <InnerButton
        disabled={disabled}
        hasIcon={Boolean(icon)}
        iconPosition={iconPosition}
        onClick={onClick}
      >
        {iconPosition === "left" && icon && icon}
        <p>{placeholder}</p>
        {iconPosition === "right" && icon && icon}
      </InnerButton>
    </Link>
  ) : (
    <InnerButton
      disabled={disabled}
      hasIcon={Boolean(icon)}
      iconPosition={iconPosition}
      onClick={onClick}
    >
      {iconPosition === "left" && icon && icon}
      <p>{placeholder}</p>
      {iconPosition === "right" && icon && icon}
    </InnerButton>
  );
};
