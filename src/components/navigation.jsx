import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu_item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
};

const menuItems = [
  { title: "Home", key: "home" },
  { title: "About Us", key: "about" },
  { title: "Contact Us", key: "contact" },
  { title: "Our Team", key: "team" },
  { title: "Our Services", key: "services" },
];

export const Navigation = ({ closeSidebar }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    closeSidebar();
  };
  return (
    <motion.ul variants={variants} className="toogle-ul">
      {menuItems.map((item, i) => (
        <MenuItem
          item={item}
          key={i}
          onClick={() => scrollToSection(item.key)}
        />
      ))}
    </motion.ul>
  );
};
