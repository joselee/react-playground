class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World! This is react.</div>
        );
    }
}
let container = document.querySelector('#app');
ReactDOM.render(<HelloWorld/>, container);