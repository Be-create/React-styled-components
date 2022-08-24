import styled from "styled-components"


const Button = styled.button `
background-color: red;
color : ${ ({theme})=>(theme === "light" ? "blue" : "white")};

&:hover{
  background-color: white;
  transition : background 1s 0s;

}


`
export {Button}