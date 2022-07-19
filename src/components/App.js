import Router from "./Router"
import Nav from "./Nav"
import Title from "./Title"
import { createGlobalStyle } from "styled-components";

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

// const serviceKey = process.env.REACT_APP_SERVICE_KEY

const App = () => {
  return(
    <>
      <GlobalStyle />
      <Title title={"부산에 가면"} textColor={"green"}/>
      <Nav />
      <Router />
    </>

  )
}
export default App