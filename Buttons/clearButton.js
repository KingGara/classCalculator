//import { calculator } from 
//import { display } from

import { calculator } from "../Calculator/calulator";




class clearButton {
    clearButtonHandler() {
        display.zeroDisplay();
        calculator.reset();
    }
}




export const clearButton = new clearButton();
