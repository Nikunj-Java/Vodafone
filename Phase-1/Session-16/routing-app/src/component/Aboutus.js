
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Aboutus() {
    return (
        <div className="container">
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" />
                <Card.Body>
                    <Card.Title>My Profile</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default Aboutus;