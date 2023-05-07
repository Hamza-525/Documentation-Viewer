
import {  Route, Routes, useNavigate } from 'react-router-dom';
import { DocumentViewer } from './DocumentViewer';
import { Welcome } from './Welcome';
import { useState } from 'react';

export function Main() {
    const navigateTo = useNavigate();
    const [url, setUrl] = useState<string>('');
    return (
        <Routes>
            <Route path='/' element={<Welcome handleSubmit={(url: string) => {
                setUrl(url);
                navigateTo('documents');
            }} />} />
            <Route path='/documents' element={<DocumentViewer url={url} />} />
        </Routes>
    )
}

