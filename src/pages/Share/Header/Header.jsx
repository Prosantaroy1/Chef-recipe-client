import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css'
import { Button } from 'react-bootstrap';
import {  AiOutlineArrowLeft } from 'react-icons/ai';

const Header = () => {
    return (
        <div>
            <div className='sticky-top'>
              <NavBar></NavBar>
            </div>
            <div className='banner-img text-light d-flex flex-column align-items-center 
            justify-content-center lh-lg'>
               
                   <h2 className='text-center fw-bold text-light'>
                     BEST BANGLADESHI RECIPES 
                    <br/> <span className='text-dark'>বাংলাদেশী রেসিপি</span>
                  </h2>
                   <p className='text-center fw-bold text-success lh-base'>
                    স্বাদে পরিপূর্ণ আহারের জন্য আমাদের রেসিপি সাইট দেখুন!<br/> এখানে আপনি বিভিন্ন ধরনের 
                     রেসিপি 
                    পাবেন।<br/>
                   আমাদের সাইটে আপনি সহজেই সেই রেসিপি খুঁজে পাবেন। সহজ নির্দেশনা 
                    এবং পরামর্শের <br/>
                    সাহায্যে আপনি সুস্বাদু খাবার তৈরি করতে পারবেন।
                   </p>
                   <Button variant="warning"  className='px-4 py-2 fw-bold'>
                   <AiOutlineArrowLeft />  Choice Recipe </Button>
                  {' '}
           </div>
            
        </div>
    );
};

export default Header;
/*
  <Carousel slide={false}>
                    <Carousel.Item>
                    
                      <img
                        className="w-100"
                        src={img1}
                        alt="First slide"
                      />
                     
                      <Carousel.Caption>
                        <h2>First slide label</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 h-25"
                        src={img2}
                        alt="Second slide"
                      />
                
                      <Carousel.Caption >
                        <h2>Second slide label</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 h-25"
                        src={img3}
                        alt="Third slide"
                      />
                
                      <Carousel.Caption>
                        <h2>Third slide label</h2>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                 </Carousel>
                 */