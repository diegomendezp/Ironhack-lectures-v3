## HTTP Methods

------

**GET**

 \- has only Headers

Retrieve a specific resource or a collection of resources, should not affect the data/resource.

Can be cached

Should never be used to send sensitive data

Have length restrictions (you can’t send giant files)



<br>



**POST**

 \-  has Headers and Body

Creates a new Resource.

Each POST request should create a new resource with new unique id.

Are never cached



<br>



**PUT**

 \-  has Headers and Body

Update a specific resource (by id). Replaces all current representations of the target resource with the uploaded content.



<br>



**PATCH**

 \-  has Headers and Body

Update partial resources.



<br>



**DELETE**

 \- has Headers and Body

Removes specific resource by id. Removes all current representations of the target resource given by a URI.



<br>



**HEAD**

 \-  has only Headers

Same as GET but does not return a body in the response only headers and status line.

HEAD can be used for obtaining meta-information about the entity



<br>



**OPTIONS**

 \-  has Headers and Body

Used to check the supported HTTP methods (communication options) of for the target resource.



<br>



**CONNECT**

Establishes a tunnel to the server identified by a given URI.



<br>



**TRACE**



The TRACE method echoes the received request so that a client can see what (if any) changes or additions have been made by intermediate servers. 

TRACE enables a malicous party to steal information including Cookies, andpossibly website credentials via XSS (cross-site scripting).

TRACE requests can be disabled by making a change to the server configuration.





## Status codes



100

 \- Continue



**200** - OK

**201** - Created

**202** - Accepted

**204** - No Content



**302** - Found -  (also commonly used for URL **redirection** or use 303**)**



**400 -** Bad Request

**401 -** Unathorized

**402 -** Payment Required

**403 -** Forbidden

**404 -** Not Found

**408 -** Request Timeout



**500 -** Internal Server Error

**503** - Service unavailable





### Status code categories

------

1xx - Informational

2xx - Success

3xx - Redirection

4xx - Client Error

5xx - Server Error



418 - I'm a teapot (1998 Arpil Fools' joke) -



We can also expand it and create custom error codes and descriptions





## Fields in the HTTP Request Headers

------

GET /hello.htm HTTP/1.1
**User-Agent:** Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
**Host**: www.tutorialspoint.com
**Accept-Encoding:** gzip, deflate
**Connection**: Keep-Alive



1st line - Method, URI, HTTP version



Line 2 - **User-Agent**: Client browser info, where the request is originating from.



Line 3 - **Host:** specifies the Internet host and port number of the resource being requested



Line 4 - **Accept-Encoding:**  restricts the content-codings that are acceptable in the response.



Line 5 - **Connection:** When you make requests with "**keep-alive**" the subsequent request to the server will use the same TCP connection. 

This is called HTTP persistent connection. This helps in reducing CPU load on the server side and improves latency/response time.