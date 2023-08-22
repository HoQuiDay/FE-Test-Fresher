import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import nike from '../../assets/images/nike.jpg';
import nike1 from '../../assets/images/nike1.jpg';
import nike2 from '../../assets/images/nike2.jpg';
import nike3 from '../../assets/images/nike3.jpg';
import nike4 from '../../assets/images/nike4.jpg';
import './Product.scss';
const arrImg = [nike, nike1, nike2, nike3, nike4];
function Product() {
  const [currentUpImg, setCurrentUpImg] = useState(nike);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const handleClickPreviewImg = () => {
    let index = arrImg.findIndex((item) => item === currentUpImg);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={arrImg[photoIndex]}
            nextSrc={arrImg[(photoIndex + 1) % arrImg.length]}
            prevSrc={arrImg[(photoIndex + arrImg.length - 1) % arrImg.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + arrImg.length - 1) % arrImg.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % arrImg.length)}
            animationDuration={500}
          />
        )}
      </div>
      <div className='product-container'>
        <div className='content-left'>
          <div className='img-up'>
            <img
              src={currentUpImg}
              onClick={() => {
                handleClickPreviewImg();
              }}
              alt='img-up'
            />
          </div>
          <div className='img-down'>
            <div className='img-small'>
              <img
                className={currentUpImg === nike1 ? 'active' : ''}
                src={nike1}
                alt='img-small'
                onClick={() => {
                  setCurrentUpImg(nike1);
                }}
              />
            </div>
            <div className='img-small'>
              <img
                className={currentUpImg === nike2 ? 'active' : ''}
                src={nike2}
                alt='img-small'
                onClick={() => {
                  setCurrentUpImg(nike2);
                }}
              />
            </div>
            <div className='img-small'>
              <img
                className={currentUpImg === nike3 ? 'active' : ''}
                src={nike3}
                alt='img-small'
                onClick={() => {
                  setCurrentUpImg(nike3);
                }}
              />
            </div>
            <div className='img-small'>
              <img
                className={currentUpImg === nike4 ? 'active' : ''}
                src={nike4}
                alt='img-small'
                onClick={() => {
                  setCurrentUpImg(nike4);
                }}
              />
            </div>
          </div>
        </div>
        <div className='content-right'>
          <div className='title'>Giày thể thao nam Anta Super Flexi 812237788-1</div>
          <div className='price'>775.000₫</div>
          <div className='size'>Size: 43</div>
          <div className='action'>
            <input
              className='quantity'
              type='number'
              defaultValue={1}
              min={1}></input>
            <button className='buy'>Chọn Mua</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
