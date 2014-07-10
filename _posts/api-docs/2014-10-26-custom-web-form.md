---
layout: page
title:  "Custom Web Form"
categories: docs
permalink: /custom-web-form/
weight: 6
data: custom-form
---

Custom Web Form
========
> Initiate an opt-in from your own web form.

When a SUMOTEXT client wants to initiate an opt-in (and collect profile data) from the client's own web form, they will post an HTTPGET request to the following URL with ALL 15 query string parameters.

### HTTP Method - `GET`

### Request

<pre><code>Host: mosms.sumotext.com
GET /mOptinMO.aspx?country=USA&shortcode=69872&key=SUMO&phone=5012474110&txt1=??&txt2=??&txt3=??&txt4=??&txt5=??&txt6=??&txt7=??&txt8=??txt9=??&txt10=??&txt11=?? HTTP/1.0
</code></pre>

### Parameters
Param | Description
--- | --- 
`shortcode` | Short code used.
`key` | Should reflect the keyword being used.
`phone` | The mobile number opting in.
`txt1` | Profile data field that matches the web form in the Sumotext online tools.
`txt2` to `txt11` | Up to 11 form fields for profile data. Fields not used should be left blank.

###Example

Set up an HTML form like the following to perform an HTTP GET to `http://mosms.sumotext.com/mOptinMO.aspx?` with the appropriate parameters. For the 'txt#' parameters, set the `type` to `= hidden` and an empty `value`. This way, those parameters are still included in the GET request, but don't show up to the user in the form.
{% gist cbsm1th/83e2417a411b84286ca0 %}

