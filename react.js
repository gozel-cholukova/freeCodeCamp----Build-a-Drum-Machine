class App extends React.Component {
  state = {
    keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  }
  
  render() {
    const { keys } = this.state;
    return (
      <div id="display" className="display">
        {keys.map((key, idx) => (
          <Box text={key} key={idx} />
          ))}
      </div>
    );
  }
}

const Box = () => (
  <div className="box">
    {props.text}
  </div>
);

ReactDOM.render(<App />, document.getElementById('drum-machine'));
