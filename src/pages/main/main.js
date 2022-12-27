import React from 'react'
import Masonry from 'react-masonry-css'
import { IconContext } from "react-icons";
import {  BiMenuAltLeft } from 'react-icons/bi';
import {  AiOutlineLogout } from 'react-icons/ai';
import {  RxCross2 } from 'react-icons/rx';
import "./styles.css";

function MainScreen() {
  return (
    <>
    <div className="main-container">
      <div className="header">
        <IconContext.Provider value={{ color: "#bf0000", size:"2.5rem" }}>
            <BiMenuAltLeft />
        </IconContext.Provider>
        <div className="search-box">
          <input type="text" placeholder='Search by Table No' />
        </div>
        <div className="user-container">
        <IconContext.Provider value={{ color: "#bf0000", size:"1.5rem" }}>
            <AiOutlineLogout />
        </IconContext.Provider>
        <p>Logout</p>
        </div>
      </div>
      <div className="orders-container">


      <Masonry
      breakpointCols={4}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        <div className='order' style={{border: "1px solid #026327"}}>
          <div className="order-head">
            <div className="tableNo" style={{backgroundColor: "#026327"}}>
                <h4>03</h4>
            </div>
            <div className="right">
              <h4 className='blink' style={{color: "#026327"}}>New Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="cancel-btn">
              <IconContext.Provider value={{ color: "#bf0000", size:"2rem" }}>
                  <RxCross2 />
              </IconContext.Provider>
            </div>
            <div className="confirm-btn">
              <button className='btn' style={{backgroundColor: "#026327"}}>Accept Order</button>
            </div>
          </div>
        </div>
        <div className='order' style={{border: "1px solid #cc5200"}}>
          <div className="order-head">
            <div className="tableNo" style={{backgroundColor: "#cc5200"}}>
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>Preparing Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="confirm-btn" style={{width: "100%"}}>
              <button className='btn' style={{backgroundColor: "#cc5200", width: "100%"}}>Mark as Ready</button>
            </div>
          </div>
        </div>
        <div className='order' style={{border: "1px solid #cc5200"}}>
          <div className="order-head">
            <div className="tableNo" style={{backgroundColor: "#cc5200"}}>
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>Preparing Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="confirm-btn" style={{width: "100%"}}>
              <button className='btn' style={{backgroundColor: "#cc5200", width: "100%"}}>Mark as Ready</button>
            </div>
          </div>
        </div>
        <div className='order' style={{border: "1px solid #cc5200"}}>
          <div className="order-head">
            <div className="tableNo" style={{backgroundColor: "#cc5200"}}>
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>Preparing Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="confirm-btn" style={{width: "100%"}}>
              <button className='btn' style={{backgroundColor: "#cc5200", width: "100%"}}>Mark as Ready</button>
            </div>
          </div>
        </div>
        <div className='order' style={{border: "1px solid #cc5200"}}>
          <div className="order-head">
            <div className="tableNo" style={{backgroundColor: "#cc5200"}}>
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>Preparing Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="confirm-btn" style={{width: "100%"}}>
              <button className='btn' style={{backgroundColor: "#cc5200", width: "100%"}}>Mark as Ready</button>
            </div>
          </div>
        </div>
        <div className='order' style={{border: "1px solid #020442"}}>
          <div className="order-head">
            <div className="tableNo" style={{backgroundColor: "#020442"}}>
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>Ready to Serve</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="confirm-btn" style={{width: "100%"}}>
              <button className='btn' style={{backgroundColor: "#020442", width: "100%"}}>Mark as Completed</button>
            </div>
          </div>
        </div>
        <div className='order' style={{border: "1px solid #020442"}}>
          <div className="order-head">
            <div className="tableNo" style={{backgroundColor: "#020442"}}>
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>Ready to Serve</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="confirm-btn" style={{width: "100%"}}>
              <button className='btn' style={{backgroundColor: "#020442", width: "100%"}}>Mark as Completed</button>
            </div>
          </div>
        </div>
    </Masonry>
    </div>
      {/* <div className="orders-container">
        <div className="orders">
          <div className="order-head">
            <div className="tableNo">
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>New Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="cancel-btn">
              <IconContext.Provider value={{ color: "#bf0000", size:"2rem" }}>
                  <RxCross2 />
              </IconContext.Provider>
            </div>
            <div className="confirm-btn">
              <button className='btn btn-theme'>Accept Order</button>
            </div>
          </div>
        </div>
        <div className="orders">
          <div className="order-head">
            <div className="tableNo">
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>New Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="cancel-btn">
              <IconContext.Provider value={{ color: "#bf0000", size:"2rem" }}>
                  <RxCross2 />
              </IconContext.Provider>
            </div>
            <div className="confirm-btn">
              <button className='btn btn-theme'>Accept Order</button>
            </div>
          </div>
        </div>
        <div className="orders">
          <div className="order-head">
            <div className="tableNo">
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>New Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="cancel-btn">
              <IconContext.Provider value={{ color: "#bf0000", size:"2rem" }}>
                  <RxCross2 />
              </IconContext.Provider>
            </div>
            <div className="confirm-btn">
              <button className='btn btn-theme'>Accept Order</button>
            </div>
          </div>
        </div>
        <div className="orders">
          <div className="order-head">
            <div className="tableNo">
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>New Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="cancel-btn">
              <IconContext.Provider value={{ color: "#bf0000", size:"2rem" }}>
                  <RxCross2 />
              </IconContext.Provider>
            </div>
            <div className="confirm-btn">
              <button className='btn btn-theme'>Accept Order</button>
            </div>
          </div>
        </div>
        <div className="orders">
          <div className="order-head">
            <div className="tableNo">
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>New Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="cancel-btn">
              <IconContext.Provider value={{ color: "#bf0000", size:"2rem" }}>
                  <RxCross2 />
              </IconContext.Provider>
            </div>
            <div className="confirm-btn">
              <button className='btn btn-theme'>Accept Order</button>
            </div>
          </div>
        </div>
        <div className="orders">
          <div className="order-head">
            <div className="tableNo">
                <h4>03</h4>
            </div>
            <div className="right">
              <h4>New Order</h4>
              <p>10:23 AM</p>
            </div>
          </div>
          <div className="item-list">
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
            <div className="item-row">
              <p>Item 1</p>
              <p>x 2</p>
            </div>
          </div>
          <div className="btn-container">
            <div className="cancel-btn">
              <IconContext.Provider value={{ color: "#bf0000", size:"2rem" }}>
                  <RxCross2 />
              </IconContext.Provider>
            </div>
            <div className="confirm-btn">
              <button className='btn btn-theme'>Accept Order</button>
            </div>
          </div>
        </div>
      </div>
       */}
    </div>
    </>
  )
}

export default MainScreen