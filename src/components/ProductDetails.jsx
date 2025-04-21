import React from 'react'

const ProductDetails = ({product}) => {

    
    console.log("-----------------------");
    console.log(product);
    console.log("------------------------");
    
    
    return (
        <div>

            <section id="product-info">

                <div class="item-image-parent">
                    <div class="item-list-vertical">
                        <div class="thumb-box">
                            <img src={product?.image} alt="thumbnail" />
                        </div>
                        <div class="thumb-box">
                            <img src="https://i.ibb.co/Jt5zc58/thumb2.jpg" alt="thumbnail" />
                        </div>
                        <div class="thumb-box">
                            <img src="https://i.ibb.co/Yf9LMpy/thumb3.jpg" alt="thumbnail" />
                        </div>
                        <div class="thumb-box">
                            <img src="https://i.ibb.co/60hPGy2/thumb4.jpg" alt="thumbnail" />
                        </div>

                    </div>
                    <div class="item-image-main">
                        <img src={product?.image} alt="default" />
                    </div>
                </div>

                <div class="item-info-parent">

                    <div class="main-info">
                        <h4>{product?.title}</h4>
                        <div class="star-rating">
                            <span>★★★★</span>★
                        </div>
                        <p>Price: <span id="price">₹ {product?.price}</span></p>
                    </div>
                  
                    <div class="select-items">

                        <div class="change-color">
                            <label><b>Colour:</b> Black</label><br />
                            <div class="thumb-box">
                                <img src="https://i.ibb.co/QjkJJk3/select1.jpg" alt="thumbnail" />
                            </div>
                            <div class="thumb-box">
                                <img src="https://i.ibb.co/C297yD0/select2.jpg" alt="thumbnail" />
                            </div>
                        </div>

                        <div class="change-size">
                            <label><b>Size:</b></label><br/>
                                <select>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>2XL</option>
                                </select>
                        </div>

                        <div class="description">
                            <p>{product?.description}</p>
                            <ul>
                                <li>Care Instructions: Machine Wash</li>
                                <li>Fit Type: Classic Fit</li>
                                <li>Color name: Black-White</li>
                                <li>Material: Cotton</li>
                                <li>Pattern: Solid</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProductDetails
