import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './navbar.css'

class Navbar extends React.Component {
    static routes = [{
        "path": "/",
        "name": "PROFIL"
    }, {
        "path": "/meth",
        "name": "COMP. MÉTIER"
    }, {
        "path": "/tech",
        "name": "COMP. TECH"
    }, {
        "path": "/hum",
        "name": "COMP. HUM"
    }]
    state = {activeItem: 0}



     updateState() {
         Navbar.routes.forEach((route, i) => {
             if (this.props.location.pathname === route.path) {
                 this.setState({
                     activeItem: i
                 })
             }
         });
    }


    componentDidMount() {
        window.onpopstate = e => {
            this.updateState()
        }
        this.updateState()
    }

    render() {
        let {activeItem} = this.state
        return (
            <>
                <div className={'nav-top'}>
                    <div className={'nav-empty'}></div>
                    <div className={'nav-button'}>
                        {
                            Navbar.routes.map((route, i) => (
                                <React.Fragment>
                                    <NavLink to={route.path} onClick={() => this.setState({activeItem: i})} activeclassname={'active'} className='col'>
                                        {activeItem === i && <div className={'colleft'}></div>}
                                        {route.name}
                                        {activeItem === i && <div className={'colright'}></div>}
                                    </NavLink>
                                    <div className={'colspacing'}></div>
                                </React.Fragment>
                            ))
                        }
                    </div>
                    <div className={'nav-empty'}></div>
                </div>
                <div className={'nav-bottom'}></div>
            </>
        )
    }
}

export default () => {
    let location = useLocation();
    return <Navbar location={location}></Navbar>
};