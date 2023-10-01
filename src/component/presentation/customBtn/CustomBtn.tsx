import React from "react";
import "./CustomBtn.style.scss";

type ButtonProps = {
  label: string;
  text: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomBtn = (props: ButtonProps) => {
  const { label, text, disabled, onClick } = props;

  return (
    <div className="button-container">
      <span>{label}</span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default CustomBtn;
