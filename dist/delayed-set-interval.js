"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_helper_1 = require("./time-helper");
/**
 * holds the handlers for the timeout and interval
 *
 * @export
 * @class DelayedIntervalHandler
 */
class DelayedIntervalHandler {
    /**
     * clear the interval
     *
     * @memberof DelayedIntervalHandler
     */
    dispose() {
        window.clearTimeout(this.timeoutHandler);
        window.clearInterval(this.intervalHandler);
    }
}
exports.DelayedIntervalHandler = DelayedIntervalHandler;
;
/**
 * repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. delay the first execution to the start of the next minute.
 *
 * @export
 * @param {() => void} func A function to be executed every delay milliseconds. The function is not passed any parameters, and no return value is expected.
 * @param {number} delay The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.
 * @returns {DelayedIntervalHandler} returns the handlers so this operation can be canceled later
 */
function delayInterval(func, delay) {
    const timeToNextMinute = (time_helper_1.secondsInMinute - new Date().getSeconds()) * time_helper_1.second;
    const handlers = new DelayedIntervalHandler();
    handlers.timeoutHandler = window.setTimeout(() => {
        handlers.intervalHandler = window.setInterval(func, delay);
        func();
    }, timeToNextMinute);
    return handlers;
}
exports.delayInterval = delayInterval;
