import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 
 :root{
     --white: #fFf;
     --backgroung: #F2F3F5;
     --grey-line: #DCDDE0;
     --text: #666666;
     --text-highlight: #B3B9FF;
     --title: ${props => props.theme.colors.title};
     --red: #E83F5B;
     --green: #4CD62B;
     --blue: ${props => props.theme.colors.blueButton};
     --blue-hover: ${props => props.theme.colors.blueHover};
     --blue-twitter: #2AA9E0;
     --titleCountDown: ${props => props.theme.colors.titleCountDown};     
 }
 
 @media(max-width: 1080px){
     html {
         font-size: 93.75%;
     }
 }
 
 @media(max-width: 720px){
     html {
         font-size: 87.5%;
     }
 }
 
 body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.small}
 }
 
 body, input, textarea, button {
     font: 400 1rem "Inter", sans-serif;
 }
 
 button {
     cursor: pointer;
 }
 
 a {
     color: inherit;
     text-decoration: none;
 } 
`;