import React, { Component } from 'react';

import ContentContainer from '../components/ContentContainer';
import { css } from 'glamor';

import fetch from 'isomorphic-unfetch';
import Images from '../components/Images';

export default class Index extends Component {
  mediaQueryList = null;

  state = {
    width: 200
  };

  setMediaUpdate = () => {
    this.mediaQueryList = window.matchMedia('(min-width: 576px)');

    this.mediaQueryList.addListener(this.updateWidth);
  };

  updateWidth = e => {
    if (e.matches) {
      this.setState({
        width: 200
      });
    } else {
      this.setState({
        width: 300
      });
    }
  };

  setDefaultTitle = () => {
    const { site: { siteMetadata } } = this.props.data;
    document.title = siteMetadata.title;
  };

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateWidth);
  }

  componentDidMount() {
    this.setDefaultTitle();
    this.setMediaUpdate();

    this.mediaQueryList.matches
      ? this.setState({ width: 200 })
      : this.setState({ width: 300 });
  }

  render() {
    const { data } = this.props;
    const { width } = this.state;
    const mobileBelow578px = css({
      '@media(max-width: 575px)': {
        maxWidth: '300px'
      }
    });

    const varyingMargin = css({
      '@media(max-width: 575px)': {
        margin: '100px auto'
      }
    });

    return (
      <ContentContainer
        margin={varyingMargin}
        maxWidth={mobileBelow578px}
      >
        <Images imageData={data} width={width} />
      </ContentContainer>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    allImageField {
      edges {
        node {
          id
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
