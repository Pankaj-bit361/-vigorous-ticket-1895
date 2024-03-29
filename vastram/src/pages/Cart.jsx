import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CartMap from "../components/Cartmap";
import EmptyCart from "../components/EmptyCart";
import styles from "./Cart.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    deleteCartdata,
    getCartProducts,
    updateCartdata,
} from "../redux/CartReducer/Action";

import { Spinner, useToast } from "@chakra-ui/react";
import LargeWithAppLinksAndSocial from "../components/Footer";
import WithSubnavigation from "../components/Navbar";

export const Cart = () => {

    const [quantity1,setquantity] =useState(1)

    const navigate = useNavigate();
    const [isButLoading, setIsButLoading] = useState(false);
    const toast = useToast();

    const { products, isLoading, isError } = useSelector((store) => {
        return {
            products: store.CartReducer.products,
            isLoading: store.CartReducer.isLoading,
            isError: store.CartReducer.isError,
        };
    }, shallowEqual);
    let dispatch = useDispatch();


    
    useEffect(() => {
        dispatch(getCartProducts());
    }, []);



    let totalprice=0;
    for(var i=0;i<products?.length;i++){
        totalprice+=products[i]?.quantity*products[i]?.off_price
    }
    useEffect(()=>{
    dispatch(getCartProducts())
    },[])
    
    const handlechange=(id,value)=>{
    console.log(value,"line 48")
    let ob={
        quantity:+value
    }
      dispatch(updateCartdata(id,ob)).then(()=>dispatch(getCartProducts()))
    
    console.log(products)
    
    }




    function HandleCartDelete(id) {
        dispatch(deleteCartdata(id)).then(() => {
            dispatch(getCartProducts());
        });
    }

    const handleCheckout = () => {
        setIsButLoading(true);
        setTimeout(() => {
            setIsButLoading(false);
            toast({
                title: "Please Add Your Address ",
                description: "We need your shipping details for delivery ",
                status: "info",
                variant: "left-accent",
                duration: 2500,
                isClosable: true,
                position: "top",
            });
            navigate("/checkout");
        }, 2000);
    };

    return (
        <>
        <WithSubnavigation/>
        <div>
            {products.length === 0 ? (
                <EmptyCart />
            ) : (
                <div
                    style={{
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        width: "85%",
                        margin: "20px auto",
                        padding: "20px",
                        borderRadius: "15px",
                    }}>
                    <div className={styles.Shopping_cart_heading}>
                        <p>Shopping Bag</p>
                        <p>{products.length} Items</p>
                    </div>
                    <div style={{ display: "flex", width: "100%" }}>
                        <div style={{ width: "75%" }}>
                            {products.map((el, i) => (
                                <CartMap
                                handlechange={handlechange}
                                    key={i}
                                    {...el}
                                    HandleCartDelete={HandleCartDelete}
                                />
                            ))}
                        </div>
                        <div className={styles.Order_summmary_div}>
                            <p>ORDER SUMMARY</p>

                            <p>Subtotal :{totalprice.toFixed(2)} </p>
                            <p>Shipping Economy Ground : $ 5.00</p>
                            <p>Sales Tax : $ 0.65</p>
                            <p>
                                Estimated Total:${" "}
                                {(totalprice + 5 + 0.65).toFixed(2)}
                            </p>

                            <button
                                onClick={handleCheckout}
                                className={styles.checkout_button}>
                                {!isButLoading && `Checkout `}
                                {isButLoading && (
                                    <Spinner
                                        thickness="4px"
                                        speed="0.55s"
                                        emptyColor="gray.200"
                                        color="#17274a"
                                        size="md"
                                    />
                                )}
                            </button>

                            <div className={styles.deliveryinfo_div}>
                                <button className={styles.Paypal_checkout}>
                                    PayPal Checkout
                                </button>
                                <br />
                                <br />

                                <input
                                    type="radio"
                                    name="delivery"
                                    defaultChecked={true}
                                />
                                <label>
                                    Economy Ground <br />
                                    (Delivered In 3 - 7 Business Days.): $5.00
                                </label>
                                <br />
                                <br />

                                <input type="radio" name="delivery" />
                                <label>
                                    Standard Ground <br />
                                    (Delivered In 3 - 5 Business Days.): $8.00
                                </label>
                                <br />
                                <br />

                                <input type="radio" name="delivery" />
                                <label>
                                    {" "}
                                    2 Business Days <br />
                                    (Order By 1:30PM EST, No Weekend
                                    Deliveries): $13.00
                                </label>
                                <br />
                                <br />

                                <input type="radio" name="delivery" />
                                <label>
                                    {" "}
                                    Overnight <br />
                                    (Order By 1:30pm EST, No Weekend
                                    Deliveries): $25.00
                                </label>
                                <br />
                                <br />

                                <p>
                                    4 interest-free payments of $4.52 with
                                    Klarna. Learn More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

        <LargeWithAppLinksAndSocial/>
        </>
    );
};

export default Cart;