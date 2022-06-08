import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import './header.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';


const Header = ({type}) => {
    const [openDate,setOpenDate] = useState(false);
    const [date, setdate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions,setOpenOptions] = useState(false);
    const [options,setOptions] = useState(
        {
            adult:1,
            children:0,
            room:1
        }
    )
    const handleOptions = (name,operation)=>{
        setOptions((prev)=>
        {
            return{
                ...prev,[name]:operation === "i" ? options[name]+1 : options[name]-1,
            };
        })
    }
  return (
    <div className='header'>
        <div className={type === 'list' ? 'header-container container list-mode' : 'header-container container'}>
            <div className='header-list'>
                <div className='header-list_item active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className='header-list_item'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flight</span>
                </div>
                <div className='header-list_item'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className='header-list_item'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            { type !== "list" &&
                <>
                <h1 className='header-title'>A lifetime of discounts? It's Genius.</h1>
                <p className='header-desc'>Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account</p>
                <button className='header-btn'>Sign in / Register</button>
                <div className='header-search-container'>
                    <div className='header-search'>
                        <div className='header-search-item'>
                            <FontAwesomeIcon icon={faBed} className="header-icon"/>
                            <input type="text" placeholder='Where are you going!' className='header-search-input' />
                        </div>
                        <div className='header-search-item'>
                            <FontAwesomeIcon icon={faCalendarDays} className="header-icon"/>
                            <span onClick={()=>setOpenDate(!openDate)} className='header-search-text'>{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setdate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                />
                            }
                        </div>
                        <div className='header-search-item'>
                            <FontAwesomeIcon icon={faPerson} className="header-icon"/>
                            <span onClick={()=>setOpenOptions(!openOptions)} className='header-search-text'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                            {openOptions && <div className='options'>
                                <div className='options-items'>
                                    <span className='option-text'>Adult</span>
                                    <div className='option-counter'>
                                        <button className='option-btn' onClick={()=>handleOptions("adult","d")} disabled={options.adult<=1}>-</button>
                                            <span className='option-number'>{options.adult}</span>
                                        <button className='option-btn' onClick={()=>handleOptions("adult","i")}>+</button>
                                    </div>
                                </div>
                                <div className='options-items'>
                                    <span className='option-text'>Children</span>
                                    <div className='option-counter'>
                                        <button className='option-btn' onClick={()=>handleOptions("children","d")} disabled={options.children<=0}>-</button>
                                            <span className='option-number'>{options.children}</span>
                                        <button className='option-btn' onClick={()=>handleOptions("children","i")}>+</button>
                                    </div>
                                </div>
                                <div className='options-items'>
                                    <span className='option-text'>Room</span>
                                    <div className='option-counter'>
                                        <button className='option-btn' onClick={()=>handleOptions("room","d")} disabled={options.room<=1}>-</button>
                                            <span className='option-number'>{options.room}</span>
                                        <button className='option-btn' onClick={()=>handleOptions("room","i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className='header-search-item'>
                            <button className='header-btn'>Search</button>
                        </div>
                    </div>
                </div>
                </>
            }
        </div>
    </div>
  )
}

export default Header