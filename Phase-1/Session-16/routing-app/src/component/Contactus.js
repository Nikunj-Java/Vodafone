import Form from 'react-bootstrap/Form';

function Contactus() {
    return (
        <div className='container'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Please Tell us ABout Your Query</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>

        </div>

    );
}

export default Contactus;