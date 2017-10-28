import React from 'react';

export default class Info extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { cityName, temp, pressure, humidity, low, high, windSpeed } = this.props;
        var color = this.props.cityName === "You input an invalid city name!" ? 
            'red'
            : 
            'blue';
        

        return (
            <div className='col-6'>
                <div className="card">
                    <h4 className="card-header">City Info</h4>
                    <div className="card-block">
                        <h5 className="card-title" id={color}> {this.props.cityName} </h5>
                        <div className='card-group'>
                            <div className="card col-4">
                                <strong>Temperature [F]</strong>
                                <p>{this.props.temp}F</p>
                            </div>
                            <div className="card col-4">
                                <strong>Pressure</strong>
                                <p>{this.props.pressure}</p>
                            </div>
                            <div className="card col-4">
                                <strong>Humidity</strong>
                                <p>{this.props.humidity}%</p>
                            </div>
                        </div>
                        <br/>
                        <div className='card-group info-bot'>
                            <div className="card col-4">
                                <strong>Lowest Temp [F]</strong><br />
                                <p>{this.props.low}F</p>
                            </div>
                            <div className="card col-4">
                                <strong>Highest Temp [F]</strong>
                                <p>{this.props.high}F</p>
                            </div>
                            <div className="card col-4">
                                <strong>Wind Speed</strong>
                                <p>{this.props.windSpeed}mph</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}