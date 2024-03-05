import me from '../static/img/me.jpg'
import github from '../static/icon/square-github.svg'
import linkedin from '../static/icon/linkedin.svg'
import instagram from '../static/icon/square-instagram.svg'

export const Me = () => {

    let edadActual = (new Date()).getFullYear() - 2002
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

    return (
        <div className="me" id="yo">
            <div className="me-profile">
                <div className='me-div-img'>
                    <img src={me} alt="profile-img" />
                </div>
                <h1>Armando?</h1>
                <p>
                    Hola, mi nombre es Armando, Ingeniero en Informática graduado de Duoc UC. Actualmente tengo {edadActual} años y resido en Chile.
                    Mi pasión y enfoque principal radican en el desarrollo web, específicamente en el ámbito del front-end.
                </p>
            </div>

            <div className="me-redes">
                <h2>Mis Redes</h2>
                <div className="mis-redes-div">

                    {redes.map((red, indice) => (
                        <div key={indice} onClick={() => window.open(red.url, "_blank")}>
                            <img src={red.img} alt="red" />
                            <p>{red.text}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}