---
layout: page
title:  "Sending a Mobile Terminated (MT) Message"
categories: docs
permalink: /send-mt/
data: send-mt
weight: 3
---

# Sending an MT

In order to use the SUMOTEXT API to send an MT, your server's IP Address and your SUMOTEXT API Key must be registered in the SUMOTEXT API Database and tied to a specific account and dedicated short code. All clients can send messages from inside our online campaign management tools. However, if you have a dedicated short code, you are free to send messages from your own internal system via this API.

When you want to send an MT text message from your own system, SUMOTEXT will provide a dedicated HTTPS URL. Use HTTP GET with 6 query string parameters. Parameter names are case sensitive and all lower case.

#### URL
    https://api.sumotext.com/api/sumopost/post	

#### Parameters

Parameter | Description
----- | -----
apikey | SUMOTEXT API key
mobile | Number to send MT to.
carrier | Carrier code for Mobile Number.
shortcode | Short code used.
key | Keyword, may be specific or default.
msg | Message to be sent.

All parameter and key names are case sensitive, use all lower case for all key names

#### Post Body and Querystring examples

**xml**

    <?xml version="1.0"?>
    <smoMt>
        <apikey>[apikey]</apikey>
        <shortcode>[short code]</shortcode>
        <key>[keyword]</key>
        <mobile>[mobile number]</mobile>
        <carrier>[carrier code]</carrier>
        <msg>[This is where the message goes]</msg>
    </smoMt>

**json**

    {
        "apikey":"[apikey]",
        "shortcode":"[shotcode]",
        "key":"key",
        "mobile":"[mobile number]",
        "carrier":"[carrier code]",
        "msg":"[This is where the message goes ]"
    }

**querystring**

    ?apikey=[apikey]&mobile=[mobile number]&carrier=[carrier code]&shortcode=[shortcode]&key=[key]&msg=[This is where the message goes]

#### Http POST return

Each post will return the SUMOTEXT ID for that MT and an Error Object.

**json**

    {
        "sumoId":"8CB2C254-90DD-45C3-A60F-0FA55D1B9C40",
        "Err":
            {
                "ErrNum":0,
                "ErrMessage":""
            }
    }

**xml**

    <smoPostReturn xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SumotextApi">
        <sumoId>8CE1AB33-5484-4270-B646-B235A28C7483</sumoId>
            <Err>			
                <ErrNum>0</ErrNum>
                <ErrMessage></ErrMessage>
            </Err>
    </smoPostReturn>

The Error object will report No Error when a post is successful. The Following Errors are currently coded for, others may be added

ErrNum | ErrMessage
---- | ----
9 | The Carrier for this Mobile Number [mobile] was not supplied in post.
26 | The Current Account [account] is not Active.
27 | The Mobile Number [mobile] is not Opted In.
28 | The ip address [ip] could not be found for this Api Key
128 | The current Api Key [apikey] does not have permission to Send an MT
258 | The current Api Key [apikey] does not exist