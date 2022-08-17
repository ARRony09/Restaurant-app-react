import React, { Component } from "react";

import { connect } from "react-redux";

const mapStateToProps = state => {
    //console.log('mapToStateToProps: ', state);
    return {
        dishes: state.dishes,
        sample: state.sample
    }
}

class Home extends Component {
    componentDidMount() {
        console.log("Home Props ", this.props);
        this.props.dispatch({
            type: 'TEST',
            value: 'Bohubrihi'
        })
    }
    componentDidUpdate() {
        console.log('Home Props Updated: ', this.props);
    }
    render() {
        document.title = 'Home';
        return (
            <div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);