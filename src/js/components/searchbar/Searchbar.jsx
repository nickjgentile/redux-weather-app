import React from 'react';
import getWeather from '../info/infoActions';
import getInput from '../searchbar/searchActions';
import addHistory from '../history/historyActions';

export default class Searchbar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.addSearch = this.addSearch.bind(this);
    }

    handleClick(e) {
        this.props.dispatch(getWeather(e.target.value));
    }
    searchChange(e) {
        this.props.dispatch(getInput(e.target.value))
    }
    addSearch(e) {
        this.props.dispatch(addHistory(e.target.value))
    }

    render() {
        const { searchInput } = this.props;
        return (
            <div>
                <div className="btn-group" data-toggle="buttons">
                    <button value="Tokyo" className="btn btn-primary btn-sm" value="tokyo" onClick={this.handleClick}>
                        Tokyo
                    </button>
                    <button value="Minneapolis" className="btn btn-primary btn-sm" value="minneapolis" onClick={this.handleClick}>
                        Minneapolis
                    </button>
                    <button value="Chicago" className="btn btn-primary btn-sm" value="chicago" onClick={this.handleClick}>
                        Chicago
                    </button>
                    <button value="San Diego" className="btn btn-primary btn-sm" value="san%20diego" onClick={this.handleClick}>
                        San Diego
                    </button>
                    <button value="London" className="btn btn-primary btn-sm" value="london" onClick={this.handleClick}>
                        London
                    </button>
                </div>
                <div className="form-group row">
                    <div className="col-12">
                        <div className="input-group">
                            <input type="text" className="form-control" value={searchInput} onChange={this.searchChange} placeholder="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-primary" value={this.props.searchInput} type="button" onClick={ this.handleClick /*&& this.addSearch*/ }>Go!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


