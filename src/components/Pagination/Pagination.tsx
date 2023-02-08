import { FC } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "../Button/Button";
import { PaginationWrapper } from "./Pagination.styled";
import accommodationJson from "../../MockData/accommodation.json";

interface Props {
  currentPage: number;
  changePageFunction: (targetPage: number) => void;
}

export const Pagination: FC<Props> = ({ currentPage, changePageFunction }) => {
  return (
    <PaginationWrapper>
      <Button
        disabled={currentPage - 1 < 0}
        onClick={() => changePageFunction(currentPage - 1)}
        icon={<FaChevronLeft />}
        placeholder="PREVIOUS"
      />
      <Button
        disabled={currentPage + 2 > accommodationJson.accommodations.length}
        onClick={() => changePageFunction(currentPage + 1)}
        icon={<FaChevronRight />}
        placeholder="NEXT"
        iconPosition="right"
      />
    </PaginationWrapper>
  );
};
