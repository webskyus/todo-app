import React, {Component} from 'react'
import TodoListItems from '../todo-list-items/index'
import './todo-list.css'
import ModalInner from '../modal/index';


export default class TodoList extends Component {

    addItem = (label, descr) => {
        this.props.onItemAdd(label, descr)
    }


    render() {
        const elements = this.props.todoData.map(el => {

            const {
                onToggleImportantProperty,
                onToggleDoneProperty,
                onItemDelete
            } = this.props

            const {id, ...items} = el

            return (
                <div key={el.id} className="pb15">
                    <TodoListItems
                        onToggleImportantProperty={() => onToggleImportantProperty(id)}
                        onToggleDoneProperty={() => onToggleDoneProperty(id)}
                        onItemDelete={() => onItemDelete(id)}
                        {...items}/>
                </div>
            )
        })


        return (
            <section className="todo-list">
                <div className="uk-container">
                    <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-grid" >

                        {elements}

                        <div className="pb15">
                          <ModalInner onItemAdd={this.addItem}/>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}