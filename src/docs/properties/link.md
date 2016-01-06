---
title: Link
type: properties
---

```php
<?php

/**
 * Example of link.
 */

papi_property( [
  'title' => 'Link',
  'type'  => 'link'
] )

/**
 * Example output.
 */

object(stdClass)#4533 (3) {
  ["post_id"]=>
  int 0
  ["url"]=>
  string(12) "http://wordpress.org"
  ["title"]=>
  string(2) "DN"
  ["target"]=>
  string(0) ""
}
```

### Description

Create a link using the editors link modal window.

**Since 2.4.0** it will add `post_id` if it's a internal link to output object.

### Settings

No settings exists.
