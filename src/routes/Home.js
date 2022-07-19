import LoadingIndicator from "../components/LoadingIndicator"
import RestaurantContainer from "../components/RestaurantContainer"
import { useState } from "react"

const Home = ({isLoading,restaurantList,locationFilter, handleWishTogo}) => {
    const [isSelected, setIsSelected] = useState(false)
    const [selectedOption, setSelectedOption] = useState([])
    const handleLocation = (event) => {
        let selectedLocation = event.target.value;
        if(selectedLocation ==="지역을 선택하세요"){
            setIsSelected(false)
            return
        }
        let data = restaurantList
        setSelectedOption(data.filter((el) => el.GUGUN_NM === selectedLocation))
        setIsSelected(true)
    }
    
    return(
        <div>
            <select onChange={handleLocation}>
                {locationFilter.map((el,idx) => (
                    <option value={el} key={idx}>{el}</option>
                ))}
            </select>
            {isSelected ? (isLoading ? <LoadingIndicator/> : <RestaurantContainer restaurantList={selectedOption} handleWishTogo={handleWishTogo}/> ) :  (isLoading ? <LoadingIndicator/> : <RestaurantContainer restaurantList={restaurantList} handleWishTogo={handleWishTogo}/>)}
        </div>
        
    )
}

export default Home