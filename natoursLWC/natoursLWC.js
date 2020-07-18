import { LightningElement,api } from 'lwc';
import Natour_Image from '@salesforce/resourceUrl/img';
   
export default class NatoursLWC extends LightningElement {
    @api isTrue;
    Natimage1 = Natour_Image + '/nat-1.png';
    Natimage3 = Natour_Image + '/nat-3.png';
    Natimage2 = Natour_Image + '/nat-2.png';

     
    handleClick() {
      this.dispatchEvent(new CustomEvent(true));
    }
}