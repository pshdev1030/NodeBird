import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "./ImagesZoom";
const PostImages = ({ Images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);
  if (Images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={Images[0].src}
          alt={Images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom Images={Images} onClose={onClose} />}
      </>
    );
  }
  if (Images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            boxSizing: "border-box",
          }}
          src={Images[0].src}
          alt={Images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            boxSizing: "border-box",
          }}
          src={Images[1].src}
          alt={Images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom Images={Images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          src={Images[0].src}
          style={{ width: "50%" }}
          alt={Images[0].src}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {Images.length - 1} 개의 사진 더 보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom Images={Images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
