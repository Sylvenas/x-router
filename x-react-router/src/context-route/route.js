import React, { Component } from 'react';
import PropTypes from 'prop-types';
import matchPath from './matchPath';
import { Consumer } from './router'

class Route extends Component {
    static contextTypes = {
        location: PropTypes.string
    };
    constructor(props) {
        super(props);
        this.state = {
            match: matchPath(
                window.location.pathname,
                {
                    path: props.path,
                    exact: props.exact
                })
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { path, exact } = nextProps;
        this.setState({
            match: matchPath(window.location.pathname, { path, exact })
        })
    }
    render() {
        const { component, render } = this.props;
        const { match } = this.state;

        if (!match) return null;

        if (match) return React.createElement(component, { match })

        if (render) return render({ match });

        return null;

    }
}

Route.propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.func,
    render: PropTypes.func
};



export default props => (
    <Consumer>
        {() => <Route {...props} ></Route>}
    </Consumer>
);