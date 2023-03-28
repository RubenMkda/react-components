import React, {useState} from "react"

const BurgerNav = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <header>
            <nav>
                <label>Rubenmkda</label>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <NavLinks name={'navlinks'}/>
            </nav>
            <div className={menu_class}>
                <NavLinks name={'menulinks'}/>
            </div>
        </header>
    )
}

const NavLinks = (props) => {

    return(
        <ul className={props.name}>
            <li><a href="#">Sobre mí</a></li>
            <li><a href="#">Redes</a></li>
            <li><a href="#">Proyectos</a></li>
        </ul>
    )
}

export default BurgerNav