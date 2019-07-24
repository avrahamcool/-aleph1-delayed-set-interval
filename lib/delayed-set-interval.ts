import { secondsInMinute, second } from "./time-helper";

/**
 * holds the handlers for the timeout and interval
 *
 * @export
 * @class DelayedIntervalHandler
 */
export class DelayedIntervalHandler
{
    /**
     * holds the initialization timeout - if canceled before a new minute began - the interval will never register
     *
     * @type {number}
     * @memberof DelayedIntervalHandler
     */
    timeoutHandler?: number;

	/**
	 * holds the interval itself - so we can cancel the operation that runs every minute
	 *
	 * @type {number}
	 */
    intervalHandler?: number;

    /**
     * clear the interval
     *
     * @memberof DelayedIntervalHandler
     */
    dispose()
    {
        window.clearTimeout(this.timeoutHandler);
        window.clearInterval(this.intervalHandler);
    }
};

/**
 * repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. delay the first execution to the start of the next minute.
 *
 * @export
 * @param {() => void} func A function to be executed every delay milliseconds. The function is not passed any parameters, and no return value is expected.
 * @param {number} delay The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.
 * @returns {DelayedIntervalHandler} returns the handlers so this operation can be canceled later
 */
export function delayInterval(func: () => void, delay: number): DelayedIntervalHandler
{
    const timeToNextMinute: number = (secondsInMinute - new Date().getSeconds()) * second;
    const handlers: DelayedIntervalHandler = new DelayedIntervalHandler();

    handlers.timeoutHandler = window.setTimeout(() =>
    {
        handlers.intervalHandler = window.setInterval(func, delay);
        func();
    }, timeToNextMinute);

    return handlers;
}
