import React, { Component } from 'react'

class Item extends Component {
    render() {
        const { index, todo, deleteItem} = this.props;
        return (
            <div class="rounded flex justify-center my-2 mx-20 py-2 bg-green-300 text-base font-semibold">
                <p class="mx-5 mb-2 py-2 break-all">{todo}</p>
                <button class="h-10 px-8 mx-10 mb-2 bg-red-500 active:bg-red-200 focus:outline-none text-white rounded" onClick={() => deleteItem(index)}>
                    Delete
                </button>
            </div>
        )
    }
}

export default Item
