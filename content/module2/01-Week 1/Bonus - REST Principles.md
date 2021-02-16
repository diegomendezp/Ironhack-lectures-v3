## [REST Principles](https://restfulapi.net/)



**Representational state transfer** (**REST**) is a [software architectural](https://en.wikipedia.org/wiki/Software_architecture) style that defines a set of guidelines to be used when creating [Web services](https://en.wikipedia.org/wiki/Web_service). 



REST provides interoperability between computer systems on the [Internet](https://en.wikipedia.org/wiki/Internet) as each system has to use one uniform way of interact with the API. 



REST is describing the web. 

Before REST the architecture of the web was more or less non-existent. 

Representational State Transfer (REST) is a key architectural principle of the World Wide Web.



**Terminology:**

- **Resource** is an object or representation of something, which has some associated data with it ( *delete, add, update*).





## Guiding Principles of REST

1. #### Client–server

   The client application and server application MUST be able to evolve separately without any dependency on each other.

    A client should only know resource URIs and that’s all.

   

2. #### **Stateless** 

   REST is inspired by HTTP, so it reflects in this constraint. 

   Make all client-server interaction stateless. 

   Server will not store anything about latest HTTP request client made. It will treat each and every request as new. 

   No session, no history.

   

3. **Cacheable** 

   In REST, caching shall be applied to resources when applicable and then these resources MUST declare themselves cacheable. Caching can be implemented on the server or client side.

   

4. **Uniform interface** 

   A resource in the API should have only one logical URI and that provides a way to fetch related or additional data.

   

   The [HTTP methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (GET, POST, DELETE, PUT), also called as verbs, play the role.

   When the client raises a request to the server through an API, the client should know the feedback.

   The server should always return the right status code.

   #### **2xx (Success category)**

   #### **3xx (Redirection Category)**

   #### 4xx (Client Error Category)

   #### 5xx (Server Error Category)

   

5. **Layered system** – 

   REST allows you to use a layered system architecture where you **deploy the APIs on server A**, and **store data on server B** and a**uthenticate requests in Server C**, for example. 

   Each component in the layered system cannot “see” beyond the immediate layer with which they are interacting.

   

6. **Code on demand (optional)** – REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts.





<br>



### [GIST with the above summary](https://gist.github.com/ross-u/87e16beadad63566adde01b27aaefede)