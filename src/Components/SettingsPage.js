import React from 'react';

export class SettingsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'term': ''
        }
        this.handleSettingClose = this.handleSettingClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSettingClose(e){
        this.props.hideSettingFunction('False')
    }

    handleChange(e){
        this.setState({
            'term': e.target.value
        })
    }

    handleSubmit(){
        this.props.setUserName(this.state.term);
    }


    
    render(){
        return(
            <div>
                <div>
                    <div className="grid topbar">
                        <button onClick={this.handleSettingClose} className="btn btn-success btn-ghost">X</button>
                        <span>Close Settings</span>
                    </div>
                    <br/>
                    <div className="setting-grid grid">
                    <div className="mainsettings cell" onClick={this.handleClickOnSetting}>
                            <img src={require('./setting-png.png')} alt="set"/>

                    </div>
                    <div className="setting-title cell">
                    <span>S E T T I N G S</span>
                    </div>
                    <br/>
                    </div>
                    
                </div>
                <form className="formadjust" onSubmit={this.handleSubmit}>
                <fieldset className="form-group form-success">
                <label>YOUR NAME : </label>
                <input type="text" className="form-control" onChange={this.handleChange}/>
                </fieldset>
                <button className="btn btn-success btn-ghost">that's my name!</button>
                </form>
                <br/>
                <div className="maker-info">
                    <div className="maker-info-titl">
                        <h1> T H I S &nbsp; I S &nbsp; M A D E &nbsp; B Y </h1>
                    </div>
                    <div className="meker-info-content">
                        <h3>Mohit</h3>
                        <p>you can find him here -</p>
                        <h6>Github - <a href="https://www.github.com/mohit0101">www.github.com/mohit0101</a></h6>
                        <h6>instagram - <a href="https://www.instagram.com/frasm__">www.instagram.com/frasm__</a></h6>
                    </div>
                </div>
            

            </div>
        )
    }
}