import React from "react";
import NavBar from "./Navbar"
import Footer from "./footer"

const Layout = ({ children }) => (
	<>
		<NavBar/>
		<div style={{ minHeight: "55.5vh" }}>{children}</div>
		<Footer />
	</>
);

export default Layout;