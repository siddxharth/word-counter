import React, { useState } from 'react'
import { Card, Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WordCount() {
	const [wordCount, setWordCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [charCountWithoutSpace, setCharCountWithoutSpace] = useState(0);
	const handleCount = (e) => {
		if (e.target.value[e.target.value.length - 1] === ' ') {
			var spaceCount = 0;
			for (let i = e.target.value.length - 1; i >= 0; i--) {
				if (e.target.value[i] === ' ') {
					spaceCount++;
				} else {
					break;
				}
			}
			setWordCount(e.target.value.split(' ').length - spaceCount);
		} else {
			setWordCount(e.target.value.split(' ').length);
		}
		if(e.target.value.length === 0){
			setWordCount(0);
		}
		setCharCount(e.target.value.length);
		setCharCountWithoutSpace(e.target.value.replace(/\s/g, '').length);
	}
	return (
		<div className="d-flex justify-content-center row" style={{maxHeight: "100vh"}}>
			<h2 className='d-1 text-center mt-3'>Word Counter</h2>
			<div style={{minWidth: "75vw"}}>
			<Form className="d-flex justify-content-center mt-3">
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Control onChange={handleCount} as="textarea" style={{ minHeight: "60vh", minWidth: "75vw" }} placeholder="Start typing..." />
				</Form.Group>
			</Form>
			</div>
			<Card style={{ width: '30rem', textAlign: "justify"}}>
				<h3>Counts:</h3>
				<ListGroup variant="flush">
					<ListGroup.Item>Words: {wordCount}</ListGroup.Item>
					<ListGroup.Item>Characters: {charCount}</ListGroup.Item>
					<ListGroup.Item>Characters (without space): {charCountWithoutSpace}</ListGroup.Item>
				</ListGroup>
			</Card>
		</div>
	)
}