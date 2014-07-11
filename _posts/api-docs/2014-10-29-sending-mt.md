---
layout: page
title:  "Sending a Mobile Terminated (MT) Message"
categories: docs
permalink: /send-mt/
data: send-mt
weight: 3
---

#Sending a Mobile Terminated (MT) Message

In order to use the SUMOTEXT API to send an MT, your server‘s IP Address must be registered in the SUMOTEXT API Database and tied to a specific account and dedicated short code.
All clients can send messages from inside our online campaign management tools.
However, if you have a dedicated short code, you are free to send messages from your own internal system via this API.

When you want to send an MT text message from your own system, SUMOTEXT will provide a dedicated HTTPS URL. Use HTTP GET with 5 query string parameters. Parameter names are case sensitive and all lower case.

###URL
<pre class="code"><code>https://mosms.sumotext.com/secure/sumoSend.aspx?</code></pre>

### Request Parameters
Param | Description
--- | --- 
`mobile` | Number to send MT to. 
`carrier` | Carrier code for Mobile Number.
`shortcode` | Short code used.
`key` | Keyword, may be specific or default.
`msg` | Message to be sent.

### Sample Request

<pre class="code"><code>GET /secure/sumoSend.aspx?<span >mobile</span>=5015551234&&<span>carrier</span>=ATTUS&<span>shortcode</span>=74700&<span>key</span>=SUMO&<span>msg</span>=hello HTTP/1.0
Host: mosms.sumotext.com
</code></pre>

### Sample Response
<pre class="code"><code>HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

2125551212:ACAEEBE7-DFC3-4837-8E49-AAEB04D6E9E0
</code></pre>

### Response Fields
The response data comes as a string delimited by a ':' (colon). 
<pre class="code"><code>{mobile}:{smsid}</code></pre>

Field | Description
--- | --- 
`mobile` | Mobile number you sent MT to
`smsid` | Unique ID for the SMS

The first line of the response contains this string. You may ignore the lines that follow (they contain the html markup that would call this method from a browser).

###Error Response
If there is an error, the second piece of data contains an error message instead:
<pre class="code"><code>{mobile}:{error-message}</code></pre>

### Error Messages
Message | Description
--- | ---
`NOTIP` | IP address not registered.
`NOTOPT` | Mobile number is in the system, but the subscriber is not opted into the Keyword.
`NOTFOUND` | Mobile Number is either not in the sysem or not in the Keyword.

