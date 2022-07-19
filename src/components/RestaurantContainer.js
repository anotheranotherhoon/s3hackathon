import Restaurant from "./pages/Restaurant";
import styled from "styled-components";

const MainConatiner = styled.div`
    display:inline-block;
`;


const RestaurantContainer = ({restaurantList,handleWishTogo}) => {
    return (
        <MainConatiner>
            {restaurantList.map((data, idx)=><Restaurant data={data} key={idx} handleWishTogo={handleWishTogo}/>)}
        </MainConatiner>
        
    )

}

export default RestaurantContainer