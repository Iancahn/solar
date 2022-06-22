import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`

//SASS

$font-stack:'Readex Pro', sans-serif;
$font-body:'Spline Sans', sans-serif;
$color-one: #06c739;
$color-two: #fba500;
$color-three:#031829;
$color-black: #090909;
$color-grey: #c1c1c1;

*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
}



html{
    @media (max-width: 1700px){
        font-size:75%
   }
   @media (max-width : 1300px){
    background: white;
   }
}
 body{
     font-family:'Readex Pro', sans-serif;
     background: #181818;
     overflow-x:hidden;
 }


`;

export default Globalstyle;