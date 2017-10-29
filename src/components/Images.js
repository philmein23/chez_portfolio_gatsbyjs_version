import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { CLOUDINARY } from '../constants/constants';
import Modal from '../components/Modal';

import { css } from 'glamor';

class Images extends Component {
  state = {
    display: false,
    selectedImageId: ''
  };

  handleModalDisplay = selectedImageId => {
    this.setState({
      selectedImageId,
      display: true
    });
  };

  closeModal = () => {
    this.setState({ display: false });
  };

  render() {
    const imageLink = css({
      cursor: 'pointer',
      margin: '2px'
    });

    const { imageData: { allImageField: { edges }} , width } = this.props;

    const linkHover = css({
      ':hover': {
        opacity: '0.6'
      }
    })

    return (
      <div>
        <Modal
          width={500}
          closeModal={this.closeModal}
          display={this.state.display}
          selectedImageId={this.state.selectedImageId}
        />
        {edges.map(({ node }, index) => (
          <a
            {...imageLink} {...linkHover}
            key={node.id}
            onClick={() => this.handleModalDisplay( node.id )}
          >
            <Image
              cloudName={CLOUDINARY().CLOUDNAME}
              publicId={node.id}
              width={width}
              crop={CLOUDINARY().CROP_TYPE}
            />
          </a>
        ))}
      </div>
    );
  }
}

export default Images;
