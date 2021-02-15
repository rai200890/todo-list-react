import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<tr>
            <td>{this.props.code}</td>
            <td>{this.props.name}</td>
            <td>{this.props.age}</td>
        </tr>)
    }

}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{code: 1, title: "Xablau", description: "Xablau 1" }]
        };
    }

    render() {
        const todos = this.state.items;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) =>
                            <TodoItem key={todo.id} code={todo.code} name={todo.title} age={todo.description} />)
                    }
                </tbody>
            </table>)
    }
}
export { TodoList, TodoItem }
