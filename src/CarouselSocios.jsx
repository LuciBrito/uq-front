import acero from './img/aceroplat.png'
import ab3 from './img/ab3.jpg'
import acropolis from './img/acropolis.jpg'
import alecar from './img/alcemar.jpg'
import boker from './img/boker.jpg'
import futura from './img/futura.jpg'
import cas from './img/cas.jpg'
import catto from './img/cattorini.jpg'
import cerQuil from './img/cer-quil.jpg'
import cervecQuil from './img/cervec-quil.jpg'
import cosme from './img/cosme-marino.jpg'
import codigo from './img/codigo-limpio.jpg'
import comAmeri from './img/com-americana.jpg'
import condAberdi from './img/cond-alberdi.jpg'



export default function CarouselSocios() {
  return (
     <div className="carousel">
      <div className="track">
        <img src={acero} />
        <img src={ab3} />
        <img src={acropolis} />
        <img src={alecar} />
        <img src={boker} />
        <img src={cas} />
        <img src={catto} />
        <img src={cerQuil} />
        <img src={cervecQuil} />
        <img src={cosme} />
        <img src={codigo} />
        <img src={comAmeri} />
        <img src={condAberdi} />
      </div>
    </div>
  )
}
