import React, {Component} from 'react'
import './app.css';
import Header from '../header/index'
import Filters from '../filters/index'
import Search from '../search/index'
import TodoList from '../todo-list/index'




export default class App extends Component {
    // random number
    randomIndex = 1


    // общее состояние приложение
    state = {
        todoData: [
            this.createTodoItems('Make app', 'Today i make some app on reactjs.'),
            this.createTodoItems('Drink coffee', '12:00 go to drink coffee and read book.'),
            this.createTodoItems('Go to for a walk', 'After 18:00 workout and go to running.'),
            this.createTodoItems('Learn js', 'After 12:00 start learning js book.'),
            this.createTodoItems('Watching youtube', 'After 18:00 workout and go to running.'),
        ],
        darkTheme: false,
        term: '',
        filter: 'active'
    }

    // ф-ю которая создаем элементы в массиве todoData
    createTodoItems(label, descr) {
        return {
            label: label, descr: descr, done: false, active: true,
                    important: false, id: this.randomIndex++
        }
    }

    // ф-ю для смены prop у item тк шаблон
    changeItemProp (arr, id, prop) {

            // находим index
            const index = arr.findIndex(el => el.id === id)

            // изменяем item по найденному index, для этого нужно старые данные и новые изм
            const oldItem = arr[index]

            const newItem = {
                ...oldItem,
                done: false,
                important: false,
                active: prop === 'done' || prop === 'important' ? !oldItem['active'] : true,
                [prop]: !oldItem[prop],
            }

            // возврат и изм
            return [
                ...arr.slice(0, index),
                newItem,
                ...arr.slice(index + 1)
            ]


    }

    // ф-ю для смена состаяюния темы
    onThemeChanger = () => {
        this.setState(({darkTheme}) => {
            return {
                darkTheme: !darkTheme
            }
        })
    }

    // ф-ю для удаления элемента из списка
    onItemDelete = (id) => {
        this.setState(({todoData}) => {
            // находим индекс эл который нужно удалить
            const index = todoData.findIndex(el => el.id === id)

            // далее создаем новый массив
            const newArray = [
                // элементы в обьекте todoData, до элемента который удален
                ...todoData.slice(0, index),
                // элементы в обьекте todoData, после элемента который удален
                ...todoData.slice(index + 1)
            ]

            // возрващаем и изм текущий массив на новый
            return {
                todoData: newArray
            }
        })
    }

    // изменение свойства в обьекте массива todoData
    onToggleDoneProperty = (id) => {
        // меняем state обьекта todoData
        this.setState(({todoData}) => {
            return {
                todoData: this.changeItemProp(todoData, id, 'done')
            }
        })
    }

    // изменение свойства в обьекте массива todoData
    onToggleImportantProperty = (id) => {
        // меняем state обьекта todoData
        this.setState(({todoData}) => {
            return {
                todoData: this.changeItemProp(todoData, id, 'important')
            }
        })

    }

    // добавление нового элемента
    addItem = (label, descr) => {
        this.setState(({todoData}) => {
            // create new item
            const newItem = this.createTodoItems(label, descr)

            // create new Array
            const newArray = [
                ...this.state.todoData,
                newItem
            ]

            return {
                todoData: newArray
            }
        })
    }

    // поиск на сайте
    onSearch = (term) => {
        this.setState({term})
    }

    onFilter = (filter) => {
        this.setState({filter})
    }

    search (items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter(el => {
            return el.label
                        .toLowerCase()
                        .indexOf(term.toLowerCase()) > -1 ||
                    el.descr
                        .toLowerCase()
                        .indexOf(term.toLowerCase()) > -1
        })
    }

    // filters
    filter (arr, filter) {
        switch (filter) {
            case 'active':
                return arr.filter(el => el.active)
            case 'done':
                return arr.filter(el => el.done)
            case 'important':
                return arr.filter(el => el.important)
            default:
                return arr
        }
    }

    render () {
        const {darkTheme, todoData, term, filter} = this.state
        let className = 'main'

        // смена темы на сайте
        if (darkTheme) {
            className += ' dark-theme'
        }

        const visibleItems = this.filter(this.search(todoData, term), filter)

        let totalCount = 0,
            ActiveCatCount = 0,
            doneCount = 0,
            importantCount = 0;


        const activeCatCounter = todoData.filter(el => {
            if (el) {
                totalCount++
            }

            if (el.active) {
                ActiveCatCount++
            }

            if(el.done) {
                doneCount++
            }

            if(el.important) {
                importantCount++
            }
        })


        return (
            <main className={className}>
                <Header onThemeChanger={this.onThemeChanger}/>

                <Search onSearch={this.onSearch}/>

                <Filters
                    all={totalCount}
                    active={ActiveCatCount}
                    done={doneCount}
                    important={importantCount}
                    onFilter={this.onFilter}
                    filter={filter}
                />

                <TodoList
                    onItemAdd={this.addItem}
                    onToggleImportantProperty={this.onToggleImportantProperty}
                    onToggleDoneProperty = {this.onToggleDoneProperty}
                    onItemDelete={this.onItemDelete}
                    todoData={visibleItems}/>
            </main>
        )
    }
}


