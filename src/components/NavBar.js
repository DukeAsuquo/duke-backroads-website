import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialIcons } from "../data";

const NavBar = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul class="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} class="nav-link">
                  {" "}
                  {text}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul class="nav-icons">
          {socialIcons.map((link) => {
            const { id, href, iconic } = link;
            return (
              <li key={id}>
                <a href={href} class="nav-icon">
                  <i class={iconic}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
