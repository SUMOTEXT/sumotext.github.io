---
layout: page
title:  "Making a POST"
categories: docs
permalink: /making-a-post/
---

Making A POST
=============

### 3 options for POSTing to the SUMOTEXT API

- xml
- json
- querystring

### The Http Request Header properties
The Content-Type and Accept header properties are required.

### Http Content-Type property

The table shows the value of the Content-Type header property for each type of data, and for each method.

Type  | Sending MT | Carrier Lookup
------------- | ------------- | -------
xml  | application/xml/mt | application/xml
json  | application/json/mt | application/json
querystring | application/string/mt | application/string

### Http Accept property

The Http Request may return xml or json. The Accept property chooses this for you.

Return Type desired | Accept property value
------ | ------
xml | application/xml
json | application/json

### Content Tag

In your postbody, if you are using xml then precede the data with "xml=" like this: "xml=[postbody]". If you are using json, precede the data with "json=".
