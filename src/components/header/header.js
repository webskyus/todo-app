import React, {Component} from 'react'
import './header.css'

export default class Header extends Component {
    // состояние для того что бы понять какая сейчас тема
    state = {
        darkTheme: false
    }

    // ф-ю которая меняет наш state когда будет клик на кнопку
    onThemeChanger = () => {

        // меняем состояние state
        this.setState(({darkTheme}) => {
            return {
                darkTheme: !darkTheme
            }
        })

        // Отправляем наше состояние на один уровень выше в наш app
        this.props.onThemeChanger(this.state.onThemeChanger)


    }

    render () {
        return (
                <header className="header-top">
                    <div className="uk-container">
                        <div className="header-top-wrapper">
                            <a href="#" className="logo">
                                <img src="./img/logo.png" alt="logo"/>
                                todo app
                            </a>
                            <button
                                // смена темы и состояние state
                                onClick={this.onThemeChanger}
                                className="uk-button uk-button-default theme-change-btn">
                                <img src="./img/night-mode.svg" alt="change theme svg"/>
                            </button>
                            <div className="uk-inline dropdown-wrapper">
                                <button className="uk-button uk-button-default profile-btn" type="button">
                                    <img src="./img/profile.jpg" alt="profile photo"/>
                                    webskyus
                                </button>
                                <div uk-dropdown="mode: click">
                                    <ul className="uk-nav uk-dropdown-nav">
                                        <li className="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li className="uk-nav-header">Header</li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li className="uk-nav-divider"></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        )
    }
}