---
title: User
type: properties
---

```php
<?php

/**
 * Example of user.
 */

papi_property( [
  'title'    => 'User',
  'slug'     => 'my_user_slug',
  'type'     => 'user'
] )

/**
 * Example output.
 */

object( WP_User )//327 (7) {
  ["data"]=>
  object( stdClass )//323 (10) {
    ["ID"]=>
    string( 1 ) "1"
    ["user_login"]=>
    string( 5 ) "admin"
    ["user_pass"]=>
    string( 34 ) ""
    ["user_nicename"]=>
    string( 5 ) "admin"
    ["user_email"]=>
    string( 24 ) "admin@wordpress.local"
    ["user_url"]=>
    string( 0 ) ""
    ["user_registered"]=>
    string( 19 ) "2015-04-19 12:27:23"
    ["user_activation_key"]=>
    string( 0 ) ""
    ["user_status"]=>
    string( 1 ) "0"
    ["display_name"]=>
    string( 14 ) "Admin Test"
  }
  ["ID"]=>
  int( 1 )
  ["caps"]=>
  array( 1 ) {
    ["administrator"]=>
    bool( true )
  }
  ["cap_key"]=>
  string( 15 ) "wp_capabilities"
  ["roles"]=>
  array( 1 ) {
    [0]=>
    string( 13 ) "administrator"
  }
  ["allcaps"]=>
  array( 64 ) {}
  ["filter"]=>
  NULL
}
```

### Description

With this property you can add reference to a user.

### Settings

Key           | Default       | Description
--------------|---------------|--------------------------------------------------
capabilities  | []            | Specify capabilites or "current user can", if false all capabilities will be used.
select2       | true          | If true Select2 will be used, if false the native browser dropdown will be used.
