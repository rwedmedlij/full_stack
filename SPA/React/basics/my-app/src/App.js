import React from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className='wow'>
        
      </div>
    )
  }


}


let names = ['sara', 'itizik','rebeka', 'leah', 'Abraham']

class NavBar extends React.Component{
  render(){
    return (
      <div className="navbar">Hello Navbar</div>
    )
  }
}

class App extends React.Component {  
  render(){
    return (
      <div>        
        <p>test test {this.props.test}</p>
        {
          names.map((welcomeRow, key)=>{
            return <Welcome name={welcomeRow} key={key} last='bla' />
          })
        }             
      </div>
    )
  }
}

export default App;
