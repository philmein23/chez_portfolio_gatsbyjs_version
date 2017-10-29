import React, { Component } from 'react';
import { css } from 'glamor';


export default class ContentContainer extends Component {
  render() {
    const {
      children,
      maxWidth,
      margin,
      justifyContent = ''
    } = this.props;

    const sectionStyle = css({
      display: 'flex',
      flexWrap: 'wrap',
      flexFlow: 'row wrap',
      backgroundColor: '#FFF',
      width: '100%',
      padding: '10px 15px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
      '@media(min-width: 576px)': {
        maxWidth: '950px',
        margin: '75px auto'
      },
      justifyContent
    })

    return (
      <section {...sectionStyle} {...maxWidth} {...margin}>
        {children}
      </section>
    );
  }
}