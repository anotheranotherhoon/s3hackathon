import { useEffect, useState } from "react"
import axios from "axios"
import RestaurantContainer from "../components/RestaurantContainer"

const Home = () => {
    const [restaurantList, setRestaurantList] = useState([])
    const [option, setOption] = useState(["지역을 선택하세요"])
    const [isSelected, setIsSelected] = useState(false)
    const [selectedOption, setSelectedOption] = useState([])
    useEffect(() => {
        async function fetchData() {
            return axios
            .get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=aq8sYaH34Y%2BsCLkpFAAApTVKwdrQx1uzzu20XopOisJqIeZ0daJUTV6xBr2D061DFF41yMuVZvge2kcn6%2FfbMA%3D%3D&resultType=json&numOfRows=149`)
            .then((res)=>{
                let option = res.data.getFoodKr.item.map((el) => el.GUGUN_NM)
                const set = new Set(option)
                setRestaurantList(res.data.getFoodKr.item)
                setOption(["지역을 선택하세요",...set])
            })
        }
        fetchData()
    },[])
    const handleLocation = (event) => {
        console.log(event.target.value)
        let selectedLocation = event.target.value;
        if(selectedLocation ==="지역을 선택하세요"){
            setIsSelected(false)
            return
        }
        let data = restaurantList
        console.log("hello")
        setSelectedOption(data.filter((el) => el.GUGUN_NM === selectedLocation))
        setIsSelected(true)
    }
    return(
        <div>
            <select onChange={handleLocation}>
                {option.map((el,idx) => (
                    <option value={el} key={idx}>{el}</option>
                ))}
            </select>
            {isSelected ? <RestaurantContainer restaurantList={selectedOption}/> : <RestaurantContainer restaurantList={restaurantList}/>}
        </div>
        
    )
}

export default Home