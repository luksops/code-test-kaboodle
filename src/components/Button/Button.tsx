import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { InnerButton } from "./Button.styled";

interface Props {
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  placeholder: string;
}

export const Button: FC<Props> = ({ onClick, href, icon, placeholder }) => {
  return href ? (
    <Link to={href}>
      <InnerButton onClick={onClick}>
        {icon && icon}
        {placeholder}
      </InnerButton>
    </Link>
  ) : (
    <InnerButton onClick={onClick}>
      {icon && icon}
      {placeholder}
    </InnerButton>
  );
};
