import React from 'react'

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
      this.props.deleteItem(e, 'Today');
    }
    render(){
      return(
          <div className="cell">
          <div className="boxx boxx1">
          <div className="alert">Today<span className="time-left"> {this.state.todayTimingLeftHrs} hr {this.state.todayTimingLeftMins} Min left</span></div>

           {this.props.items.map((item, index) => {
              return(
                <div key={index} className="listitems">
                  <div className="cell">
                    <div className="cell content-title">
                    <div className="minus" onClick={() => this.removeThis(index)}><div className="minusline onearm"></div><div className="minuslinee secondarm"></div></div>&nbsp;{item} &nbsp;                    
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
      this.props.deleteItem(e, 'Tomorrow');
    }
    render(){
      return(
        <div className="cell">
        <div className="boxx boxx2">
        <div className="alert alert-success">Tomorrow<span className="time-left"> {this.state.tomorrowTimingLeft} hr left</span></div>


           {this.props.items.map((item, index) => {
              return(
                <div key={index} className="listitems">
                  <div className="cell">
                    <div className="content-title">
                    <div className="minus" onClick={() => this.removeThis(index)}><div className="minusline onearm"></div><div className="minuslinee secondarm"></div></div>&nbsp;{item} &nbsp;
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
      var threeDay = oneDay * 3;
  
      var dayAfterTomorrowTimingLeft = Math.floor((threeDay-(hoursSec+minuteSec))/3600);
  
      this.setState({
        'dayAfterTomorrowTimingLeft': dayAfterTomorrowTimingLeft
      });
  
    }, 1000)
  }
 
  removeThis(e){
      this.props.deleteItem(e, 'Day_After_Tomorrow');
    }
    render(){
      return(
        <div className="cell">
        <div className="boxx boxx3">

        <div className="alert alert-success">Day after Tomorrow<span className="time-left"> {this.state.dayAfterTomorrowTimingLeft} hr left</span></div>
        {this.props.items.map((item, index) => {
              return(
                <div key={index} className="listitems">
                  <div className="cell">
                    <div className="content-title">
                      <div className="minus" onClick={() => this.removeThis(index)}><div className="minusline onearm"></div><div className="minuslinee secondarm"></div></div>&nbsp;{item} &nbsp;
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
  
  