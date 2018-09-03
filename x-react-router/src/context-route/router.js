import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const { Provider,Consumer} = React.createContext({
    location: null,
    handlePop: null
})

class Router extends Component {
    constructor() {
        super();
        this.state = {
            match: this.computeMatch(window.location.pathname),
            location: window.location.pathname
        }
    }
    computeMatch(pathname) {
        return {
            path: "/",
            url: "/",
            params: {},
            isExact: pathname === "/"
        };
    }
    handlePop = () => {
        this.setState({
            match: this.computeMatch(window.location.pathname),
            location: window.location.pathname
        });
    }
    componentWillMount() {
        window.addEventListener('popstate', this.handlePop)
    }
    componentWillUnmount() {
        window.removeEventListener('popstate', this.handlePop)
    }
    render() {
        const { children } = this.props;
        const { location } = this.state;

        return (
            <Provider value={{ handlePop: this.handlePop, location }}>
                {children ? React.Children.only(children) : null}
            </Provider>
        );
    }
}

Router.propTypes = {

};

export default Router;