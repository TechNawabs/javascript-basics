import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

interface Props {

}

interface State {

}

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.function1();
  }

  function1() {
    this.function2();
  }

  function2() {
    this.function3();
  }

  function3() {
    console.trace();
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Code Appetizers
        </header>
        <section className="App-body">
          Stack Trace
        <div className="App-box">
            <div className="App-box-function">
              function 3
            </div>
          </div>
          <div className="App-box">
            <div className="App-box-function">
              function 2
            </div>
          </div>
          <div className="App-box">
            <div className="App-box-function">
              function 1 
            </div>
          </div>
          <div className="App-box">
            <div className="App-box-function">
              Global
            </div>
          </div>
        </section>
        <footer className="App-footer">
          Made with &#10084;&#65039;  from &#127470;&#127475;  by TechNawabs
        </footer>
      </div>
    );
  }
}

export default App;
