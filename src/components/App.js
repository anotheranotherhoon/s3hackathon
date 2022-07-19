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
    const [isLoading, setIsLoading] = useState(false)
    const [restaurantList, setRestaurantList] = useState([])
    const [locationFilter, setLocationFilter] = useState(["지역을 선택하세요"])
    const [wishToGo, setWishToGo] = useState([])
    useEffect(() => {
        setIsLoading(true)
        async function fetchData() {
            return axios
            .get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=aq8sYaH34Y%2BsCLkpFAAApTVKwdrQx1uzzu20XopOisJqIeZ0daJUTV6xBr2D061DFF41yMuVZvge2kcn6%2FfbMA%3D%3D&resultType=json&numOfRows=149`)
            .then((res)=>{
                let options = res.data.getFoodKr.item.map((el) => el.GUGUN_NM)
                const set = new Set(options)
                setRestaurantList(res.data.getFoodKr.item)
                setLocationFilter(["지역을 선택하세요",...set])
                setIsLoading(false)
            })
        }
        fetchData()
    },[])
    const handleWishTogo = (e, id) => {
      setIsLoading(true)
      let data = restaurantList
      let oldWish = wishToGo
      let wishData = data.filter((el)=>el.UC_SEQ === id)[0]
      let newWish = oldWish.concat(wishData)
      let idx=oldWish.map((el)=>el.UC_SEQ)
      console.log("idx : ", idx,"wish :" ,wishData.UC_SEQ)
      if(idx.includes(wishData.UC_SEQ)){
        alert("이미 저장한 식당입니다!")
        setIsLoading(false)
        return 
      }
      setWishToGo(newWish)
      setIsLoading(false)
  }
  return(
    <>
      <GlobalStyle />
      <Title title={"부산에 가면"} textColor={"green"}/>
      <Nav/>
      <Router isLoading={isLoading} restaurantList={restaurantList} locationFilter={locationFilter} wishToGo={wishToGo} handleWishTogo={handleWishTogo} />
    </>

  )
}
export default App