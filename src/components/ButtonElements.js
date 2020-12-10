import styled from "styled-components"

export const Button = styled.button`
  width: 8rem;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  outline: none;
  border: none;
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  /* border-radius: 4px;
  background: ${({ primary }) => (primary ? "#FF4040" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16")};
  outline: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif; */

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgb(39, 143, 255) 0%,
      rgb(12, 99, 250) 100%
    );
    transition: all 0.4s ease-out;
    /* transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#0467FB" : "#FF4040")}; */
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
