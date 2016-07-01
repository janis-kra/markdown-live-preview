const defaultText = '*italic*, **bold**, `monospace`, ~~strikethrough~~ .';

const Editor = ({ handleChange }) => (
  <textarea
    className='editor'
    placeholder='your text here'
    onChange={handleChange} />
);

const Preview = ({ markdown }) => (
  <div
    className='preview'
    dangerouslySetInnerHTML={{__html: markdown}} />
);

const App = React.createClass({
  getInitialState: function () {
    return {
      text: defaultText,
      markdown: marked(defaultText)
    };
  },
  handleChange: function (event) {
    const t = event.target.value;
    this.setState({ text: t, markdown: marked(t) });
  },
  render: function () {
    return (
      <div>
        <h1>Markdown Live Preview</h1>
        <Editor handleChange={this.handleChange} />
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
