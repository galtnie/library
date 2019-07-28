import styled from "styled-components";
import { Paper, Button } from "@material-ui/core";
import arrow from "../images/arrow_left.svg";

export const StyledPaper = styled(Paper)`
  height: auto;
  margin-top: 2rem;
  marginbottom: 2rem;
  padding: 10%;
`;

export const ButtonListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-item: flex-start;

  flex-wrap: wrap;
  box-sizing: content-box;
`;
//   align-content: space-between;
// justify-content: space-between;

export const StyledGenreButton = styled(Button)`
  width: 9rem !important;
  text-transform: none !important;
  margin-bottom: 4% !important;
  margin-right: 2% !important;
  margin-left: 2% !important;
  cursor: pointer !important;
  padding: 0.5rem 0 0.5rem 0 !important;
`;

export const PageTurnWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const PageTurnButton = styled(Button)`
  padding: 0.5rem !important;
  margin-left: 0.5rem !important;
  text-transform: none !important;
  width: 7rem !important;
  position: relative !important;
`;

export const BackButtonArrow = styled.div`
  position: absolute;
  left: 0;
  background-image: url(${arrow});
  height: 1rem;
  width: 1rem;
  background-repeat: no-repeat;
  background-size: auto 200%;
  background-position: center;
`;
