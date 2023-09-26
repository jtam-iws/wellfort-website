import React from 'react';
import 'twin.macro';

import type { GalleryBlock } from '~types/blocks';

import GalleryImage from './GalleryImage';
import Lightbox from './Lightbox';

import getStyles from './styles';

const Gallery: React.FC<GalleryBlock> = ({ columns, gap, images }) => {
  const styles = getStyles({ columns, gap });
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!isOpen) {
      setSelectedImage(null);
    }
  }, [isOpen]);

  const open = (): void => {
    setOpen(true);
  };

  const close = (): void => {
    setOpen(false);
  };

  return (
    <>
      <div css={styles}>
        {images.map((image, index) => (
          <GalleryImage
            key={`gallery-image-${image.id}`}
            image={image}
            onClick={() => {
              open();
              setSelectedImage(index);
            }}
          />
        ))}
      </div>
      <Lightbox
        isOpen={isOpen}
        onClose={close}
        image={selectedImage !== null ? images[selectedImage] : null}
      />
    </>
  );
};

export default Gallery;
