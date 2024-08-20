import { DateTime } from "luxon";
import template from "lodash/fp/template";

const timeTpl = template("The current time is: <%= time %>");

export function getCurrentTimeAsString(): string {
  return timeTpl({
    time: DateTime.local().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
  });
}
