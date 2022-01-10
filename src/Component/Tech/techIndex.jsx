import React from 'react';
import './tech.css';

class compTech extends React.Component {
    static compDetails = [
        {
            'tech': 'HTML',
            'img': '/Tech/html5.png',
            'percentage': 10
        },
        {
            'tech': 'CSS',
            'img': '/Tech/css3.png',
            'className': 'css',
            'percentage': 20
        },
        {
            'tech': 'JAVASCRIPT',
            'img': '/Tech/javascript.png',
            'percentage': 30
        },
        {
            'tech': 'PHP',
            'img': '/Tech/php.png',
            'percentage': 40
        },
        {
            'tech': 'SQL',
            'img': '/Tech/mysql.png',
            'percentage': 50
        },
        {
            'tech': 'NODE JS',
            'img': '/Tech/nodejs.png',
            'percentage': 60
        },
        {
            'tech': 'REACT',
            'img': '/Tech/react.png',
            'percentage': 70
        },
        {
            'tech': 'ANGULAR',
            'img': '/Tech/angular.png',
            'percentage': 80
        },
    ]

    render() {
        return (
            <>
                <div className={'compTech-container'}>
                    {
                        compTech.compDetails.map((result, i) => (
                            <React.Fragment>
                                <div className={'compTech-circle-placement'}>
                                    <h1> { result.tech } </h1>
                                    <div className={result.tech} role="progressbar" style={{"--value": result.percentage}}>
                                        <img src={process.env.PUBLIC_URL + result.img} alt={result.tech}/>
                                    </div>
                                    <p>{result.percentage + "%"}</p>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default compTech;


