import React, {Component} from 'react'

export default class TodoListItems extends Component {
    render() {
        const {
            label,
            descr,
            done,
            important,
            active,
            onItemDelete,
            onToggleDoneProperty,
            onToggleImportantProperty
        } = this.props

        let className = 'uk-card uk-card-primary uk-card-body uk-card-hover'

        if (done) {
            className += ' uk-card-secondary'
        }

        if (important) {
            className += ' uk-card-danger'
        }


        return (
                <div className={className}>
                    {/* берем label из обьекта todoData */}
                    <h3 className="uk-card-title">{label}</h3>
                    {/* берем descr из обьекта todoData */}
                    <p>{descr}</p>
                    <div className="todo-list-item-controls">
                        <button
                            onClick={onToggleDoneProperty}
                            className="items-controls-btn check-item">
                            <img src="./img/checked.svg" alt="check"/>
                        </button>
                        <button
                            onClick={onToggleImportantProperty}
                            className="items-controls-btn unimportant-item">
                            <img src="./img/controls.svg" alt="check"/>
                        </button>
                        <button
                            onClick={onItemDelete}
                            className="items-controls-btn remove-item">
                            <img src="./img/delete.svg" alt="check"/>
                        </button>
                    </div>
                </div>
        )
    }
}