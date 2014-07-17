---
layout: page
title:  "Carrier Code Lookup"
categories: docs
permalink: /carrier-code-lookup/
---

Carrier Code Lookup
======

There is a $0.005 charge to look up a mobile number's carrier code. View [Appendix A](https://github.com/SUMOTEXT/Sumotext-API-Guide/blob/master/api-docs/appendices/appendix-a.md) for a list of all carrier codes.

### URL
<pre class="code"><code>http://mosms.sumotext.com/secure/sumoLookup.aspx?</code></pre>
### HTTP Method - `GET`

### Request Parameters
Param | Description
--- | --- 
`mobile` | Number to look up carrier for.
`shortcode` | Short code used.

### Sample Request

<pre class="code"><code>GET /secure/sumoLookup.aspx?<span>mobile</span>=5015551234&<span>shortcode</span>=74700 HTTP/1.0
Host: mosms.sumotext.com
</code></pre>

### Sample Response
<pre class="code"><code>HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

ATTUS
</code></pre>

### Response Fields
The response data comes as a string. 
<pre class="code"><code>{carrier_code}</code></pre>

Field | Description
--- | --- 
`carrier_code` | Carrier code corresponding to the user's cellular carrier.

See [appendix a](https://github.com/SUMOTEXT/Sumotext-API-Guide/blob/master/api-docs/appendices/appendix-a.md) for a list of carrier codes.

The first line of the response contains this string. You may ignore the lines that follow (they contain the html markup that would call this method from a browser).

###Error Response
If there is an error, the response will be a string containing an error message.
<pre class="code"><code>{error_message}</code></pre>

###Error Messages
Message | Description
--- | --- 
`IP NOT REGISTERED` | IP address not registered.
`ERROR CARRIER NOT FOUND FOR: {mobile}` | The carrier information for this number could not be found.
