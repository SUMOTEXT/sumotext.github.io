---
layout: page
title:  "CRM API Callback"
categories: docs
permalink: /receiving-post-data/
weight: 7
data: receive-post
---

CRM API Callback
=====
> Integrate Sumotext events with your web service.

###Summary

Sumotext provides a generic tactic for integrating Sumotext events with web services that clients publish and control. This allows clients to utilize our online campaign tools without having to give us access to their databases.

Sumotext collects data in 3 ways:

1. *SMS Sticky Sessions* - Sumotext saves user response e.g. "Please reply with your email address!"
2. *SMS Polls* - e.g. "Reply A (red) or B (blue)."
3. *Web Forms* - submitted via browsers

Sumotext can be cinfigured to automatically post to a web service when these events fire.

###Receiving Post Data (API Callbacks)
The Sumotext platform can be configured to send your web server an HTTP request when these events are triggered. Follow the directions below to tell Sumotext where to point the HTTP calls:

1. Log in at [sumotext.com](sumotext.com).
2. Go to the Settings tab.
3. Go to the Web Form settings tab.
4. Click "Edit Post CRM".
5. Check the "Post" checkbox.
6. Configure the Post parameters that Sumotext will POST

#####Sumotext will always post these 5 parameters first

* `country`
* `short code`
* `key`
* `mobile`
* `carrierId`

#####Example
```
http://www.yourdomain.com/Post.aspx?country=USA&shortcode=84700&key=SOMEKEY&mobile=2125551212&carrierId=VERIZONUS&Name=Bill&DOB=1/1/2000&Zip=10024
```

In this example, the client had their settings configured to Post the additional fields for Name, DOB, and Zip as parameters.

###SMS Polls
When a user responds to a Poll campaign-mode, the response can be Posted to your web service. To register your web server to receive a POST for this event...

1. Log in at sumotext.com.
2. Go to the Campaign Modes tab.
3. Go to the "Poll" tab.
4. Click "Edit Post CRM".
5. Check the "Post" checkbox.
6. Configure the Post parameters that Sumotext will POST

For voting, there will always be 6 parameters:

#####Parameters
Param | Description
----|----
mobile | Number to send MT to
carrier | Carrier code
shortcode | Short code
key | Keyword
reply | User response (“A” for example)
label | Response label (for example, “Tampa”)

##### Example
```
http://www.yourdomain.com/sumotext.aspx?mobile=2125551212&carrier=VERIZONUS&shortcode=84700&key=FB1&reply=A&city=Tampa
```

###Text-4-Info
When a user texts a Text-4-Info keyword, their message can be posted to your web service. To register your web server to receive a POST for this event...

1. Log in at sumotext.com.
2. Go to the Campaign Modes tab.
3. Go to the "Text-4-Info" tab.
4. Add your server url to the "Server" field.

#####Parameters
Param | Description
----|----
lead | Keyword, unless otherwise specified
mobile | Number of MO Device
msg | Text of MO

#####Example
```
http://www.yourserver.com/yourpage.aspx?lead=keyword&&mobile=2125551212&msg=ServerMsg
```
