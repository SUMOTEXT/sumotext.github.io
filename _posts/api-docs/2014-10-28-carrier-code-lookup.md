---
layout: page
title:  "Carrier Lookup"
categories: docs
permalink: /carrier-code-lookup/
---

Carrier Lookup
======

#### URL
    https://api.sumotext.com/api/sumolookup/lookup

#### Parameters

Parameter | Description
---- | ----
apikey | Your api key.
mobile | The mobile number you are trying to lookup carrier for.

#### Post Body and Querystring examples

**json**

    {
        "apikey":"[apikey]",
        "mobile":"[mobile]"
    }

**xml**

    <?xml version="1.0"?>
    <smoLookupParser>
        <apikey>[apikey]</apikey>
        <mobile>[mobile]</mobile>
    </smoLookupParser>

**querystring**

    ?apikey=[apikey]&mobile=[mobile]

#### Http POST return

Carrier Lookup POST will return the Mobile Number, the Carrier, and an Error Object.

**json**

    {
        "MobileNumber":"4807345077",
        "Carrier":"VERIZONUS",
        "Err": {
            "ErrNum":0,
            "ErrMessage":""
        }
    }

**xml**

    <smoLookup.smoLookupRetrun xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SumotextApi">
    <MobileNumber>4807345077</MobileNumber>
        <Carrier>VERIZONUS</Carrier>
        <Err>
            <ErrMessage></ErrMessage>
            <ErrNum>ErrNoErr</ErrNum>
        </Err>
    </smoLookup.smoLookupRetrun>

The Error object will report No Error when a post is successful. The following Errors are currently coded for, others may be added.

ErrNum | ErrMessage
---- | ----
624 | The current Api Key [apikey] does not have permission to Lookup Carrier Information
256 | The current Api Key [apikey] does not exist

