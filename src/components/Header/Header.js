import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<header className="header-area">
			<Navbar expand="lg" className="p-3">
				<Container>
					<Navbar.Brand href="#home">
						<span>
							<img
								src="../assets/house-logo.svg"
								className="house-logo"
								alt="house-logo"
							/>
							<img
								src="../assets/meta-logo.svg"
								className="brand-logo"
								alt="brand-logo"
							/>
						</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Place to stay</Nav.Link>
							<Nav.Link href="#link">NFTs</Nav.Link>
							<Nav.Link href="#link">Community</Nav.Link>
						</Nav>
						<Button className="mr-5">Connect wallet</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
