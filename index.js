var Response = require('./classes/response');

var HttpRequest = class HttpRequest {
    constructor(_method, _url, _contentType){
        var request = new XMLHttpRequest();
        request.open(_method, _url, true);

        if(_contentType){
            request.setRequestHeader("Content-Type", _contentType);
        }

        this.setRequestHeader = function(_name, _content){
            request.setRequestHeader(_name, _content);
        }
    
        this.setTimeout = function(_miliseconds){
            request.timeout = _miliseconds;
        }
    
        this.getResponse = function(_data){
            return new Promise((resolve, reject) => {

                request.onload = function(){
                    if(request.status == 200){
                        try{
                            var response = JSON.parse(request.response);
                        }
                        catch(err){
                            if(err instanceof SyntaxError){
                                var response = request.response;
                            }
                            else{
                                resolve(new Response(false, request, err.message));
                            }
                        } 
                        resolve(new Response(true, response, "Success"));
                    }
                    else{
                        resolve(new Response(false, request, request.statusText));
                    }
                };
                
                request.ontimeout = function(){
                    resolve(new Response(false, request, "Request Timed Out"));
                };
    
                request.send(_data);
            });
        }
    }
}

module.exports = HttpRequest;