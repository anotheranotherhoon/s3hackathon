import { Route, Routes } from "react-router-dom"
import Home from "../routes/Home"
import WishListContainer from "../routes/WishListContainer"
import Review from "../routes/Review"


const Router = ({isLoading,restaurantList,locationFilter,wishToGo,handleWishTogo}) => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home isLoading={isLoading} restaurantList={restaurantList} locationFilter={locationFilter} handleWishTogo={handleWishTogo} />}/>
                <Route path="/wishlist" element={<WishListContainer wishToGo={wishToGo} />}/>
                <Route path="/review" element={<Review />}/>
            </Routes>
        </div>
    )
}

export default Router