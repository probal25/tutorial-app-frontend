import React, { Component } from 'react';
import TutorialService from '../services/TutorialService';
import { withRouter } from 'react-router-dom';

class ListTutorialComponents extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            tutorials: []
        }

        this.addTutorial = this.addTutorial.bind(this);
    }

    componentDidMount() {
        TutorialService.getTutorials().then((response) => {
            
            this.setState({
                tutorials: response.data
            });
            console.log(response.data);
        });
    }

    addTutorial() {
        let path = `/add_tutorial`;
        console.log(path);
        console.log(this.props);
        this.props.history.push(path);
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Tutorial List</h2>
                <div className="row" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn btn-primary" onClick={this.addTutorial}>Add Tutorial</button>
                </div>
                <div className="row">
                    <table className = "table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Published</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tutorials.map(
                                    tutorial => 
                                    <tr key = {tutorial.id}>
                                        <td>{tutorial.title}</td>
                                        <td>{tutorial.description}</td>
                                        <td>{tutorial.published}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListTutorialComponents);