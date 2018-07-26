import React from 'react'
import '../hack.css'

export class DisplayToday extends React.Component{

constructor(props){
  super(props);
  this.state = {
    'todayTimingLeftHrs': '',
    'todayTimingLeftMins': ''
  }
}

componentDidMount(){
  var currentTime = new Date();
    
  setInterval( () => {

    var minuteSec = currentTime.getMinutes() * 60;
    var hoursSec = currentTime.getHours() * 3600;
    var oneDay = 86400;

    var todayTimingLeftHrs = Math.floor((oneDay-(hoursSec+minuteSec))/3600);
    var todayTimingLeftMins = 60-currentTime.getMinutes();   
    this.setState({
      'todayTimingLeftHrs': todayTimingLeftHrs,
      'todayTimingLeftMins': todayTimingLeftMins
    });

  }, 1000)
}




    removeThis(e){
      console.log(e);
      this.props.deleteItem(e, 'Today');
    }
    render(){
      return(
          <div className="cell">
          <div className="boxx boxx1">
          <div className="alert alert-success">Today<span className="time-left"> {this.state.todayTimingLeftHrs} hr {this.state.todayTimingLeftMins} Min left</span></div>
          
           {this.props.items.map((item, index) => {
              return(
                <div key="{index}" className="grid myitems">
                  <div className="cell 9of12">
                    <div className="content-title">
                      <img src={require('./sort-right-green.png')} height="10px" width="10px" alt=""/>&nbsp;{item} &nbsp;
                    </div>
                  </div>
                  <div className="cell 3of12">
                    <div className="content">
                        <button onClick={() => this.removeThis(index)} className="btn-default btn-ghost">X</button>
                    </div>
                  </div>
                </div>

          );
            })
            }
          </div>
          </div>
      )
    }
  }
  
export class DisplayTomorrow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'tomorrowTimingLeft': ''
    }
  }
  componentDidMount(){
    var currentTime = new Date();
      
    setInterval( () => {
  
      var minuteSec = currentTime.getMinutes() * 60;
      var hoursSec = currentTime.getHours() * 3600;
      var oneDay = 86400;
      var twoDay = oneDay * 2;
      
      var tomorrowTimingLeft = Math.floor((twoDay-(hoursSec+minuteSec))/3600);
      
      this.setState({
        'tomorrowTimingLeft': tomorrowTimingLeft
      });
  
    }, 1000)
  }

  removeThis(e){
      console.log(e);
      this.props.deleteItem(e, 'Tomorrow');
    }
    render(){
      return(
        <div className="cell">
        <div className="boxx boxx2">
        <div className="alert alert-success">Tomorrow<span className="time-left"> {this.state.tomorrowTimingLeft} hr left</span></div>


           {this.props.items.map((item, index) => {
              return(
                <div key="{index}" className="grid  myitems">
                  <div className="cell 9of12">
                    <div className="content-title">
                      <img src={require('./sort-right-green.png')} height="10px" width="10px" alt=""/>&nbsp;{item} &nbsp;
                    </div>
                  </div>
                  <div className="cell 3of12">
                    <div className="content">
                        <button onClick={() => this.removeThis(index)} className="btn-default btn-ghost">X</button>
                    </div>
                  </div>
                </div>

          );
            })
            }
            </div>
          </div>
      )
    }
  }
  
  
export class DisplayDayAfterTomorrow extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      'dayAfterTomorrowTimingLeft': ''
    }
  }

  componentDidMount(){
    var currentTime = new Date();
      
    setInterval( () => {
  
      var minuteSec = currentTime.getMinutes() * 60;
      var hoursSec = currentTime.getHours() * 3600;
      var oneDay = 86400;
      var twoDay = oneDay * 2;
      var threeDay = oneDay * 3;
  
      var todayTimingLeft = Math.floor((oneDay-(hoursSec+minuteSec))/3600);
      var tomorrowTimingLeft = Math.floor((twoDay-(hoursSec+minuteSec))/3600);
      var dayAfterTomorrowTimingLeft = Math.floor((threeDay-(hoursSec+minuteSec))/3600);
  
      this.setState({
        'dayAfterTomorrowTimingLeft': dayAfterTomorrowTimingLeft
      });
  
    }, 1000)
  }
 
  removeThis(e){
      console.log(e);
      this.props.deleteItem(e, 'Day_After_Tomorrow');
    }
    render(){
      return(
        <div className="cell">
        <div className="boxx boxx3">

        <div className="alert alert-success">Day after Tomorrow<span className="time-left"> {this.state.dayAfterTomorrowTimingLeft} hr left</span></div>
        {this.props.items.map((item, index) => {
              return(
                <div key="{index}" className="grid  myitems">
                  <div className="cell 9of12">
                    <div className="content-title">
                      <img src={require('./sort-right-green.png')} height="10px" width="10px" alt=""/>&nbsp;{item} &nbsp;
                    </div>
                  </div>
                  <div className="cell 3of12">
                    <div className="content">
                        <button onClick={() => this.removeThis(index)} className="btn-default btn-ghost">X</button>
                    </div>
                  </div>
                </div>

          );
            })
            }
            </div>
          </div>
      )
    }
  }
  
  