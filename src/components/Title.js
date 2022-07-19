import { Link } from "react-router-dom"
import styled from "styled-components"

const GoToHome = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Title = ({title, textColor}) => {
    return(
        <h1 style={{color : textColor}}><GoToHome to="/">{title}</GoToHome></h1>
    )
}

export default Title