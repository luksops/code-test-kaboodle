import { FC } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "../Button/Button";
import { PaginationWrapper } from "./Pagination.styled";

interface Props {
  currentPage: number;
  changePageFunction: (targetPage: number) => void;
  paginatedArrayLength: number;
}

export const Pagination: FC<Props> = ({
  currentPage,
  changePageFunction,
  paginatedArrayLength,
}) => {
  console.log(paginatedArrayLength);

  return (
    <PaginationWrapper>
      <Button
        disabled={currentPage - 1 < 0}
        onClick={() => changePageFunction(currentPage - 1)}
        icon={<FaChevronLeft />}
        placeholder="PREVIOUS"
      />

      <Button
        disabled={currentPage + 2 > paginatedArrayLength}
        onClick={() => changePageFunction(currentPage + 1)}
        icon={<FaChevronRight />}
        placeholder="NEXT"
        iconPosition="right"
      />
    </PaginationWrapper>
  );
};
