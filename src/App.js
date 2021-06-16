
import React from 'react';
// import Background from './cloud.png'
import './App.css';
import Nav from './Components/Nav';
import './reset.css';
import Home from './Components/Home'
import Empty from './Components/Empty';




class App extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }


render () {
  
 
  return (
    <div className="body">
     
      <Nav />
      <Home />
      <Empty />
    </div>
  );
}
}

export default App;
