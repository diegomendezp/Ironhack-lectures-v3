### Client-Server Architecture

All the devices connected to the Internet are either **servers** or **clients**.





- A **server** is a device that has **content & functionality available and serves it .**

  

- A **client** is a device that **accesses the content & functionality** from a *server*. 





To be a server your computer would need to be **turned on**, **awake** and have **Internet literally all the time**. Not very practical for our personal computers.

**Servers**, however, are exactly that: computers that are always turned on, awake and connected to the Internet so that users can connect to them.





**Clients** have to ask the servers for what they want. 

Resources have to be **requested** from the server.



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_52990f8d31567a1abd048415fdeedc90.png)





![img](https://www.w3schools.in/wp-content/uploads/2019/01/client-server.jpg)







# HTTP

### **H**yper**t**ext **T**ransfer **P**rotocol

### It is a **TCP/IP** based protocol

 (**TCP** - transmission control protocol, **IP** - internet protocol)



#### 1. HTTP is a connectionless protocol. 

#### After making the request the client disconnects from the server.

####  When the response is ready the server re-establishes the connection again and sends the response.



#### 2. HTTP can be used to deliver any data as long as two computers are able to read it.







## The Request / Response cycle

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1bb24dbaf887dc70fc219c20988d7c39.png)





### Request -response cycle - Step by step:

1. Connection establishes
2. Client sends a **request** (aka HTTP message)
3. Server gets the request and disconnects from the client
4. Server processes the request and prepares the response
5. Server establishes the connection again and sends back the **response** (HTTP message)
6. Then the connection disconnects



### HTTP message

Consists of : 

1. **Start Line** 
2. **Headers**
3. **Body**

#### They all contain plain text information, except that body can also contain binary data.

![img](http://sasi-kala.com/assets/posts_img/9_HTTP_Message_Format.jpg)





## What is cURL?[#](https://www.keycdn.com/support/popular-curl-examples#what-is-curl)

[cURL](https://curl.haxx.se/), short for “Client for URLs”, is a command line tool for transferring data using various protocols.

There are a vast amount of use-cases for cURL such as:

- FTP upload,
- Proxy support,
- SSL connections,
- HTTP post, etc…
- 



#### Example 1 - 

Creating a GET request

```bash
curl -i -H "Accept: text/html" https://www.google.com/
```



#### Example 2 - 

Creating a request - VERBOSE with step by step information

```bash
curl -i -H "Accept: text/html" https://www.google.com/
```





#### Example 2 - 

Creating a non-allowed POST request - VERBOSE with step by step information

```bash
curl -v --request POST https://www.keycdn.com/
```







Applications request many things from the servers:

1. Request the initial HTML code
2. Request the CSS file
3. Request any images (each file is a separate request)
4. Request any JavaScript files (file is a separate request)
5. Request any font files (again, each one its own request)







## HTTP Verbs

HTTP Verbs specify the action which client is requesting to be performed by the server.



These request verbs are:

- **GET**: fetch an existing resource. The URL contains all the necessary information the server needs to locate and return the resource.
- **POST**: create a new resource. POST requests usually carry a payload that specifies the data for the new resource.
- **PUT**: update an existing resource. The payload may contain the updated data for the resource.
- **DELETE**: delete an existing resource.





### DNS

Every computer connected to the Internet has an **IP address**. 

Think of IP addresses like the street addresses for each computer/ machine.

The **Domain Name System**, or **DNS** for short,allows us to use domain names.

**DNS** is a system of online directories/ servers that hold IP addresses for the IP addresses that they belong to. A phone book of IP addresses.





**DNS protocol** step by step:



1. We enter domain name in browser
2. your browser will ask your **local resolving name server** (typically your ISP (Internet Service Provider))  if they have the DNS records for that domain cached.

3. If it has the IP for that domain cached it will give browser the IP address.
4. Otherwise the **resolving name server** queries root name servers, which points you to the Top Level Domain serveresssssssssssss, which will point you to the provider authoritative for hosting the records.





##  Chrome DevTools’ Network tab

Open the  [amazon.com](<https://www.amazon.com/>)  and the Chrome Dev Tools Network Tab to see the network requests happening during the load of the page.





## Additional Resources 

### [DNS Explained](<https://www.youtube.com/watch?v=72snZctFFtA>)

### [The SSL or TLS handshake](<https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_7.1.0/com.ibm.mq.doc/sy10660_.htm>)