import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };

    }
    componentDidMount() {
        console.log("--->>>", this.props.user);
        this.setState({ user: this.props.user })

    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        // console.log("--->>>", this.props.user);
        //const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {this.state.user.mobile}!</h1>
                <h1>Hi {this.state.user.mobile}!</h1>
                <p>Dashboard</p>
                <h3>Good things take time!!!!!!!!!!</h3>

                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;

    return {
        user,
        users
    };
}

const connectedDashboardPage = connect(mapStateToProps)(DashboardPage);
export { connectedDashboardPage as DashboardPage };