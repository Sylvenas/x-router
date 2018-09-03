import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pushState, replaceState } from './ctrl';

class Link extends Component {
    handleClick = (e) => {
        const { to, replace } = this.props;
        e.preventDefault();
        replace ? replaceState(to) : pushState(to);
    }
    render() {
        const { to, children } = this.props;

        return (
            <a href={to} onClick={this.handleClick}>{children}</a>
        );
    }
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    replace: PropTypes.bool,
};

export default Link;