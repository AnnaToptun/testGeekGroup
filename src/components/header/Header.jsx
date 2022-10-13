import {React, useState} from 'react'
import {IconsAvatar} from './IconsAvatar';
import like from "./images/like.png";
import dress from "./images/dress.png";
import monvalise from "./images/monvalise.png";
import search from "./images/search.png";
import './header.css'
export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [classMenu, setClassMenu] = useState("header-menu");
    const onMenu = () => {
        openMenu? setOpenMenu(false): setOpenMenu(true)
        openMenu ? setClassMenu("header-menu-open") : setClassMenu("header-menu");
    }
    const navigateArray = [
      "ГОЛОВНА",
      "КАТАЛОГ",
      "ЖІНКАМ",
      "ЧОЛОВІКАМ",
      "ДИТЯЧІ РЕЧІ",
      "АУКЦІОН",
      "БРЕНДИ",
      "АУТЕНТИФІКАЦІЯ",
      "БЛОГ"
    ]; 
    return (
        <header className="container-fluid header">
            <div className="container-fluid header-discount">
                <img src={like} alt="like" />
                <img src={dress} alt="dress" />
                <span>Брендовий верхній одяг від 899 грн</span>
            </div>
            <div className="container-xxl header-search">
                <img src={monvalise}  width="150" alt="monvalise-logo" />
                <div className="label">
                    <label htmlFor="exampleFormControlInput1" className="form-label search-label"><img src={search} alt="search" /></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Знайти речі або бренди"/>  
                </div>
                <button type="button" className="btn">Додати товар</button>
                <IconsAvatar/>
            </div>
            <ul className="container-xxl header-navigate">
                {
                    navigateArray.map((item, index) => (
                        <li key={index}><a href="#">{item}</a></li>
                    ))
                }
            </ul>
            
        </header>
    );
}
