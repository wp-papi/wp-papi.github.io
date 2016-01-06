---
title: Dropdown
type: properties
---

```php
<?php

/**
 * Example of select.
 */

papi_property( [
  'title'    => 'Dropdown',
  'slug'     => 'my_dropdown_slug',
  'type'     => 'dropdown',
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

string '#ffffff'
```

### Description

With this property you can add a dropdown. The key is the value that the user will se in the WordPress admin and the value is the value saved in the database.

### Settings

Key           | Default            | Description
--------------|--------------------|-------------------------------------------------
items         | array              | Array with options, value or key/value
placeholder   | empty string       | Placeholder text that's displayed when no option is slected.
selected      | empty string       | The select item that will be selected from start. The value should match a key of your items
select2       | true               | If true Select2 will be used, if false the native browser dropdown will be used. (since 2.2.0)
