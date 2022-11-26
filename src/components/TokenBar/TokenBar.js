import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './TokenBar.css';

const TokenBar = () => {
	return (
		<div className="token-area">
			<Container>
				<Row>
					<Col>
						<img src="../assets/metamask.svg" alt="" />
					</Col>
					<Col>
						<img src="../assets/img1.svg" alt="" />
					</Col>
					<Col>
						<img src="../assets/opensea.svg" alt="" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TokenBar;
