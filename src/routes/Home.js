import RestaurantContainer from "../components/RestaurantContainer"

const Home = ({isSelected, selectedOption,restaurantList}) => {
    return(
        <div>
            {isSelected ? <RestaurantContainer restaurantList={selectedOption}/> : <RestaurantContainer restaurantList={restaurantList}/>}
        </div>
        
    )
}

export default Home