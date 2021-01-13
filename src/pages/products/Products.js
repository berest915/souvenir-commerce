import React from 'react'
import {Wrapper, FlexItem} from './ProductsStyle'
import itemImg from "../../img/product-img.jpg"
import itemImg2 from "../../img/item2.jpg"

const Products = () => {
  return (
    <Wrapper>
      <FlexItem>
        <img src={itemImg2} className='product-img'/>
        <div>flexItem</div>
      </FlexItem>
      <FlexItem>
        <img src={itemImg} className='product-img'/>
        <div>flexItem</div>
      </FlexItem>
      <FlexItem>
        <img src={itemImg} className='product-img'/>
        <div>flexItem</div>
      </FlexItem>
      <FlexItem>
        <img src={itemImg} className='product-img'/>
        <div>flexItem</div>
      </FlexItem>
      <FlexItem>
        <img src={itemImg} className='product-img'/>
        <div>flexItem</div>
      </FlexItem>
      <FlexItem>
        <img src={itemImg} className='product-img'/>
        <div>flexItem</div>
      </FlexItem>
      <FlexItem>
        <img src={itemImg} className='product-img'/>
        <div>flexItem</div>
      </FlexItem>
     
     
    </Wrapper>
  )
}

export default Products
