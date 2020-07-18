import { LightningElement } from 'lwc';
import Natour_Image from '@salesforce/resourceUrl/img';

export default class ModalPopupLWC extends LightningElement {
     isModalOpen = false;

    Natimage1 = Natour_Image + '/nat-8.png';
    Natimage2 = Natour_Image + '/nat-9.png';

    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }
    submitDetails() {
        this.isModalOpen = false;
    }

}
