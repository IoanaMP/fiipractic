import React from "react";

const navItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Products", url: "/products" },
  { title: "Articles", url: "/articles/" },
  { title: "Counter", url: "/counter" },
];

const Nav = () => {
  const generateNavList = () =>
    navItems.map((item, index) => (
      <div key={item.title}>
        <a href={item.url}> {item.title} </a>
      </div>
    ));

  return <div className="navigationElement">{generateNavList()}</div>;
};

export default Nav;
