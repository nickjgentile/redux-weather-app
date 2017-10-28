import React from 'react';
let counter = 0;

export default class History extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { searches } = this.props;

        return (
            <div className='col-6'>
                <div className="card">
                    <h4 className="card-header">Search History</h4>
                    <div className="card-block">
                        <h5 className="card-title">Your Recent Searches</h5>
                        <ul className="list-group list-group-flush">
                           
                            {
                                this.props.searches.map(obj => 
                                    <li key={counter++} className="list-group-item">
                                        <p className='left'>{obj.name}</p>
                                        <p className='right'>{obj.date}</p>
                                    </li>
                                )
                            }
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}