import React, { Component } from 'react';
import PropTypes from 'prop-types';
import matchPath from './matchPath';
import { register, unregister } from './ctrl';

class Route extends Component {
    componentWillMount() {
        register(this);
        window.addEventListener('popstate', this.handlePop);
    }
    componentWillUnmount() {
        unregister(this);
        window.removeEventListener('popstate', this.handlePop)
    }
    handlePop() {
        this.forceUpdate();
    }
    render() {
        const { path, exact, component, render } = this.props;
        const match = matchPath(window.location.pathname, { path, exact });

        if (!match) return null;

        if (match) return React.createElement(component, { match });

        if (render) return render({ match })

        return null;
    }
}

Route.propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.func,
    render: PropTypes.func
};

export default Route;