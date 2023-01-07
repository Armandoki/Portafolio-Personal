import yourhighlights from '../static/img/your-highlights.jpg'
import musicpro from '../static/img/music-pro.jpg'
import hollow from '../static/img/hollow.jpg'
import mytraining from '../static/img/my-training.jpg'

import js from '../static/icon/js.svg'
import css from '../static/icon/css3-alt.svg'
import html from '../static/icon/html5.svg'
import bootstrap from '../static/icon/bootstrap.svg'
import sass from '../static/icon/sass.svg'
import typescript from '../static/icon/typescript.svg'
import angular from '../static/icon/angular.svg'


export const Projects = () => {

    const proyectos = [
        {
            name: 'Your Highlights',
            url: 'https://github.com/Armandoki/Your-Highlights',
            img: yourhighlights,
            techs: [html, css, bootstrap]
        },
        {
            name: 'My Training',
            url: 'https://github.com/Armandoki/My-Training',
            img: mytraining,
            techs: [typescript, html, sass, bootstrap, angular]
        },
        {
            name: 'Music Pro',
            url: 'https://github.com/Armandoki/Music-Pro',
            img: musicpro,
            techs: [html, css, js, bootstrap]
        },
        {
            name: 'Hollow',
            url: 'https://github.com/Armandoki/Hollow',
            img: hollow,
            techs: [css, js, html, bootstrap]
        }
    ]

    return (
        <div className="projects" id="proyectos">
            <div className="projects-info">
                <h2>Mis Proyectos</h2>
            </div>
            <div className="projects-github">
                <div className="project-1" style={{ backgroundImage: `url(${proyectos[0].img})` }} onClick={() => window.open(proyectos[0].url, "_blank")}>
                    <h3><b>{proyectos[0].name}</b></h3>
                    {proyectos[0].techs.map((icon, indice) => (
                        <img src={icon} alt='icon' key={indice}/>
                    ))}
                </div>
                <div className="project-2" style={{ backgroundImage: `url(${proyectos[1].img})` }} onClick={() => window.open(proyectos[1].url, "_blank")}>
                    <h3><b>{proyectos[1].name}</b></h3>
                    {proyectos[1].techs.map((icon, indice) => (
                        <img src={icon} alt='icon' key={indice}/>
                    ))}
                </div>
                <div className="project-3" style={{ backgroundImage: `url(${proyectos[2].img})` }} onClick={() => window.open(proyectos[2].url, "_blank")}>
                    <h3><b>{proyectos[2].name}</b></h3>
                    {proyectos[2].techs.map((icon, indice) => (
                        <img src={icon} alt='icon' key={indice}/>
                    ))}
                </div>
                <div className="project-4" style={{ backgroundImage: `url(${proyectos[3].img})` }} onClick={() => window.open(proyectos[3].url, "_blank")}>
                    <h3><b>{proyectos[3].name}</b></h3>
                    {proyectos[3].techs.map((icon, indice) => (
                        <img src={icon} alt='icon' key={indice}/>
                    ))}
                </div>
            </div>
        </div>
    )
}