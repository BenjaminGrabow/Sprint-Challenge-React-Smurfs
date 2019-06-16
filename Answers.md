1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-Side Routing
Request information from a server -> server sends back document that was requested. We click on a link -> URL changes to match the request ->  server goes and finds a template or some html file and sends it back across the world wide web to deliver that content to the user.
server refresh the site we are looking at because of new request was made for information and the information given was a bunch of DOM elements, we have to re-paint the web page. Only requested information will be given -> fast loading .
negative to this, is when we have a lot of information being requested. Process has to run through a lot of protocols -> slow loading.

Client-Side Routing
 modern routing: One of new patterns is using JavaScript to maintain State or memory within our applications and use that memory to tell the Browser what to display when a resource is requested.
When Routing is handled internally by the JavaScript that is already on the page we achieve what is known as Client-side routing . Positive effect: page won’t refresh! The data is just there, displayed when we ask for it. When user clicks on a requested resource ->  get the resource (state) that is already available to us rendered out and when using react, this happens through Component-Based Architecture.


1.  What does HTTP stand for?

HTTP means HyperText Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

1.  What does CRUD stand for?

Within computer programming, the acronym CRUD stands for create, read, update and delete. ... Most applications have some form of CRUD functionality. In fact, every programmer has had to deal with CRUD at some point. Not to mention, a CRUD application is one that utilizes forms to retrieve and return data from a database.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

get, post, delete, put, head, connect, options, trace, patch.

1.  Mention three tools we can use to make AJAX requests

1: jQuery $.ajax
2: Fetch API
3: Superagent
4: Axios
5: Request