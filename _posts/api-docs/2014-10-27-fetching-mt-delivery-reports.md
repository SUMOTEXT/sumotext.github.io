---
layout: page
title:  "Fetching MT Delivery Reports"
categories: docs
permalink: /fetching-mt-delivery-report/
data: fetch-mt
weight: 5
---

Fetching MT Delivery Reports
========

You may receive a delivery report for an MT that was sent through the Sumotext API. This report indicates if the message corresponding to `smsid` was successfully delivered, and if it wasn't, gives a reason why.

### URL
<pre class="code"><code>https://mosms.sumotext.com/secure/sumoReport.aspx?</code></pre>

### Request Parameters
Param | Description
--- | --- 
`smsid` | Unique smsid returned when sending the MT.
`shortcode` | Short code used.

### Sample Request
<pre class="code"><code>GET /secure/sumoReport.aspx?<span>smsid</span>=ACAEEBE7-DFC3-4837-8E49-AAEB04D6E9E0&<span>shortcode</span>=74700 HTTP/1.0
Host: mosms.sumotext.com
</code></pre>

### Response Fields
The response data comes as a string delimited by a ':' (colon). 
<pre class="code"><code>{smsid}:{sent-status}:{true/false message}</code></pre>

Field | Description
--- | --- 
`smsid` | Unique ID for the SMS
`sent-status` | TRUE if sent, FALSE otherwise
`true/false message` | Message describing the sent status

The first line of the response contains this string. You may ignore the lines that follow (they contain the html markup that would call this method from a browser).

### Error Response

If your message didn't send, your response will come in the form
<pre class="code"><code>{smsid}:FALSE:{false message}</code></pre>

If the smsid is not found, your response will be
<pre class="code"><code>{smsid}:NOTFOUND:[single space char]</code></pre>

NOTE: There is a single space character after the second colon. 

####True Messages
* Sent by Sumotext to Aggregator.
* Message successfully delivered to handset.
* Message successfully sent to carrier.

####False Messages
* Failed. We are unable to delier this message.
* Not Delivered, Billing failed, Billing.
* Not Delivered, Invalid destination, Destination permanent.
* Not Delivered, Invalid source address, Source.
* Not Delivered, No Information, No information.
* Not Delivered, System failure, System failure.
* EXPIRED: We are unable to deliver this message.
* FAIL: We are unable to deliver this message.
* FAILED: We were unable to send this to aggregator.
* UNDELIV: We are unable to deliver this message.
