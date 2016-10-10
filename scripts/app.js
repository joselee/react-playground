class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World! This is react.</div>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.querySelector('#app'));
