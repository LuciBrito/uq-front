import slider from './img/img-slider.jpg';

export default function LandingBodyInfo() {
  return (
    <div className='container-body-info'>
        <div className='info-slider'>
            <h1>slider</h1>
            <div className='slider-img'>    
                <img src={slider} alt="" />
            </div>
        </div>
        <div className='info-text'>
            <h1 className='info-text-h1'> ¿QUE HACEMOS? </h1>
            <h3 className='info-text-h3'>La Unión Industrial de Quilmes es una de las entidades industriales más importante y reconocida de la región. Una de las características principales que nos identifican es la proactividad, el estar constantemente pendientes de las problemáticas que nos plantean nuestros asociados, asistiendo sus necesidades y brindándoles un servicio de calidad.</h3>
        </div>
    </div>
  )
}
