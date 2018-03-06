# Easy Http Request
A simple wrapper for XMLHttpRequest

## Installation
```
npm install easy-http-request
```

## Usage
Include easy-http-request in your project
```javascript
var HttpRequest = require('easy-http-request');
```

Create a new instance of the class with the following parameters
* **Method:** e.g. POST
* **URL:** e.g. http://httpbin.org/anything
* **Content Type:** e.g. text/html; charset=utf-8
```javascript
var request = new HttpRequest("POST", "http://httpbin.org/anything", "text/html; charset=utf-8");
```

Optionally add aditional headers
```javascript
request.setRequestHeader("Authorization", "Basic " + base64string);
```

Optionally add a timeout (value specified is miliseconds)
```javascript
request.setTimeout(1000);
```

Initiate the request with optional post data
```javascript
request.getResponse("This is an example string").then(function(resp){
    console.log(resp);
});
```

The response will have the following values:
* **success:** true if the call was successfull and false if there was a problem
* **data:** contains the returned data if successfull and the request object if there was a problem
* **message:** "Success" if the call was successfull, a detailed error message if there was a problem (e.g. "Request Timed Out")