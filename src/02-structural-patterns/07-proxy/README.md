# Proxy

## Real world example

> Have you ever used an access card to go through a door? There are multiple options to open that door i.e. it can be opened either using access card or by pressing a button that bypasses the security. The door's main functionality is to open but there is a proxy added on top of it to add some functionality.

## In plain words

> Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

## When to use?

There are dozens of ways to utilize the Proxy pattern. Let’s go over the most popular uses.

### **Lazy initialization (virtual proxy):**
This is when you have a heavyweight service object that wastes system resources by being always up, even though you only need it from time to time.
> Instead of creating the object when the app launches, you can delay the object’s initialization to a time when it’s really needed.

### **Access control (protection proxy):**
This is when you want only specific clients to be able to use the service object; for instance, when your objects are crucial parts of an operating system and clients are various launched applications (including malicious ones).
> The proxy can pass the request to the service object only if the client’s credentials match some criteria.

### **Local execution of a remote service (remote proxy):**
This is when the service object is located on a remote server.
> In this case, the proxy passes the client request over the network, handling all of the nasty details of working with the network.

### **Logging requests (logging proxy):**
This is when you want to keep a history of requests to the service object.
>  The proxy can log each request before passing it to the service.

### **Caching request results (caching proxy):**
This is when you need to cache results of client requests and manage the life cycle of this cache, especially if results are quite large.
>  The proxy can implement caching for recurring requests that always yield the same results. The proxy may use the parameters of requests as the cache keys.

### **Smart reference:**
This is when you need to be able to dismiss a heavyweight object once there are no clients that use it.
>  The proxy can keep track of clients that obtained a reference to the service object or its results. From time to time, the proxy may go over the clients and check whether they are still active. If the client list gets empty, the proxy might dismiss the service object and free the underlying system resources.