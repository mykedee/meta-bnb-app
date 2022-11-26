import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
	return (
		<footer className="footer">
			<Container className="pt-5">
				<Row>
					<Col>
						<h6 className="footer-title">Logo</h6>
						<div className="mt-3">
							<p>
								<a href="/">NFT</a>
							</p>
							<p>
								<a href="/">Tokens</a>
							</p>
							<p>
								<a href="/">Lanlords</a>
							</p>
							<p>
								<a href="/">Discord</a>
							</p>
						</div>
					</Col>
					<Col>
						<h6 className="footer-title">Community</h6>
						<div className="mt-3">
							<p>
								<a href="/">NFT</a>
							</p>
							<p>
								<a href="/">Tokens</a>
							</p>
							<p>
								<a href="/">Lanlords</a>
							</p>
							<p>
								<a href="/">Discord</a>
							</p>
						</div>
					</Col>
					<Col>
						<h6 className="footer-title">Places</h6>
						<div className="mt-3">
							<p>
								<a href="/">Castle</a>
							</p>

							<p>
								<a href="/">Farm</a>
							</p>
							<p>
								<a href="/">Beach</a>
							</p>
							<p>
								<a href="/">Learn more</a>
							</p>
						</div>
					</Col>
					<Col>
						<h6 className="footer-title">About us</h6>
						<div className="mt-3">
							<p>
								<a href="/">Road map</a>
							</p>
							<p>
								<a href="/">Creators</a>
							</p>
							<p>
								<a href="/">Career</a>
							</p>
							<p>
								<a href="/">Contact us</a>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
