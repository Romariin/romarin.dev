import React from 'react';
import './notFound.css';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className={'div-nf'}>
                <div className={'div-img-404'}>
                    <img src={process.env.PUBLIC_URL + '/notFound/1.png'} alt={'Memoji Angry'}
                         className={'img-404'}/>
                </div>
                <div className={'div-404'}>
                    <h1>404</h1>
                    <span>Il n'y a rien ici..</span>
                    <a href={"/"}>
                        <div className={'link-404'}>
                            <i className="em em-link"></i> RETOUR À L'ACCUEIL
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}