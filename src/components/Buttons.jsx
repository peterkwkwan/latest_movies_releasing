import React from "react";

export const Buttons = ({ page, handlePreviousClicked, handleNextClicked }) => {
  const Button = ({ onClickFunction, text }) => {
    return (
      <button
        className="rounded p-4 border bg-primary-main text-gray-light font-bold mr-2 hover:bg-gray-light hover:text-primary-main hover:border hover:border-primary-main "
        type="button"
        onClick={onClickFunction}
      >
        {text}
      </button>
    );
  };
  return (
    <div className="pb-8">
      {page !== 1 && (
        <Button text="Previous Page" onClickFunction={handlePreviousClicked} />
      )}
      <Button text="Next Page" onClickFunction={handleNextClicked} />
    </div>
  );
};
