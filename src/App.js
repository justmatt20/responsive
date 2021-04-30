
import React from 'react';
// import Background from './cloud.png'
import './App.css';
import Nav from './Components/Nav';
import './reset.css';
import Home from './Components/Home'




class App extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }


render () {
  
  // const sectionStyle = {
  //   backgroundImage: "url(" + {Background} + ")"
  //   }
  return (
    <div className="body">
      {/* <section style={sectionStyle}></section> */}
      <Nav />
      <Home />
    </div>
  );
}
}

export default App;
