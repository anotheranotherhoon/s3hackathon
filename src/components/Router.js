import { Route, Routes } from "react-router-dom"
import Home from "../routes/Home"
import WishToGoContainer from "../routes/WishToGoContainer"
import Review from "../routes/Review"


const Router = ({isLoading,restaurantList,locationFilter,wishToGo,handleWishTogo}) => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home isLoading={isLoading} restaurantList={restaurantList} locationFilter={locationFilter} handleWishTogo={handleWishTogo} />}/>
                <Route path="/wishtogo" element={<WishToGoContainer wishToGo={wishToGo} />}/>
                <Route path="/review" element={<Review />}/>
            </Routes>
        </div>
    )
}

export default Router