import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{ 
        padding: 0;
        margin: 0;
        box-sizing: 0;
    }
    `

export const Main = styled.main`
    background-image: url("https://wallpaper.dog/large/11047086.jpg");
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-size:100%;
    min-height: 97vh;
    width: 100%;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    padding:10px 0;
    `;


export const Section = styled.section`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

export const Card = styled.div`
    background-color:rgba(225,225,225, 0.1);
    backdrop-filter: blur(10px);
    width:30%;
    margin-top: 10px;
    height:100px;
    padding: 15px;
    border: 1px solid #fff;
    border-radius: 10px;
`;
export const CorDiferenca = styled.p`
    color: ${props => {if(props.green){
                return "#00b33c"
            }else if(props.red){
                return "#ff1a1a"
            }else{
                return "#00ace6"
            }
        }};
    font-weight: bold;    
    
`