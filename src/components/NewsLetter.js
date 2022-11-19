import { Alert, Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"

export const NewsLetter = ({onValidated, status, message}) => {

    const [email, setEmail] = useState('')

    useEffect(() => {
        if(status === 'success') clearFields()
    },[status])

    const handleSubmit = (e) => {
        e.preventDefault()
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('')
    }

    return(
        <Col lg={12}>
            <div className="newsLetter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Entre em contato pelo email</h3>
                        {status === 'sending' && <Alert>Enviando...</Alert>}
                        {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                        {status === 'success' && <Alert variant='success'>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}