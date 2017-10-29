import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { css } from 'glamor';
import Header from '../components/Header';

const layout = {
  width: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#edebeb',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

const main = {
  flex: '1'
};

const footer = {
  height: 50,
  backgroundColor: 'white',
  boxShadow: '0 -1px 4px rgba(0,0,0, 0.18)'
};

css.global('*', { margin: 0, fontFamily: 'Roboto Condensed' });

class Layout extends Component {
  componentDidMount() {
    const { site: { siteMetadata } } = this.props.data;

    document.title = siteMetadata.title;
  }

  render() {
    const mobileBelow578px = css({
      '@media(max-width: 575px)': {
        flexDirection: 'column',
        height: '80px'
      }
    });

    const { data: { site: { siteMetadata } }, location } = this.props;
    return (
      <div css={layout}>
        <head>
          <title>{siteMetadata.title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,700"
            rel="stylesheet"
          />
        </head>
        <Header
          currentPath={location.pathname}
          flexDirection={mobileBelow578px}
        />

        <main css={main}>{this.props.children()}</main>

        <footer css={footer} />
      </div>
    );
  }
}

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
