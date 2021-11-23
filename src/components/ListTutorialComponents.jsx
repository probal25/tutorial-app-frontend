import React, { Component } from 'react';
import TutorialService from '../services/TutorialService';

class ListTutorialComponents extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            tutorials: []
        }
    }

    componentDidMount() {
        TutorialService.getTutorials().then((response) => {
            
            this.setState({
                tutorials: response.data
            });
            console.log(response.data);
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Tutorial List</h2>
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

export default ListTutorialComponents;