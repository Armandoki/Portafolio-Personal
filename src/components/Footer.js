import github from '../static/icon/square-github.svg'
import linkedin from '../static/icon/linkedin.svg'
import instagram from '../static/icon/square-instagram.svg'

import together from '../static/audio/Together.mp3'


export const Footer = () => {
    let fecha = new Date().getFullYear()
    const redes = [
        {
            url: 'https://github.com/armandoki',
            text: 'Git Hub',
            img: github
        },
        {
            url: 'https://www.linkedin.com/in/armando-neira-a700ba1ba/',
            text: 'Linkedin',
            img: linkedin
        },
        {
            url: 'https://www.instagram.com/arm.doki/',
            text: 'Instagram',
            img: instagram
        }]

    const audio = new Audio(together)
    audio.loop = true
    audio.volume = 0.6

    const controlAudio = () => {
        if(audio.paused){audio.play()}
        else{audio.pause()}
    }

    return (
        <div className="footer-pagina">
            <div className="footer-huevito">
                <p><span onClick={controlAudio}>"No importa cuanto lo intentes, nadie puede escapar de su pasado"</span></p>
            </div>
            <div className="footer-right-redes">
                <div>
                    {redes.map((red, indice) => (
                        <div key={indice} onClick={() => window.open(red.url, "_blank")}>
                            <img src={red.img} alt="red"/>
                            <p>{red.text}</p>
                        </div>
                    ))}
                </div>
                <p className='footer-Armando'>© {fecha} Armando?</p>
            </div>
        </div>
    )
}