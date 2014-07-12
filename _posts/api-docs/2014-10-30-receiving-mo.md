---
layout: page
title:  "Receiving a Mobile Originated (MO) Message"
categories: docs
permalink: /receive-mo/
weight: 2
data: receive-mo
---

Receiving a Mobile Originated (MO) Message
=======

The SUMOTEXT online self-service campaign management tools are typically used to configure what happens when a user sends a text message to your short code.
However, our platform and tools can be bypassed and your dedicated short code can be configured to instead forward 'some' or 'all' mobile originated (MO) messages directly to your server for you to respond based on your own business rules, logic, and data sources.

NOTE: This is different from the section that deals with '[CRM API Callback]({% post_url api-docs/2014-10-25-receiving-post-data %})' which is used to alert your service when the SUMOTEXT platform has collected an opt-in, opt-out, or a new profile element for a subscriber such as an email address.

 If you would like to bypass our platform and tools and receive 'some' or 'all' mobile originated (MO) messages directly to your server, please provide your account manager the the appropriate URL to register in our system. This can be HTTP or HTTPS. We strongly reccomend HTTPS.

### HTTP Method - `GET`

### Example Callback URL
<pre class="code"><code>https://www.yourserver.com/your-endpoint</code></pre>

### Parameters
Param | Description
--- | --- 
`mobile` | Mobile number SMS originated from. 
`carrier` | Carrier code for Mobile Number.
`smsid` | Unique SMS identifier
`shortcode` | Short code used.
`key` | The keyword where the message is logged.
`msg` | Complete message sent.

##Example

The HTTP GET will be a fully formed URL with 6 query string parameters:

<pre class="code"><code>https://www.yourserver.com/your-endpoint?<span>mobile</span>=2125551212&<span>carrier</span>=VERIZONUS&<span>smsid</span>=2xgh679okl34x&<span>shortcode</span>=84700&<span>key</span>=SUMOX&<span>msg</span>=have a nice day</code></pre>