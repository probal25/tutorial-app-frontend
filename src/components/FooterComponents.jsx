import React, { Component } from 'react';

class FooterComponents extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved To Probal @{(new Date().getFullYear())}</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponents;