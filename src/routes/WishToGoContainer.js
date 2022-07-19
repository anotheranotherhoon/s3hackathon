import WishToGo from "../components/pages/WishToGo";
import styled from "styled-components";

const MainConatiner = styled.div`
    display:inline-block;
`;


const WishToGoContainer = ({wishToGo}) => {
    return (
        <MainConatiner>
            {wishToGo.map((data, idx)=><WishToGo data={data} key={idx} />)}
        </MainConatiner>
        
    )

}

export default WishToGoContainer