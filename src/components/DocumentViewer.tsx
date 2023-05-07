
import { Documents } from '../interfaces/interfaces';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface DocumentViewerProps {
    url: string;
}
export function DocumentViewer(props: DocumentViewerProps) {
    const { url } = props;
    const [documents, setDocuments] = useState<Documents>({} as Documents);
    const [selectedDoc, setSelectedDoc] = useState<string>('');
    const navigateTo = useNavigate();

    useEffect(() => {
        if (!url) {
            navigateTo('/');
        }
        const fetchData = async () => {
            const result = await axios.get(url);
            setDocuments(result.data);
            setSelectedDoc(result.data?.Pages[0]?.title);
        };
        fetchData();
    }, [url]);

    const handleDocClick = (title: string) => {
        setSelectedDoc(title);

    };
    return (
        <div className="row p-4">
            <div className="col-2">
                <h3>Menu</h3>
                <div className="sidebar">
                    {
                        documents?.Pages && <ListGroup defaultActiveKey={documents.Pages[0].title}>
                            {documents.Pages.map((doc) => (
                                <ListGroup.Item
                                    key={doc.title}
                                    action
                                    active={selectedDoc === doc.title}
                                    onClick={() => handleDocClick(doc.title)}
                                >
                                    {doc.title}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    }
                </div>
            </div>
            <div className="col-10">
                <Card>
                    <Card.Header>{selectedDoc ? documents.Pages.find((doc) => doc.title === selectedDoc)?.title : null}</Card.Header>
                    <Card.Body>
                        <ReactMarkdown>{'' + (selectedDoc ? documents.Pages.find((doc) => doc.title === selectedDoc)?.bodyText : '')}</ReactMarkdown>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
