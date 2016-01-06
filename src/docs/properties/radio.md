---
title: Radio
type: properties
---

```php
<?php

/**
 * Example of radio buttons.
 */

papi_property( [
  'title'    => 'Colors',
  'slug'     => 'my_radio_slug',
  'type'     => 'radio',
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

With this property you can create a list of radio buttons. The key is the value that the user will se in the WordPress admin and the value is the value saved in the database.

### Settings

Key      | Default      | Description
---------|--------------|-------------------------------------------------------
items    | array        | Array with radio buttons, value or key/value
selected | empty string | The radio button that will be selected from start. The value should match a key of your items
