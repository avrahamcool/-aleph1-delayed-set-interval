"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** number of MS in 1 second */
exports.second = 1000;
/** number of seconds in 1 minute */
exports.secondsInMinute = 60;
/** number of MS in 1 minute */
exports.minute = exports.second * exports.secondsInMinute;
/** number of minutes in 1 hour */
exports.minutesInHour = 60;
/** number of MS in 1 hour */
exports.hour = exports.minute * exports.minutesInHour;
/** number of hours in 1 day */
exports.hoursInDay = 24;
/** number of MS in 1 day */
exports.day = exports.hour * exports.hoursInDay;
/** number of MS in each time scale */
exports.timeByScale = {
    second: exports.second,
    minute: exports.minute,
    hour: exports.hour,
    day: exports.day
};
