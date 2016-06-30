const Editor = React.createClass({
  getInitialState: function () {
    return { value: '' };
  },
  handleChange: function (event) {
    const text = event.target.value;
    this.setState({ value: text });
  },
  render: function () {
    return (
      <div>
        <textarea
          placeholder='your text here'
          onChange={this.handleChange} />
        <div dangerouslySetInnerHTML={{__html: marked(this.state.value)}}>
        </div>
      </div>
    );
  }
});

const App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Yet another markdown live preview thingy...</h1>
        <Editor />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
