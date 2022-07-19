import WishList from "../components/pages/WishList";
import styled from "styled-components";

const MainConatiner = styled.div`
    display:inline-block;
`;


const WishListContainer = ({wishToGo}) => {
    return (
        <MainConatiner>
            {wishToGo.map((data, idx)=><WishList data={data} key={idx} />)}
        </MainConatiner>
        
    )

}

export default WishListContainer