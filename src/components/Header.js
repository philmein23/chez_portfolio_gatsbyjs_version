import React, { Component } from 'react';
import ActiveLink from './ActiveLink';

import { css } from 'glamor';

const mainTitle = {
  fontFamily: 'Raleway',
  textTransform: 'uppercase',
  fontSize: 25,
  paddingLeft: 10,
  fontWeight: '800',
  cursor: 'pointer',
  color: 'rgb(0, 0, 0)'
};

const header = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#FFF',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
  borderTop: '5px solid black',
  position: 'fixed',
  zIndex: '1000'
})

const linkLastChild = () => {
  return css({
    paddingRight: '15px'
  })
}

export default class Header extends Component {

  render() {
    const { flexDirection, currentPath } = this.props;

    const headerBar = css({
      display: 'flex',
      height: 50
    })

    return (
      <header {...header} {...flexDirection }>
        <div css={mainTitle}>illa Art Workz Studios</div>
        <nav {...headerBar} >
          <ActiveLink currentPath={currentPath} path={'/'}>Portfolio</ActiveLink>
          <ActiveLink currentPath={currentPath} path={'/contact'}>Contact</ActiveLink>
          <ActiveLink currentPath={currentPath} lastChild={linkLastChild()} path={'/about'}>About</ActiveLink>
        </nav>
      </header>
    );
  }
}
