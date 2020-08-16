import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "../colors";

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15); //eslint-disable-line
  return (
    <header
      css={css`
        background-color: ${colors.primary};
        padding: ${padding + 50}px;
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 50px;
          animation: 1s ${spin} linear infinite;
          &:hover {
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
      >
        🦉
      </span>
    </header>
  );
};
export default NavBar;
