import { useState, useEffect } from 'react'
import barsSolid from '../static/icon/bars-solid.svg'
import xSolid from '../static/icon/x-solid.svg'

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

    const listaMenu = ['YO', 'PROYECTOS']
    const href = ['#yo', '#proyectos']

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
            if (windowSize[0] > 700) { setIsOpen(false) }
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <div className="navbar-portafolio">
            <div className="navbar-portafolio-div-1">
                <span>Armando?</span>
            </div>
            <div className="navbar-portafolio-div-2" onClick={() => { setIsOpen(!isOpen) }}>
                <img src={isOpen ? xSolid : barsSolid} alt='icon' />
                <ul>
                    {listaMenu.map((texto, indice) => (
                        <a key={indice} href={href[indice]}><li>{texto}</li></a>
                    ))}
                </ul>
            </div>

            {isOpen ?
                <div className="navbar-portafolio-div-3" style={windowSize[0] > 700 ? { display: 'none' } : { display: 'block' }}>
                    <ul>
                        {listaMenu.map((texto, indice) => (
                            <a key={indice} href={href[indice]}><li>{texto}</li></a>
                        ))}
                    </ul>
                </div>
                :
                <div className="navbar-portafolio-div-3" style={{ display: 'none' }}>
                    <ul>
                        {listaMenu.map((texto, indice) => (
                            <a key={indice} href={href[indice]}><li>{texto}</li></a>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}