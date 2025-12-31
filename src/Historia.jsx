import { Col, Container, Row } from 'react-bootstrap'

import img from './img/img-contact.png';

export const Historia = () => {
  return (
   <section className='parallax'> 
        <Container className='PY-5 my-5'>
            <h1 className='text-center'>Historia - EJEMPLO</h1>
            <div> 
                <p>
                    La Unión de Industriales de Quilmes nació en un contexto de lucha contra la zonificación que, según la interpretación local, impulsaba la erradicación de la actividad industrial. En las primeras reuniones, muchas realizadas en la casa de Esteban Pellerano, estaba la semilla de lo que el 6 de diciembre de 1971 se iba a conocer como la Unión de Industriales del Partido de Quilmes.
                    El primer socio fue Fioravanti Sorrentino, y el segundo, el mismo Pellerano, quien se convertiría en el primer presidente de la Unión. La primera sede se ubicó en H.Yrigoyen al 300, y operaban un gerente, dos empleados y un promotor. Pellerano sostenía además que por entonces “Quilmes, después de Rosario y Avellaneda era la tercera ciudad industrial del país."
                    Esta primera gran batalla fue fundamental para las pequeñas y medianas empresas, que comprendieron que la unidad les otorgaba mayor fuerza para enfrentar los desafíos. 
                    Con el tiempo, se comenzaron a ofrecer distintos servicios de asesoramiento en áreas como: laboral, administrativa, contable, jurídica, habilitaciones e instalaciones, ingeniería, agrimensura, seguridad e higiene.
                    En 1990, la entidad firmó un convenio con la Municipalidad para la gestión del cobro de tasas municipales, un paso importante en su consolidación.
                    Se sostuvo desde aquel entonces hasta la actualidad que: Unidos se tienen más fuerzas para resistir el atropello.
                </p> 
                <Row className='row-historia'>
                    <Col>
                        <h1>La casa propia</h1>
                        <p>
                            La búsqueda de la sede propia fue una aspiración que se concretó a fines de 1987 con  la adquisición de la vieja casa ubicada en Alvear 867. Ese mismo año se aprobó su remodelación, realizada en los primeros meses del año siguiente, aportando su fisonomía actual.
                        </p>
                    </Col>
                    <Col>
                        <img src={img} alt="Contact"  style={{ width:'300px' }}/>
                    </Col>
                </Row>

                <h2> Proyección en las entidades y la comunidad </h2>
                <p>
                    Varias fueron las formas de inserción en la comunidad, a través de realizaciones culturales. Lo confirman las becas a estudiantes de escuelas técnicas, las acciones junto a otras entidades locales y zonales y la permanente asistencia allí donde hizo falta la presencia industrial, siempre que las circunstancias lo permitieron.
                    Un ejemplo fue la organización de las dos ediciones de la Feria de la Flor realizada en Florencio Varela y el Encuentro Nacional de Museología Quilmes’83.
                    Dentro de los movimientos que tuvieron lugar en el Distrito, la Unión adhirió activamente a las gestiones para la creación del Departamento Judicial y la Universidad Nacional de Quilmes.
                </p>

            </div>
        </Container>
</section>
  )
}
