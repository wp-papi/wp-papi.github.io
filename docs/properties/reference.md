---
title: Reference
---

```php
<?php

/**
 * Example of reference.
 */

papi_property( [
  'title'    => 'References',
  'type'     => 'reference',
  'settings' => [
    'slug'      => 'top_module',
    'page_type' => 'start-page-type'
  ]
] )
```

### Description

When using Post or Relationship property to load modules or something like that.
You may want to check which pages are loading the module. This is where the reference property comes in hand,
it will show which pages that has a reference to the module.

![Reference example](/img/docs/property-reference.png)

### Settings

Key       | Default      | Description
----------|--------------|-------------------------------------------------------
slug      | array        | String or array of slugs to look for references
page_type | empty string | String or array of page types (the file name of the page type) to check
