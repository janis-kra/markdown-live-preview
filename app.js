const Editor = React.createClass({
  getInitialState: function () {
    return { value: '' };
  },
  handleChange: function (event) {
    const text = event.target.value;
    let p;
    if (text.startsWith('**') && text.endsWith('**')) {
      p = <p className='bold'>{text}</p>;
    } else if (text.startsWith('*') && text.endsWith('*')) {
      p = <p className='italic'>{text}</p>;
    } else {
      p = <p className='normal'>{text}</p>;
    }
    this.setState({ value: p });
  },
  render: function () {
    return (
      <div>
        <textarea
          placeholder='your text here'
          onChange={this.handleChange} />
        <div>
          { this.state.value }
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
