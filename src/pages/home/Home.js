import React from 'react';
import Featured from '../../componets/Featured/Featured';
import Header from '../../componets/header/Header';
import Navbar from '../../componets/navbar/Navbar';
import {Link} from 'react-router-dom';
import './home.css';

import Info from '../../componets/info/Info';
import Discount from '../../componets/discount/Discount';
import Searches from '../../componets/searches/Searches';
import Save from '../../componets/save/Save';
import Slidergal from '../../componets/sliderGallery/Slidergal';
import Reg from '../../componets/registration/Reg';
import Footer from '../../componets/Footer/Footer';



const Home = () => {
  const gal1 = [
    {
      img:"https://t-cf.bstatic.com/xdata/images/city/540x270/740930.webp?k=58e6fd52fcf3174223967fc1629c1de15a9ca9de10347618038d042b56e0f968&o=",
      title:"Trondheim",
      desc:"45 properties",
      flag:"https://t-cf.bstatic.com/static/img/flags/24/no/6193a14e4d59f814f46ee6313cdd6e11811abeb3.png"
    },
    {
      img:"https://t-cf.bstatic.com/xdata/images/city/540x270/844103.webp?k=b4ff3d17a962184dfa8823beec573fa3f679306e8b3fa897b901ba0dedb157bd&o=",
      title:"Cala Anguila",
      desc:"10 properties",
      flag:"https://t-cf.bstatic.com/static/img/flags/24/es/a14721d7698af5131b08bd34227508c729ab11bc.png"
    },
  ]
  const gal2 = [
    {
      img:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      title:"Dublin",
      desc:"123 properties",
      flag:"https://t-cf.bstatic.com/static/img/flags/24/it/b539a003f197845e447b9d00d91cd74dd57bf3dd.png"
    },
    {
      img:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      title:"Reno",
      desc:"533 properties",
      flag:"https://t-cf.bstatic.com/static/img/flags/24/gr/6863a8c81b841fd9a738f543550ec32c87bfafc0.png"
    },
    {
      img:"https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      title:"Austin",
      desc:"532 properties",
      flag:"https://t-cf.bstatic.com/static/img/flags/24/it/b539a003f197845e447b9d00d91cd74dd57bf3dd.png"
    },
  ]
  const gal3 = [
    {
      img:"https://t-cf.bstatic.com/xdata/images/xphoto/540x405/149368538.webp?k=5f62bbf11c5832fdc21dba7b1e7b5e7ac697afd89fccc5d243064c492cc5c58b&o=",
      title:"The most beautiful destinations for spring",
      desc:"The best places to enjoy spring around the world.",
    },
    {
      img:"https://t-cf.bstatic.com/xdata/images/xphoto/540x405/145620134.webp?k=283b4696ad83d58fae200521d54ae973793b29df5fe0f7b0a2923ca536dfedb0&o=",
      title:"New York City’s 6 most fashionable hotels",
      desc:"Celebrate Fashion Week in style at one of these trendsetting spots.",
    },
  ]
  const gal4 = [
    {
      img:"https://t-cf.bstatic.com/xdata/images/xphoto/540x405/153546775.webp?k=c130c13df42b76ccf91746aacb601acaabf142cfd86e643d723d5ed330b0b74a&o=",
      title:"Iconic Eurovision songs from 6 countries",
      desc:"Travel inspired by some of Eurovision’s most iconic pop anthems.",
    },
    {
      img:"https://t-cf.bstatic.com/xdata/images/xphoto/700x350/149290753.webp?k=a259252f4bd7d059023bddc2ab9604cc59fa04794ecdfb3583241aecc5db3612&o=",
      title:"7 European landmarks you can’t miss",
      desc:"Check these must-see spots off your list.",
    },
    {
      img:"https://t-cf.bstatic.com/xdata/images/xphoto/540x405/150934119.webp?k=303d1b82086e10bc81944e2dedc6810c0a6266e49ece124d264564575b532c8d&o=",
      title:"The best of the earth's natural beauty",
      desc:"Marvel at the spectacle of mother nature at these fascinating locations.",
    },
  ]

  const explore = [
    {
      img:'https://t-cf.bstatic.com/xdata/images/city/square250/972636.webp?k=495dd40724e74d2b2a11dc80a80c5973cbb2937d4ddc90d32d04592afd6fa1ca&o=',
      title:'Chania',
      desc:'992 properties'
    },
    {
      img:'https://t-cf.bstatic.com/xdata/images/city/square250/971374.webp?k=95b428839d92c523c81fc50dd7158a9073bbdf92df2a5166748b2d396976ae32&o=',
      title:'Athens',
      desc:'6874 properties'
    },
    {
      img:'https://t-cf.bstatic.com/xdata/images/region/square250/48990.webp?k=b81a555a2b7d356951e5f0e93d871b7289c07a3821b67e2f2a96c0ddb9633251&o=',
      title:'Santorini',
      desc:'1764 properties'
    },
    {
      img:'https://t-cf.bstatic.com/xdata/images/region/square250/49571.webp?k=cdb77c0b087f7564fac1325b4ebf60d723be0ec0e661eefd5b4e927ac8bf8a0d&o=',
      title:'Crete',
      desc:'10154 properties'
    },
    {
      img:'https://t-cf.bstatic.com/xdata/images/region/square250/66340.webp?k=ba1e466174578815cb02782009c2b22322a30b3cafca932270d2cd4f72b5848c&o=',
      title:'Zakynthos',
      desc:'1878 properties'
    },
    {
      img:'https://t-cf.bstatic.com/xdata/images/region/square250/49596.webp?k=ee95e4ef76ccf1fdf47b2c3375dd361c32224ea42f8751161e1b1a667073bbbd&o=',
      title:'Mykonos',
      desc:'1450 properties'
    },
    {
      img:'https://t-cf.bstatic.com/xdata/images/region/square250/49611.webp?k=3cb12ae75339d71ab09fcbada3836b9cb7edec8b7908ea9cbc7f93105b749b43&o=',
      title:'Rhodes',
      desc:'2260 properties'
    },
  ]
  const type = [
    {
      img:'https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
      title:'Hotels',
      desc:'862,638 hotels'
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
      title:'Hotels',
      desc:'862,638 hotels'
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
      title:'Hotels',
      desc:'862,638 hotels'
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
      title:'Hotels',
      desc:'862,638 hotels'
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
      title:'Hotels',
      desc:'862,638 hotels'
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
      title:'Hotels',
      desc:'862,638 hotels'
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg',
      title:'Hotels',
      desc:'862,638 hotels'
    },

  ]
  const travelers = [
    {
      img:'https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
      title:'Hotels',
      desc:'862,638 hotels',
      price:"Starting from BDT 16,413",
      rating:"8.9",
      outcome:"Excellent",
      reviews:"1670 reviews"
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
      title:'Hotels',
      desc:'862,638 hotels',
      price:"Starting from BDT 16,413",
      rating:"8.9",
      outcome:"Excellent",
      reviews:"1670 reviews"
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
      title:'Hotels',
      desc:'862,638 hotels',
      price:"Starting from BDT 16,413",
      rating:"8.9",
      outcome:"Excellent",
      reviews:"1670 reviews"
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
      title:'Hotels',
      desc:'862,638 hotels',
      price:"Starting from BDT 16,413",
      rating:"8.9",
      outcome:"Excellent",
      reviews:"1670 reviews"
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
      title:'Hotels',
      desc:'862,638 hotels',
      price:"Starting from BDT 16,413",
      rating:"8.9",
      outcome:"Excellent",
      reviews:"1670 reviews"
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
      title:'Hotels',
      desc:'862,638 hotels',
      price:"Starting from BDT 16,413",
      rating:"8.9",
      outcome:"Excellent",
      reviews:"1670 reviews"
    },
    {
      img:'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg',
      title:'Hotels',
      desc:'862,638 hotels',
      price:"Starting from BDT 16,413",
      rating:"8.9",
      outcome:"Excellent",
      reviews:"1670 reviews"
    },

  ]

  const slide_count=6;
  const slide_count2=4;

  return (
    <div>
        <Navbar />
        <Header />
        
        <div className='home-container'>
          <div className='checkbox-container container'><input type="checkbox" /> I'm traveling for work</div>
          <Info />
          <Discount />
          <Searches />
          <Save />
          <Slidergal explore={explore} title="Explore Greece" desc="These popular destinations have a lot to offer" slide={slide_count} />
          <Slidergal explore={type} title="Browse by property type" slide={slide_count} />
          <Featured direction="column" overlay="overlay" gal1={gal1} gal2={gal2} />
          <h2 className='container'>Get inspiration for your next trip</h2>
          <Featured direction="columnreverse" gal1={gal3} gal2={gal4} />
          <Slidergal explore={travelers} title="Homes guests love" community="Travel Community" slide={slide_count2} />
          <Slidergal explore={type} title="Connect with other travelers" community="Travel Community" slide={slide_count2} />
          <Reg />
          <Footer />
        </div>
    </div>
  )
}

export default Home