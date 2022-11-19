import { Col, Row } from "react-bootstrap"

export const NewsLetter = ({subscribe, status, message}) => {
    return(
        <Col lg={12}>
            <div className="newsLetter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Entre em contato pelo email</h3>
                        {status === 'sending' && <Alert>Enviando...</Alert>}
                    </Col>
                </Row>
            </div>
        </Col>
    )
}