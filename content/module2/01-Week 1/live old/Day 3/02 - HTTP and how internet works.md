# HTTP and How Internet Works





### Client and Server

All the devices connected to the Internet are either **servers** or **clients**.





- A **server** is a device that has **content (& functionality) available and serves it .**

  

- A **client** is a device that **accesses the content (& functionality)** from a *server*. 





To be a server your computer would need to be **turned on**, **awake** and have **Internet literally all the time**. 

Not very practical for our personal computers.



**Servers**, are exactly that: computers that are always turned on, awake and connected to the Internet so that users can connect to them.





**Clients** have to ask the servers for what they want. 

Resources have to be **requested** from the server.



### [OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_52990f8d31567a1abd048415fdeedc90.png)



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_52990f8d31567a1abd048415fdeedc90.png)







### [OPEN IMAGE](https://www.w3schools.in/wp-content/uploads/2019/01/client-server.jpg)

![img](https://www.w3schools.in/wp-content/uploads/2019/01/client-server.jpg)





<br>





# HTTP

- **H**yper**T**ext **T**ransfer **P**rotocol - is a **TCP/IP** based protocol

 (**TCP** - transmission control protocol, **IP** - internet protocol)



1. **HTTP is a connectionless protocol.** 

  After making the request the client disconnects from the server.

  When the response is ready the server re-establishes the connection again and sends the response.



2. **HTTP can be used to deliver any data as long as two computers are able to read it.**

   

3. In HTTP protocol data is being send via HTTP messages in a response/request cycle.





<br>



## The Request / Response cycle



#### [OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1bb24dbaf887dc70fc219c20988d7c39.png)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1bb24dbaf887dc70fc219c20988d7c39.png)



<br>



### [OPEN IMAGE](https://miro.medium.com/max/1189/1*2ButIBBk8OBypIt8eLyyvw.png)

![](https://miro.medium.com/max/1189/1*2ButIBBk8OBypIt8eLyyvw.png)



<br>



### Request -response cycle - Step by step:

1. Connection establishes
2. Client sends a **request** (aka HTTP message)
3. **Server** gets the request and **disconnects** from the client
4. Server processes the request and prepares the response
5. Server establishes the connection again and sends back the **response** (HTTP message)
6. Then the connection disconnects





<br>





### HTTP message

Consists of : 

1. **Start Line** 
2. **Headers**
3. **Body**

#### They all contain plain text information, except that <u>body can</u> also <u>contain binary data</u>.



#### [OPEN IMAGE](https://mdn.mozillademos.org/files/13827/HTTPMsgStructure2.png)



![](https://mdn.mozillademos.org/files/13827/HTTPMsgStructure2.png)



<br>



#### [OPEN IMAGE](http://sasi-kala.com/assets/posts_img/9_HTTP_Message_Format.jpg)

![img](http://sasi-kala.com/assets/posts_img/9_HTTP_Message_Format.jpg)



<br>



## What is [cURL ?](https://www.keycdn.com/support/popular-curl-examples#what-is-curl)

[cURL](https://curl.haxx.se/), short for “**Client for URLs**”, is a **command line tool** **for transferring data** using various protocols.

There are a vast amount of use-cases for cURL such as:

- FTP upload,
- Proxy support,
- SSL connections,
- HTTP post, etc…

  



#### Example 1 - 

Creating a GET request

```bash
curl -i -H "Accept: text/html" https://www.google.com/
```



#### Example 2 - 

Creating a request - VERBOSE with step by step information

```bash
curl -v -H "Accept: text/html" https://www.google.com/
```





#### Example 2 - 

Creating a non-allowed POST request - VERBOSE with step by step information

```bash
curl -v --request POST https://www.keycdn.com/
```



Returns a response with status **405 - Method Not Allowed**



<br>



Applications request many things from the servers:

1. Request the initial HTML code
2. Request the CSS file
3. Request any images (each file is a separate request)
4. Request any JavaScript files (file is a separate request)
5. Request any font files (again, each one its own request)







## HTTP Verbs

HTTP Verbs specify the action which client is requesting to be performed by the server.



Most common request verbs are:

- **POST**: create a new resource. POST requests usually carry a payload that specifies the data for the new resource.

- **GET**: fetch an existing resource. The URL contains all the necessary information the server needs to locate and return the resource.
- **PUT**: update an existing resource.  Replaces all current representations of the target resource with the request payload.
- **PATCH**:  is used to apply only partial modifications to a resource, without replacing it fully.
- **DELETE**: delete an existing resource.





<br>





### DNS

Every computer connected to the Internet has an **IP address**. 

IP address is like a street addresses for each computer/ machine.



The **Domain Name System**, or **DNS** for short,allows us to use domain names.

**DNS** is a system of online directories/ servers that hold IP addresses for the IP addresses that they belong to. 

**DNS** is simply a  **phone book/registry of IP addresses**.



<br>



### **DNS protocol** 

DNS protocol - step by step:



1. We enter domain name in browser
2. your browser will ask your **local resolving name server** (typically your ISP (Internet Service Provider))  if they have the DNS records for that domain cached.

3. If it has the IP for that domain cached it will give browser the IP address.
4. Otherwise the **resolving name server** queries root name servers, which points you to the Top Level Domain servers, which will point you to the provider authoritative for hosting the records.



<br>



##  Chrome DevTools’ Network tab

Open the  [amazon.com](<https://www.amazon.com/>)  in your Chrome Browser and then open the Dev Tools `Network` Tab to see the network requests happening during the load of the page.





## Additional Resources 

### [Submarine Cable Map Website](https://www.submarinecablemap.com/)

### [What is DNS ? - Video](https://www.cloudflare.com/learning/dns/what-is-dns/)

### [DNS Explained](<https://www.youtube.com/watch?v=72snZctFFtA>)

### [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

### [The SSL or TLS handshake](<https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_7.1.0/com.ibm.mq.doc/sy10660_.htm>)