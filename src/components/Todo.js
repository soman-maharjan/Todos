import React, { Component } from 'react'
import Item from './Item'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            val: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            val: event.target.value
        })
    }

    submitHandler = () => {
        this.setState({
            todos: this.state.todos.concat(this.state.val)
        })
    }

    deleteItem = (id) => {
        this.state.todos.splice(id, 1)
        this.setState({
            todos: this.state.todos
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.changeHandler} value={this.state.val} class="w-4/12 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Add Todos" placeholder="Add Todos" />
                <button onClick={this.submitHandler} class="mx-5 p-2 rounded w-1/12 bg-purple-700 text-white active:bg-purple-200 focus:outline-none">Add</button>
                <br /> <br />
                    {this.state.todos.map((todo, index) => <Item todo={todo} key={index} index={index} deleteItem={this.deleteItem} />)}
            </div>
        )
    }
}

export default Todo
