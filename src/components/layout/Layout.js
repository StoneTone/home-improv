import React from "react";
import MainNav from "./MainNav";
import Header from "./Header";
import Footer from './Footer';
import { Container } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Container maxW='100%'>
      <div>
        <Header />
        <MainNav />
        <main>{props.children}</main>
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
