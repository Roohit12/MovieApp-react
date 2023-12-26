import React, { Component } from "react";
import style from './navbar.module.css';

class Navbar extends Component{

    render(){
        return (
            <div className={style.Nav}>
                <div className={style.title}>
                    Movie-App
                </div>
                <div className={style.CartContainer}>
                 <img className={style.img} src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart img" />
                 <span className={style.cartCount}  > 3</span>
               </div>

            </div>
        )
    }
}
export default Navbar;