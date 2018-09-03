import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pushState, replaceState } from './ctrl';
import { Consumer } from './router'

class Link extends Component {
    handleClick = (e) => {
        console.log(this)
        const { to, replace,con } = this.props;
        e.preventDefault();
        replace ? replaceState(to) : pushState(to);
        this.props.context.handlePop();
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



export default props => (
    <Consumer>
        {context => <Link {...props} context={context}></Link>}
    </Consumer>
);;