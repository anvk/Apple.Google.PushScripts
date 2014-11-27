Node.js push notification scripts
========

> Basic node.js scripts to send push notification to Apple and Google devices.

### Prerequisites

Node + NPM

```
$ npm install
```

### Prepare before the run

You have to add valied device uuids into `registrationIds` for Google

```
var registrationIds = [
  // 'my device keys goes here'
];
```

or into `devices` for Apple before you run the script.

```
var devices = [
  // 'my device keys goes here'
];
```

Follow this link to generate a necessary .p12 certificate from Apple. (http://appfurnace.com/2012/11/publishing-your-apps-how-to-create-a-p12-file/)

### How to run

```
$ node lib/googlePush.js
```

```
$ node lib/applePush.js
```

## License
The MIT License (MIT)

Copyright (c) 2014 Alexey Novak

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
