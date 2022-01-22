import React, {useContext} from 'react'
import Items from './Items';
import { CartContext } from './Card';
import { Scrollbars } from 'react-custom-scrollbars-2';

const ContextCart = () => {

    const {item,clearCart,totalItem,totalAmount} = useContext(CartContext)


    if(item.length === 0){
        return(
            <>
               <header className='header'>
            <div className='position_div'>
            <div className='header_inner'>
            <i className="fas fa-arrow-left"></i>
            <p>continue shopping</p>
            </div>

            <div className='shop_div'>
                <h1><i className="fas fa-shopping-cart shop"></i></h1>
                <p>0</p>
            </div>
            </div>
        </header>

        <section className='shopping_sec'>
            <h2>Shopping Cart</h2>
            <p>you have <span>0</span> items in shopping cart</p>

        </section>
            </>
        )
    }

    return (
        <>
        <header className='header'>
            <div className='position_div'>
            <div className='header_inner'>
            <i className="fas fa-arrow-left"></i>
            <p>continue shopping</p>
            </div>

            <div className='shop_div'>
                <h1><i className="fas fa-shopping-cart shop"></i></h1>
                <p>{totalItem}</p>
            </div>
            </div>
        </header>

        <section className='shopping_sec'>
            <h2>Shopping Cart</h2>
            <p>you have <span>{totalItem}</span> items in shopping cart</p>

            <div className='card_div'>
            <Scrollbars>


            {
                item.map((curVal) =>{
                    return <Items {...curVal} key={curVal.id}/>
                })
            }
                </Scrollbars>


            </div>

            <div className="total_div">
                <p>cart total: <span>{totalAmount}₹</span></p>
                <button id='btn-1'>chechout</button>
                <button id='btn-2' onClick={clearCart}>clear cart</button>
            </div>

        </section>            
        </>
    )
}

export default ContextCart;
