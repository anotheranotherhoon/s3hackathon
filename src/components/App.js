import Router from "./Router"
import Nav from "./Nav"
import Title from "./Title"
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react"
import axios from "axios"

const GlobalStyle = createGlobalStyle`
	* {
  box-sizing: border-box;
  }
  body {
  margin: 0;
  padding: 0;
  font-family: 'Hahmlet', serif;
  }
`
const App = () => {
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
    <>
      <GlobalStyle />
      <Title title={"부산에 가면"} textColor={"green"}/>
      <Nav option={option} handleLocation={handleLocation}/>
      <Router isSelected={isSelected} selectedOption={selectedOption} restaurantList={restaurantList}  />
    </>

  )
}
export default App