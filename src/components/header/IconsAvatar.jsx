import React, {useState} from 'react'
import './header.css'
import basket from "./images/basket.png";
import avatar from "./images/avatar.png";
import arrow from "./images/arrow.png";

export const IconsAvatar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [classMenu, setClassMenu] = useState("header-menu");
    const onMenu = () => {
        openMenu? setOpenMenu(false): setOpenMenu(true)
        openMenu ? setClassMenu("header-menu-open") : setClassMenu("header-menu");
    }
 
    return (
        <div className="header-flex">
            <select className="form-select header-select" aria-label="Default select example">
                <option >Укр</option>
                <option value="1">Рус</option>
                <option value="2">Eng</option>
            </select>
            <div className="header-flex">                       
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                <div className="circle">8</div> 
            </div>
            <div className="header-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 1 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 0h-5a.5.5 0 0 1-.5-.5z"/>
                </svg> 
                <div className="circle red">3</div>
            </div>
            <div className="header-flex">
                <img src={basket}  width="20" height="18" alt="monvalise-logo" />
                <div  className="circle">3</div>
            </div>
            <div className="nav-item ">
                <a  role="button" aria-expanded={openMenu} onClick={onMenu}>
                    <img src={avatar} alt="search" />
                    <img src={arrow} alt="" className="header-arrow"/>
                </a>
                <ul className={classMenu} >
                    <li><p className="dropdown-item" >Action</p></li>
                    <li><p className="dropdown-item" >Another action</p></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><p className="dropdown-item" >Something else here</p></li>
                </ul> 
            </div>
        </div>
    )       
}
