import React from 'react'
import heartIcon from "./images/heart-icon.png";
import Location from "./images/Subtract.png";
import "./styles/cardproducts.css";
export const CardProduct = ({card}) => {
    return (
        <div className="product" >
            <div>
                {
                    card.status === "organic"
                    ?   <div className="block-organic-heart">
                            <div className="product-organic">{card.status}</div>
                            <img src={heartIcon} alt="" />
                        </div>
                        : <div className='block-organic-heart'>
                            <span></span>
                            <img src={heartIcon} alt="" />
                        </div>
                }
                <div className="product-block-img">
                    <img className="product-img" src={card.productImg} alt="" />
                    
                </div>
                {
                    card.status === "TOP"
                        ? <div className="product-top">{card.status}</div>
                        : <div className='status-none'></div>
                }
            </div>
            <div >
                <span className="product-brand">{card.brand}</span>
                <h5 className="product-title">{card.title}</h5>
                <div className="product-info">
                    <div className="product-prices">
                        <span className="product-price">{card.price}</span>
                        <span>{card.priceDiscount}</span>
                    </div>

                    <div className="product-locate-user">
                        <span className="product-locate">
                            <img src={Location} alt="" />
                            <span>{card.location}</span>
                        </span>
                        <span>
                            <img src={card.avatar} alt="" />
                            <span>{card.user}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
    