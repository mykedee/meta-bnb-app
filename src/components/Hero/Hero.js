import React from 'react';
import { Container, Col, Row, InputGroup, Form, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
	return (
		<div className="hero-section">
			<Container className="hero-wrapper">
				<Row>
					<Col className="hero-text" sm={12} md={6}>
						<h1 className="mb-3">
							Rent a <span id="colored-hero-text">Place</span> away from{' '}
							<span id="colored-hero-text">Home</span> in the
							<span id="colored-hero-text"> Metaverse</span>
						</h1>
						<p>
							we provide you access to luxury and affordable houses in the
							metaverse, get a chance to turn your imagination to reality at
							your comfort zone
						</p>
						<span className="mt-3">
							<InputGroup>
								<Form.Control
									placeholder="Search for location"
									aria-label="Recipient's username"
									aria-describedby="basic-addon2"
								/>
								{/* <InputGroup.Text id="inputGroup-sizing-sm">
									Search
								</InputGroup.Text> */}

								<Button variant="outline-secondary" id="button-addon2">
									Search
								</Button>
							</InputGroup>
						</span>
					</Col>
					{/* <Col md={{ span: 4, offset: 4 }}> */}
					<Col>
						<Row>
							<Col md={6}>
								<img src="../assets/image3.svg" className="hero-image" alt="" />
								<img
									src="../assets/image4.svg"
									className="hero-image my-4"
									alt=""
								/>
							</Col>
							<Col sm={6}>
								<img src="../assets/image5.svg" className="my-4" alt="" />
								<img src="../assets/image6.svg" className="hero-image" alt="" />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Hero;
