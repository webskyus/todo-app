import React, {Component} from 'react'
import './search.css'


export default class Search extends Component {
    state = {
        term: ''
    }

    onSearch = (e) => {
        const term = e.target.value
        this.setState({term})

        this.props.onSearch(term)
    }

    render () {
        return (
            <header className="header mb30">
                <div className="uk-container">
                    <div className="header-wrapper">
                        <nav className="uk-navbar-container" >
                            <div className="uk-navbar-left">
                                <div className="uk-navbar-item">
                                    <div className="uk-search uk-search-navbar">
                                        <span uk-search-icon="" className="uk-icon uk-search-icon"></span>
                                        <input
                                            className="uk-search-input"
                                            type="search"
                                            placeholder="Search..."
                                            value={this.state.term}
                                            onChange={this.onSearch}
                                        />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

