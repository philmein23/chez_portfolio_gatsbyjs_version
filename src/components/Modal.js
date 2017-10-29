import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { CLOUDINARY } from '../constants/constants';
import { css } from 'glamor';

const overlayStyle = {
  position: 'fixed',
  zIndex: '9000',
  paddingTop: '10px',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.8)'
};

const button = {
  fontSize: '40px',
  fontWeight: 'bold',
  transition: '0.3s',
  color: '#f1f1f1',
  marginRight: '20px',
  cursor: 'pointer'
};

const buttonAlignment = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
};

const modalLayout = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center'
};

const imageBorder = {
  border: '10px solid #fff'
}

class Modal extends Component {
  render() {
    const { selectedImageId, display, closeModal, width } = this.props;
    const overlayContent = () => {
      if (!selectedImageId) return null;
      return (
        <div css={modalLayout}>
          <div css={buttonAlignment}>
            <span css={button} onClick={closeModal}>
              X
            </span>
          </div>

          <div css={imageBorder}>
            <Image
              cloudName={CLOUDINARY().CLOUDNAME}
              publicId={selectedImageId}
              width={width}
              crop={CLOUDINARY().CROP_TYPE}
            />
          </div>
        </div>
      );
    };

    const overlay = (
      <div style={overlayStyle}>{overlayContent()}</div>
    );

    return <div>{display ? overlay : null}</div>;
  }
}

export default Modal;
