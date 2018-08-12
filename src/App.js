import React from 'react';
import './App.css';
import { DisplayToday, DisplayTomorrow, DisplayDayAfterTomorrow } from './Components/Display';
import { Header } from './Components/Header';
import { SettingsPage } from './Components/SettingsPage';
import SimpleSotrage from 'react-simple-storage';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'Today' : [],
      'Tomorrow' : [],
      'Day_After_Tomorrow' : [],
      'aray' : [],
      'err': '',
      'showSetting': 'False',
      'username': 'Hi Someone!'
    }
    this.updateEntry = this.updateEntry.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showSettingFunction = this.showSettingFunction.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.hideSettingFunction = this.hideSettingFunction.bind(this);
}

  setUserName(nam){
    this.setState({
      'username': nam
    })
  }

  showSettingFunction(parameter){
    if (parameter === 'True'){
      this.setState({
        'showSetting': 'True'
      })
    }
  }

  hideSettingFunction(parameter){
    if (parameter === 'False'){
      this.setState({
        'showSetting': 'False'
      })
    }
  }

  updateEntry(term, day){
    console.log(day);
    if(day === 'Today'){
      if(this.state.Today.indexOf(term) > -1){
        this.setState({
          'err': 'this is already present'
        })  
      }else{
        this.setState({
          'Today' : [...this.state.Today, term],
          'err': ''
        })
      }
    }else if(day === 'Tomorrow'){
      if(this.state.Tomorrow.indexOf(term) > -1){
        this.setState({
          'err': 'this is already present'
        })  
      }else{
        this.setState({
          'Tomorrow' : [...this.state.Tomorrow, term],
          'err': ''
        })
      }
    }else if(day === 'Day_After_Tomorrow'){
      if(this.state.Day_After_Tomorrow.indexOf(term) > -1){
        this.setState({
          'err': 'this is already present'
        })  
      }else{
        this.setState({
          'Day_After_Tomorrow' : [...this.state.Day_After_Tomorrow, term],
          'err': ''
        })
      }
    }
  }

  deleteItem(index, day){
    if (day === 'Today'){
      let filterList = this.state.Today.filter((elem, i) => {
        if(i === index){
          return false;
        }
          return true;
      })
      this.setState({
        'Today': filterList
        });
      }else if(day === 'Tomorrow'){
        let filterList = this.state.Tomorrow.filter((elem, i) => {
          if(i === index){
            return false;
          }
            return true;
        })
        this.setState({
          'Tomorrow': filterList
          });
        }
        else if(day === 'Day_After_Tomorrow'){
          let filterList = this.state.Day_After_Tomorrow.filter((elem, i) => {
            if(i === index){
              return false;
            }
              return true;
          })
          this.setState({
            'Day_After_Tomorrow': filterList
            });
          }else{
            console.log('something went wrong while removing item...');
          }
        }



  render(){
    if(this.state.showSetting === 'False'){
      return(
              <div>
        <SimpleSotrage parent={this} />
        <Header showSettingFunction={this.showSettingFunction}  nam={this.state.username} />
        <br/>
        <Textbox updateEntry={this.updateEntry} />
        <span>{this.state.err}</span>
        <br/>
        <br/>
        <div className="display_grid">
          <DisplayToday items={this.state.Today} deleteItem={this.deleteItem} />
          <DisplayTomorrow items={this.state.Tomorrow} deleteItem={this.deleteItem} />
          <DisplayDayAfterTomorrow items={this.state.Day_After_Tomorrow} deleteItem={this.deleteItem} />
        </div>
      </div>
      );
    }else if(this.state.showSetting === 'True'){
      return(
      <div>
        <SimpleSotrage parent={this} />
        <Header showSettingFunction={this.showSettingFunction} nam={this.state.username} />
        <br/>
        <span>{this.state.err}</span>
        <br/>
        <br/>
        <div>
          <SettingsPage hideSettingFunction={this.hideSettingFunction} presentName={this.state.username} setUserName={this.setUserName} />
        </div>
      </div>
        
      )
    }else{
      return(
        <div>
          some thing is wrong...contact developer!
          </div>
      )
    }
  }
}


class Textbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'term': '',
      'err': '',
      'day': 'Today'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)     
  }

handleChange(e){
    this.setState({
      'term': e.target.value
    })
}

handleSubmit(e){
  e.preventDefault();
  if( this.state.term.length > 1  ){
      this.setState({
        'err': ''
      })
      this.props.updateEntry(this.state.term, this.state.day)
      this.setState({
        'term': ''
      })
  }else{
    this.setState({
      'err': 'please type something...'
    })
  }
}

handleSelect(event){
  this.setState({
    'day': event.target.value
  })
  console.log(event.target.value);
}

  render(){
    return(
      <div className="textbox container">
      <form onSubmit={this.handleSubmit} className="form"> 
      <div className="form-group form-warning">
      <center><label>FOR</label></center>
        <select value={this.state.day} id="day" onChange={this.handleSelect} className="form-control" >
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="Day_After_Tomorrow">Day after Tomorrow</option>
          </select>
      </div>
      <div className="form-group form-warning">
          <center><label>YOUR GOAL</label></center>
          <input type="text" id="aim" value={this.state.term} placeholder='type here and press enter' onChange={this.handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <button className="btn btn-warning btn-ghost" id="iwilldothis">I WILL DO THIS.</button>
      </div>
      <span>{this.state.err}</span>
      </form>
      </div>
    )
  }
}


export default App;