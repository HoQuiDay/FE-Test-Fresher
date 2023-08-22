import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function AddNewProduct() {
  const [isShowDetail, setIsShowDetail] = useState(true);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState('');
  const handleSubmit = () => {
    const values = {
      name: name,
      price: price,
      size: size,
      color: color
    };
    let productList = localStorage.getItem('productList');
    if (productList) {
      let arr = JSON.parse(productList);
      arr.push(values);
      localStorage.setItem('productList', JSON.stringify(arr));
    } else {
      localStorage.setItem('productList', JSON.stringify([values]));
    }
    setSize(0);
    setPrice(0);
    setName('');
    setColor('');
  };

  const handleHideShow = () => {
    setIsShowDetail(!isShowDetail);
  };
  return (
    <div>
      {isShowDetail && (
        <fieldset>
          <legend>Create Product</legend>
          <Form>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                type='text'
              />
            </FormGroup>{' '}
            <FormGroup>
              <Label for='price'>Price</Label>
              <Input
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='Price'
                type='text'
              />
            </FormGroup>{' '}
            <FormGroup>
              <Label for='size'>Size</Label>
              <Input
                name='size'
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder='Size'
                type='text'
              />
            </FormGroup>{' '}
            <FormGroup>
              <Label for='color'>Color</Label>
              <Input
                name='color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder='Color'
                type='text'
              />
            </FormGroup>{' '}
            <Button onClick={() => handleSubmit()}>Add Item</Button>
          </Form>
        </fieldset>
      )}
      {isShowDetail ? (
        <div
          className='show-hide-form'
          onClick={() => {
            handleHideShow();
          }}>
          Hide this form
        </div>
      ) : (
        <div
          className='show-hide-form '
          onClick={() => {
            handleHideShow();
          }}>
          Show this form
        </div>
      )}
      <div>{localStorage.getItem('productList')}</div>
    </div>
  );
}
