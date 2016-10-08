class List extends React.Component {
    render() {
        const myStrings = ['foo', 'bar', 'baz', 'hey', 'wat', 'omg'];
        const listItems = myStrings.map((myString) => <ListItem text={myString} />);
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <li>{this.props.text}</li>
        );
    }
}

let container = document.querySelector('#app');
ReactDOM.render(<List />, container);