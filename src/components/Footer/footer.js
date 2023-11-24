import { Box, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
import logo from "../Menu/logo512.png";
import "../CSS/loading.css";

/**
 * Footer compnent.
 * @return {ReactElement} Footer component.
 */
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box p={4} as="footer">
      <Box maxW="6xl" mx="auto" fontSize="sm">
        <Box
          d="flex"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <HStack spacing={2}>
            <Box d="flex" alignItems="center">
              <Link
                onClick={() => navigate("/")}
                d="flex"
                _focus={{ outline: "none" }}
                aria-label="Logo"
              >
                <img
                  alt="site-logo"
                  aria-label="return-home"
                  height={40}
                  width={40}
                  src={logo}
                  id="image-that-loads"
                />
              </Link>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
