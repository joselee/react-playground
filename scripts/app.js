class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World! This is ReactJS!</div>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.querySelector('#app'));
