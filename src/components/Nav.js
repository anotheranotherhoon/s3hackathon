import styled from "styled-components"
import { Link } from "react-router-dom";

const NavContainer = styled.ul`
    display:flex;
    flex-direction: row-reverse;
    width:100%;
    margin : 0;
    padding: 0;
    background-color: darkslategrey;
    list-style-type: none;
`
const NavItem = styled.li`
    padding: 15px;
    cursor: pointer;;
`
const LinkTo = styled(Link)`
    text-align:center;
    text-decoration: none;
    color: white;
`

const Nav = () => {
    return(
        <NavContainer>
            <NavItem><LinkTo to="/review">review</LinkTo></NavItem>
            <NavItem><LinkTo to="/wishlist">wishlist</LinkTo></NavItem>
        </NavContainer>
    )
}

export default Nav