import React from 'react';
import Settings from '../settings.svg';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'timeRightNow': '',
            'd': ''
        }
        this.handleClickOnSetting = this.handleClickOnSetting.bind(this);
    }
    
    componentDidMount(){
        var currentTime = new Date();

        setInterval( () => {
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var outside = ''

            if(hours < 5){
                outside = ' GET SOME SLEEP!';
            }else if(hours < 12 ){
                outside = ' MORNING';
            }else if(hours < 16){
                outside= ' NOON';
            }else if(hours < 20){
                outside = ' EVENING';
            }else if(hours <= 23){
                outside = ' NIGHT';
            }
            else{
                outside = '';
            }
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            var v = hours + ":" + minutes + outside;
            this.setState({
                'timeRightNow': v
            });
            console.log(v);    
        }, 1000)

        var day = currentTime.getDate();
        var month = currentTime.getMonth();
        var year = currentTime.getFullYear();
        var din = currentTime.getDay();
        var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

        if(day < 10){
            day = '0' + day;
        }
        if(month < 10){
            month = '0' + month;
        }
        var d = day + '-' + month +  '-' + year + '  ' + days[din];
        this.setState({
            'd': d
        });
    }

    handleClickOnSetting(event){
        this.props.showSettingFunction('True');
    }
    
    
    render(){
        return(
            
            <div className="header">
                <div className="grid">
                <div className="cell -3of12">
                    <div className="content">
                    <span className="datetime" ><span className="dull">DATE:</span> {this.state.d} <br/> <span className="dull">TIME:</span> {this.state.timeRightNow} </span>
                    </div>
                </div>
                <div className="salutation cell -8of12">
                    <div className="content">
                    <div className="name">
                        <span> {this.props.nam} </span>
                    </div>
                    </div>
                    </div>
                <div className="settings cell -1of12" onClick={this.handleClickOnSetting}>
                    <img src={require('./setting-png.png')} alt="set"/>
                </div>
                </div>
            </div>

        )
    }
}