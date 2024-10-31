import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
      <div className='card-img-item'>
        <img src={item?.img}/>
      </div>
      <div>{item?.choice==true?"Concious choice":""}</div>
      <div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new==true?"NEW":""}</div>
      </div>
    </div>
  )
}

export default ProductCard
