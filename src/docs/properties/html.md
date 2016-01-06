---
title: Html
type: properties
---

```php
<?php

/**
 * Example of html.
 */

papi_property( [
  'title'    => 'Information',
  'type'     => 'html',
  'settings' => [
    'html' => '<p>Hello, world</p>'
  ]
] )

/**
 * Example output.
 * The html property does not save any values.
 */
```

### Description

The property output custom html row on the page type in WordPress admin.

### Settings

Key  | Default      | Description
-----|--------------|----------------------------------------------------------
html | empty string | String with html or a callable function or method.
