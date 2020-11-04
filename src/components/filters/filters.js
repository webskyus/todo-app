import React, {Component} from 'react'
import './filters.css'

export default class Filters extends Component {
    buttons = [
        {name: 'all', btnClass: 'uk-button uk-button-white'},
        {name: 'active', btnClass: 'uk-button uk-button-primary'},
        {name: 'done', btnClass: 'uk-button uk-button-secondary'},
        {name: 'important', btnClass: 'uk-button uk-button-danger'},
    ]

    render() {
        const {onFilter, filter} = this.props

        const buttons = this.buttons.map(({name, btnClass}) => {
            const isActive = filter === name
            const className = isActive ? `${btnClass} uk-button-active` : btnClass
            return (
                <button
                    className={className}
                    onClick={() => onFilter(name)}
                    key={name}>
                    {name}
                    <span className="filters-counter">
                        {this.props[name]}
                    </span>
                </button>
            )
        })



        return (
            <section className="filters mb30">
            <div className="uk-container">
                <div className="filters-wrapper el-shadow">
                    {buttons}
                </div>
            </div>
        </section>
        )
    }
}