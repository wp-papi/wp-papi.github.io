---
title: Checkbox
---

```php
<?php

/**
 * Example of checkbox.
 */

papi_property( [
  'title'    => 'Categories',
  'slug'     => 'my_categories_slug',
  'type'     => 'checkbox',
  'settings' => [
    'items' => [
      'White' => '#ffffff',
      'Black' => '#000000'
    ]
  ]
] )

/**
 * Example output.
 */

array
(
  [0] => '#ffffff'
)
```

### Description

With this property you can add multiple checkboxes. The key is the value that the user will se in the WordPress admin and the value is the value saved in the database.

### Settings

Key      | Default | Description
---------|---------|------------------------------------------------------------
items    | array   | Array with checkboxes, value or key/value
selected | array   | The seleceted key or array of keys
