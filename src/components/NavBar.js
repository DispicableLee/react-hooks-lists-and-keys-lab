import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const renderedNav = links.map((link)=>{
    return (
      <a href={link}>{link}</a>
    )
  })
  return <nav>
        {renderedNav}
    </nav>;
}

export default NavBar;
