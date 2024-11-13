import styled from "./styled.module.scss";

export const ButtonDefault = ({ href, text }) => {
  const link = typeof href === "string" ? href : href?.url || "#";
  return (
    <a className={styled.buttonDefault} href={link} target="_blank" rel="noreferrer">
      <p>{text}</p>
    </a>
  );
};

export const ButtonAnimated = ({ href, text }) => {
  const link = typeof href === "string" ? href : href?.url || "#";
  return (
    <a className={styled.button} href={link} target="_blank" rel="noreferrer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <p>{text}</p>
    </a>
  );
};
