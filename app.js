

/**
 * Factory function for the app
 * @return {React} the React object (I'll only need one this way!)
 */
const App = React.createClass({
  render: function () {
    return (<h1>Yet another markdown live preview thingy...</h1>);
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
