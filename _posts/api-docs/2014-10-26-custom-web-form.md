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

When a SUMOTEXT client wants to initiate an opt-in (and collect profile data) from the client's own web form, they will post an HTTPGET request (in an HTML form) to the following URL with ALL 15 query string parameters. 

### Parameters
Param | Description
--- | --- 
`shortcode` | Short code used.
`key` | Should reflect the keyword being used.
`phone` | The mobile number opting in.
`txt1` | Profile data field that matches the web form in the Sumotext online tools.
`txt2` to `txt11` | Up to 11 form fields for profile data. Fields not used should be left blank.

### Example HTML Form

The following HTML form will properly form the GET querystring for submitting an opt-in from a custom web form. Note: For `txt#` fields that you're not using, set the `txt#` input fields to `type="hidden"` so that they're included in the querystring, but not shown to the user. 

<pre class="code">&lt;form action=&quot;http://mosms.sumotext.com/mOptinMO.aspx?&quot; method=&quot;GET&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;Shortcode: &lt;input type=&quot;text&quot; name=&quot;<span>shortcode</span>&quot; /&gt;&lt;br /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;Key: &lt;input type=&quot;text&quot; name=&quot;<span>key</span>&quot; /&gt;&lt;br /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;Phone: &lt;input type=&quot;text&quot; name=&quot;<span>phone</span>&quot; /&gt;&lt;br /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;Custom parameter: &lt;input type=&quot;text&quot; name=&quot;<span>txt1</span>&quot; /&gt;&lt;br /&gt;
&lt;!-- set the remaining 'txt#' fields to 'type=&quot;hidden&quot;' and a blank value so that their params are still included in the GET --&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt2</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt3</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt4</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt5</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt6</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt7</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt8</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt9</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt10</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;hidden&quot; name=&quot;<span>txt11</span>&quot; value=&quot;&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;
&lt;/form&gt;</pre>

### Sample HTTP Call
To show what the HTTP request looks like:
<pre class="code"><code>GET /mOptinMO.aspx?<span>country</span>=USA&<span>shortcode</span>=69872&<span>key</span>=SUMO&<span>phone</span>=5012474110&<span>txt1</span>=custom+data&<span>txt2</span>=&<span>txt3</span>=&<span>txt4</span>=&<span>txt5</span>=&<span>txt6</span>=&<span>txt7</span>=&<span>txt8</span>=<span>txt9</span>=&<span>txt10</span>=&<span>txt11</span>= HTTP/1.0
Host: mosms.sumotext.com</code></pre>
