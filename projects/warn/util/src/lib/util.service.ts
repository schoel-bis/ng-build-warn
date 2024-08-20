import { Injectable } from "@angular/core";
import _ from "lodash";

const { template } = _;

@Injectable({
  providedIn: "root",
})
export class UtilService {
  readonly #msgTemplate = template("My message to you is: <%= message %>");

  constructor() {}

  formatMessage(message: string): string {
    return this.#msgTemplate({ message });
  }
}
