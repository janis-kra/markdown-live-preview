const Editor = React.createClass({
  render: function () {
    return (
      <textarea>your text here</textarea>
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
