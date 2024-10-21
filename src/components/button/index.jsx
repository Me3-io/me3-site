import styled from "./styled.module.scss";

export const ButtonDefault = ({ href, text }) => {
  return (
    <a className={styled.buttonDefault} href={href} target="_blank" rel="noreferrer">
      <p>{text}</p>
    </a>
  );
};

export const ButtonAnimated = ({ href, text }) => {
  return (
    <a className={styled.button} href={href} target="_blank" rel="noreferrer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <p>{text}</p>
    </a>
  );
};
