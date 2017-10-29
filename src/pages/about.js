import React, { Component } from 'react';
import { css } from 'glamor';
import Img from 'gatsby-image';

import ContentContainer from '../components/ContentContainer';

const AboutContainer = ({
  flexDirection = '',
  alignItems = '',
  marginTop = '',
  imageData
}) => {
  const flexContainer = {
    display: 'flex'
  };

  const textContainer = css({
    textAlign: 'left',
    color: 'rgb(108, 107, 107)',
    fontSize: '16px',
    lineHeight: '1.5em',
    paddingLeft: '10px',
    fontFamily: 'Raleway'
  });

  const aboutContainer = css({
    display: 'flex',
    alignItems,
    width: '100%',
    '@media(max-width: 575px)': {
      flexDirection: 'column'
    }
  });

  const headerTitle = css({
    fontSize: '25px',
    marginBottom: '20px'
  });

  const header = css({
    textTransform: 'uppercase',
    color: '#222'
  });

  const artistPictureContainer = {
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  }

  return (
    <div {...aboutContainer}>
      <div {...artistPictureContainer}>
        <h1 {...header} {...headerTitle}>
          About The Artist
        </h1>
        <Img
          resolutions={imageData.file.childImageSharp.resolutions}
        />
      </div>

      <text {...textContainer} css={{ marginTop }}>
        New York native Chez Negron is a self-taught artist that has
        been creating art since he was a child. He is said to have
        picked up a pencil at birth and began to draw. Chez was
        inspired by his mother Grace Vargas- an artist herself who was
        an Art Teacher for NYC Board of Education for over 20 years.
        <br />
        <br />
        Chez passions began with studying various different forms of
        art...including traditional art, comic book art, graffiti,
        abstract and more. Inspired by his mother and love of his
        city, Chez works with many different mediums. Including: Spray
        Paint, Acrylic, 3-D Paint, Watercolors, Oil Paints, Pens,
        Pencils, Markers, Colored Pencils, Pastels, Charcoal,
        Stencils, and more. “Money making Manhattan” helped mold Chez
        into the artist he is today.
        <br />
        <br />
        He currently is living 45 minutes outside of DC in Ashburn
        with his girlfriend and pup Chalupa Batman.
      </text>
    </div>
  );
};

export default class About extends Component {
  render() {
    const { data } = this.props;

    const mobileBelow578px = css({
      '@media(max-width: 575px)': {
        maxWidth: '300px'
      }
    });

    return (
      <div>
        <ContentContainer
          margin={'120px auto'}
          justifyContent={'flex-start'}
          maxWidth={mobileBelow578px}
        >
          <AboutContainer
            imageData={data}
            alignItems={'center'}
            marginTop={'10px'}
          />
        </ContentContainer>
      </div>
    );
  }
}

export const query = graphql`
  query AboutQuery {
    file(relativePath: { eq: "images/chez1.jpg" }) {
      childImageSharp {
        resolutions(width: 200) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
