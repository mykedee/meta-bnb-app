import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

import './FooterTop.css';

const FooterTop = () => {
	return (
		<div className="footer-top">
			<Container>
				<Row className="justify-content-center">
					<Col>
						<h1>Metabnb NFTs</h1>
						<p>
							Discover our NFT gift cards collection. Loyal customers gets
							amazing gift cards which are traded as NFTs. These NFTs gives our
							cutomer access to loads of our exclusive services.
						</p>
						<Button className="footerTopBtn">Learn more</Button>
					</Col>
					<Col>
						<img
							src="../assets/nft-image.svg"
							className="nft-image"
							alt="nfts"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FooterTop;
