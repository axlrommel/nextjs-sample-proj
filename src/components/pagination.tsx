import React, { Dispatch, SetStateAction } from "react";

export type PaginationProps = {
  current: number;
  total: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

const Pagination = ({
  current,
  total,
  setCurrent,
}: PaginationProps) => {

  const nextPage = () => {
    setCurrent(current + 1);
  };

  const prevPage = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="flex justify-around w-full border-t-2 pt-4">
      <button onClick={prevPage} disabled={current === 1}>
        Previous
      </button>
      <span>
        Page {current} of {total}
      </span>
      <button onClick={nextPage} disabled={current === total}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
