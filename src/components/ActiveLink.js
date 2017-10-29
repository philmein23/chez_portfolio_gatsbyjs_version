import React, { Component} from 'react';
import Link from 'gatsby-link';

import { css } from 'glamor';


const navItem = {
  listStyle: 'none',
  height: '100%',
  display: 'flex',
  alignItems: 'center'
}

const linkStyle = {
  display: 'inline-block',
  paddingLeft: '15px',
  textDecoration: 'none',
  color: 'black',
  fontWeight: '600',
  cursor: 'pointer'
}

const linkActive = {
  ':active': {
    transform: 'translateY(1px)'
  }
}

const linkHover = {
  ':hover': {
    color: '#a9a9a9'
  }
}



export default class ActiveLink extends Component {

  render() {
    const { children, path, currentPath, lastChild } = this.props;

    const activeStyle = css({
      borderBottom: currentPath === path ? '2px solid black' : '0px'
    })

    return (
      <li {...activeStyle}  {...lastChild} css={navItem}>
          <Link
            className={css(linkStyle, linkActive, linkHover)} 
            to={path}>
              {children}
          </Link>
      </li>
    )
  }
}