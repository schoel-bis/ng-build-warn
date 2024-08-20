import { Injectable } from "@angular/core";
import { DateTime } from "luxon";

@Injectable({ providedIn: 'root' })
export class TimeMessagingService {
    getCurentTime() {
        return DateTime.local();
    }
}