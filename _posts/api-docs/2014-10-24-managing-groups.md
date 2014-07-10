---
layout: page
title:  "Managing Groups"
categories: docs
permalink: /managing-groups/
data: managing-groups
weight: 8
---

Managing Groups
=====
> Manage subscribers and groups.

The client can manage their groups through the Sumotext API. A client can perform the following actions:

clear a group of its members, delete a group and its members, add a group to a keyword, and add a member to a group.

Action | Description
----- | -----
`add` | Add a new group (named `{group}`) to a keyword
`delete` | Delete a group and its members
`clear` | Clear a group of its members
`addmember` | Add a member (member corresponds to their `{mobile}`)

### HTTP Method - `GET`

### URL
```
http://mosms.sumotext.com/secure/sumoGroup.aspx?
```

#### Request Parameters
Params | Description
----|----
`country` | Country associated with shortcode
`shortcode` | Short code being used
`key` | Keyword being used
`group` | Name of the group to manage
`action` | Add, delete, clear, or adddmember
`mobile` | Mobile number of subscriber to add to group [Optional: may be left blank]

#### Response Type - `string`
#### Successful Response
Response | Example | Description
--- | --- | ---
`Action {action} OK` | Action Add OK | Action was successfully applied.


#### Error Responses
Response | Description
--- | --- 
`NOTIP` | IP adress making the API call not registered with Sumotext.
`Action {action} Error: [Error Descrioption]` | Error performing the action on the group.

