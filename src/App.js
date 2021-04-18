
import './App.css';
import React, { Component } from 'react'
import myphoto from './photo.jpg'

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {date: new Date(),
                  fullName : 'Mondher Denden',
                  bio :'fonctionnaire au ministere de jeunesse et de sport',
                  imgSrc :myphoto ,
                  profession :'fonctionnaire' ,
                  show : true };
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(), 1000  );
    } 
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    
      render() {
      return (
            <div className="App">
            <button className ="bottom" onClick={this.toggle}> {this.state.show ? 'hide' : 'show'} my profile ! </button>    
            {this.state.show &&
             <div className ="profile">
               <img src ={this.state.imgSrc} height ='200px' width ='200px' />
               <h1>my name is :<span> {this.state.fullName}</span></h1>
               <h1>my biography : <span>{this.state.bio}</span></h1>
               <h1>my profession : <span>{this.state.profession}</span></h1>                                    
              </div>}
              <h2>Time Is {this.state.date.toLocaleTimeString()}.</h2>
             </div>
            );
      }
  }

              