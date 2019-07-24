# aleph1-delayed-set-interval

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Issues](https://img.shields.io/github/issues/avrahamcool/aleph1-delayed-set-interval.svg?style=flat)](https://github.com/avrahamcool/aleph1-delayed-set-interval/issues)
[![NPMVersion](https://img.shields.io/npm/v/aleph1-delayed-set-interval.svg?style=flat)](https://www.npmjs.com/package/aleph1-delayed-set-interval)
[![NPMDownloads](https://img.shields.io/npm/dt/aleph1-delayed-set-interval.svg?style=flat)](https://www.npmjs.com/package/aleph1-delayed-set-interval) 
[![NPMSize](https://img.shields.io/bundlephobia/min/aleph1-delayed-set-interval.svg?style=flat)](https://www.npmjs.com/package/aleph1-delayed-set-interval)

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/avrahamcool/aleph1-delayed-set-interval.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/avrahamcool/aleph1-delayed-set-interval/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/avrahamcool/aleph1-delayed-set-interval.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/avrahamcool/aleph1-delayed-set-interval/alerts/)

aleph1-delayed-set-interval is a JS library that delay the setInterval function to the start of the next minute.

## Installing

```shell
yarn add aleph1-delayed-set-interval
```
or
```shell
npm install aleph1-delayed-set-interval
```
import the library using

```javascript
import { delayInterval, DelayedIntervalHandler} from "aleph1-delayed-set-interval";

/* set a funcrion to run every 3 seconds - starting from the start of the next minute. */
const handler: DelayedIntervalHandler = delayInterval( ()=>{ console.log("Hello"); }, 3000);

/* then sometime later */
handler.dispose();

```


## Developing & Prerequisites

```shell
git clone https://github.com/avrahamcool/aleph1-delayed-set-interval.git
cd aleph1-delayed-set-interval/
yarn
```
run `yarn build` or `npm build` to compile the entire project.

## Licensing

The code is open source and available under the [MIT License](LICENSE.md).

Built and maintained by [Essoudry Avraham](https://github.com/avrahamcool)