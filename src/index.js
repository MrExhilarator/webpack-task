import css from "../NewsToday.css";
import { getHeader } from "./header";
import { getBodyContainer } from "./bodyContainer";
import { getFooter } from "./footer";
import _ from 'lodash';

const appendToBody = () => {
    document.body.appendChild(getHeader());
    document.body.appendChild(getBodyContainer());
    document.body.appendChild(getFooter());
}

appendToBody();
 
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("masala_button")
    .addEventListener("click",()=>import('./retrieveData').then(module => {
        const render = module.getMasala;
        render();
    }));
});