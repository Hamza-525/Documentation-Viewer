import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface WelcomeProps {
    handleSubmit: (value: any) => void;
}

export function Welcome(props: WelcomeProps) {
    const { handleSubmit } = props;
    const [value, setValue] = useState('');

    return (
        <div className="w-100 h-100  align-items-center">
            <Card className="text-center position-absolute top-50 start-50 translate-middle">
                <Card.Header>Welcome</Card.Header>
                <Card.Body>
                    <Card.Title>Please enter the URL</Card.Title>
                    <Card.Text>
                        Please enter the URL to get the documents from.
                    </Card.Text>
                    <form className="form-group" id='card' onSubmit={(e) => { e.preventDefault(); handleSubmit(value) }}>
                        <label>URL:</label>
                        <input type="url" className="form-control mb-3" onChange={(e) => { setValue(e.target.value) }} id="usr"></input>
                        <Button variant="primary" form='card' type='submit'>Submit</Button>
                    </form>
                </Card.Body>
                
            </Card>
        </div>
    );
}
