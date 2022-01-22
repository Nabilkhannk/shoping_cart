import React, { useContext } from 'react'
import { CartContext } from './Card'

const Items = (props) => {

    const { removeItems,increment, decrement } = useContext( CartContext )

    return (
        <>
           <div className="card_items">
                <div className="img_div">
                    <img src={props.img} alt="" />
                </div>
                <div className="product_name">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>    
                <div className="input_div">
                    <i className="fas fa-minus" onClick={() => decrement(props.id)}></i>
                    <input type="text" placeholder={props.quantity} />
                    <i className="fas fa-plus" onClick={() => increment(props.id)}></i>
                </div> 
                <div className="price_div">
                    <h3>{props.price}</h3>
                </div>

                <div className="delete_div">
                    <i className="fas fa-trash-alt" onClick={() => removeItems(props.id)}></i>
                </div>
                </div>
                <hr />   
        </>
    )
}

export default Items;
