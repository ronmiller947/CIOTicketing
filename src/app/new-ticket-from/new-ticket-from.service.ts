import { Injectable } from '@angular/core';

export class newTicketForm {

    State: string;

}
let forYouorSomeoneElse: string[] = ["For Myself", "For Someone Else"];
let ForNewOrExistingTickets: string[] = ["For a new issue", "For an existing issue"];
let OfficeSymbols: string[] = ["office Symbol A", "office Symbol B"];
let Areas: string[] = ["Area A", "Area B"];
let Services: string[] = ["Service A", "Service B"];
let Directorates:string[] = ["directorate A", "Directorate B"];
@Injectable()
export class Service {
    forYouorSomeoneElse() {
		return forYouorSomeoneElse;
    }
    ForNewOrExistingTickets(){
        return ForNewOrExistingTickets;
    }
    Directorates(){
        return Directorates;
    }
    OfficeSymbols(){
        return OfficeSymbols;
    }
    Areas(){
        return Areas;
    }
    Services(){
        return Services;
    }
}

