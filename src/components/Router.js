import { Route, Routes } from "react-router-dom"
import Home from "../routes/Home"
import WishList from "../routes/WishLIst"
import Review from "../routes/Review"


const Router = ({option, isSelected, selectedOption,restaurantList,handleLocation}) => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home option={option} isSelected={isSelected} selectedOption={selectedOption} restaurantList={restaurantList} handleLocation={handleLocation}/>}/>
                <Route path="/wishlist" element={<WishList />}/>
                <Route path="/review" element={<Review />}/>
            </Routes>
        </div>
    )
}

export default Router