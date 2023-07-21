import React from "react";
import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/Glogo.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <HStack px={4} py={2}>
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <Spacer />
      <Link to="/main">
        <Text
          color={isActive("/main") ? "#CDCDCD" : "white"}
          fontWeight={isActive("/main") ? "bold" : "normal"}
          textDecoration={isActive("/main") ? "underline" : "none"}
        >
          Home
        </Text>
      </Link>
      <Link to="/contact">
        <Text
          color={isActive("/contact") ? "#CDCDCD" : "white"}
          fontWeight={isActive("/contact") ? "bold" : "normal"}
          textDecoration={isActive("/contact") ? "underline" : "none"}
        >
          Contact
        </Text>
      </Link>
      <Link to="/experience">
        <Text
          color={isActive("/experience") ? "#CDCDCD" : "white"}
          fontWeight={isActive("/experience") ? "bold" : "normal"}
          textDecoration={isActive("/experience") ? "underline" : "none"}
        >
          Experience
        </Text>
      </Link>
      <Link to="/resume">
        <Text
          color={isActive("/resume") ? "#CDCDCD" : "white"}
          fontWeight={isActive("/resume") ? "bold" : "normal"}
          textDecoration={isActive("/resume") ? "underline" : "none"}
        >
          Resume
        </Text>
      </Link>
    </HStack>
  );
};

export default NavBar;
