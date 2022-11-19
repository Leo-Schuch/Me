import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeletingState] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    const toRotate = ['Javascript', 'React', 'NextJs', 'Typescript'];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeletingState(true);
            setDelta(period)
        } else if(isDeleting && updatedText === ''){
            setIsDeletingState(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) =>
            <div className={isVisible? 'animate__animated animate__fadeIn': ''}>
              <span className="tagline">Bem-vindo ao meu portifólio</span>
              <h1>{`Tecnologias que utilizo:`}<span className="wrap"> {text}</span></h1>
              <p>Me chamo Leonardo Schuch, tenho 30 anos. Sou apaixonado por novas tecnologias e por novos desafios.</p>
              <button onClick={() => console.log('connect')}>Vamos conectar.<ArrowRightCircle size={25}/></button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Headder IMG'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
