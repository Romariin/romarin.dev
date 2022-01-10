import React from 'react';
import './soon.css';

export default class SoonIndex extends React.Component {
    render() {
        return (
            <div className={'div-soon'}>
                <div className={'div-img-soon'}>
                    <img src={process.env.PUBLIC_URL + '/Soon/1.png'} alt={'Memoji Promis'}
                         className={'img-soon'}/>
                </div>
                <div className={'div-soon-text'}>
                    <h1>Coming Soon</h1>
                    <span>Promis, c'est pour bientôt!</span>
                </div>
            </div>
        )
    }
}