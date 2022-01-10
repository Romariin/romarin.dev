import React from 'react';
import './app.css';

import Routes from './routes';

export default class App extends React.Component {
    render() {
        return (
            <>
                <div className={'main'}>
                    <Routes/>
                </div>
            </>
        );
    }
}

