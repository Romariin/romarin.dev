import React from 'react';
import './home.css'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <div className={'home-component'}>
                    <div className={'home-imgcontener'}>
                        <img src={process.env.PUBLIC_URL + '/Home/1.png'} alt={'Memoji Hey'}
                             className={'home-img'}/>
                    </div>
                    <div className={'home-about'}>
                        <div className={'about-text'}>
                            <div className={'about-title'}>
                                <span><i className="em em-wave"></i></span>
                                <h1>Hello World</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis enim et
                                ante gravida, vel scelerisque nibh sollicitudin. Morbi eu neque sagittis turpis dictum
                                cursus. Aenean ligula massa, feugiat vitae vehicula ac, convallis at eros. Vivamus in
                                ligula erat. Vestibulum pretium, orci in tincidunt commodo, magna ante dignissim risus,
                                nec eleifend felis purus nec quam. Etiam est erat, hendrerit a commodo id, porttitor
                                eget erat. Maecenas feugiat, neque a volutpat venenatis, sem massa dignissim velit, non
                                facilisis odio sapien id massa. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos. Ut tempor ex in felis suscipit, non eleifend
                                tortor dignissim.</p>
                        </div>
                    </div>
                </div>
                <div className={'home-projets'}>
                    <div className={'projet-spacer-left'}></div>
                    <div className={'projet-title'}><span>PROJETS</span></div>
                    <div className={'projet-spacer-right'}></div>
                </div>
                <div className={'projet-container'}>
                    <div className={'projet'}>
                        <span>Actuellement rien ici..</span>
                    </div>
                    <div className={'projet'}>
                        <span>Actuellement rien ici..</span>
                    </div>
                </div>
            </>
        )
    }
}