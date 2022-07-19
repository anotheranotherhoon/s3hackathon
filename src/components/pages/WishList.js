import styled from "styled-components";

const BusinessName = styled.div`
    font-size:1.5rem;
`

const WishList = ({data, idx}) =>{
    return(
        <div>
            <div key={data.UC_SEQ}>
                <BusinessName>{data.MAIN_TITLE}</BusinessName>
                <div>{data.ITEMCNTNTS}</div>
                <img className="item-img" src={data.MAIN_IMG_THUMB} alt={data.MAIN_TITLE} width="200" height="200"></img>
            </div>
        </div>
    )
}

export default WishList;