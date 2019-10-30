import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { Icon } from 'antd';

export class TopBar extends Component {
    render() {
        return (
            <header className='app-header'>
                <img src={logo} className='app-logo' alt='logo' />
                <span className='app-title'>Ipost</span>
                {
                    this.props.isLoggedIn ? 
                    <a className='logout' onClick={this.props.handleLogout}>
                        <Icon type='logout' /> {' '} Logout
                    </a> : null 
                }
            </header>
        );
    }
}
