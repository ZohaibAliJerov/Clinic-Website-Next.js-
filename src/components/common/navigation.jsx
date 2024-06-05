import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

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
  { title: "About Us", key: "about-us" },
  { title: "Contact Us", key: "contact-us" },
  { title: "Our Team", key: "our-team" },
  { title: "Our Services", key: "our-services" },
];

export const Navigation = () => (
  <motion.ul variants={variants} className="toogle-ul">
    {menuItems.map((item, i) => (
      <MenuItem item={item} i={i} key={i} />
    ))}
  </motion.ul>
);
