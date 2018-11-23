---
title: Number
---

```php
<?php

/**
 * Example of number.
 */

papi_property( [
  'title' => 'Number',
  'slug'  => 'my_number_slug',
  'type'  => 'number',
  'settings' => [
    'step' => 1,
    'min' => 0,
    'max' => 200,
  ]
] )

/**
 * Example output.
 */

int 10
```

### Description

The number property is the HTML5 number input field. No custom validation exists only the browsers validation will kick in. The value is saved as a string and the output is a string.

### Settings

Key           | Default            | Description
--------------|--------------------|-------------------------------------------------
step          | "any" or int or float  | Limit the increments at which a numeric value can be set
min           | int or float       | Minimum value
max           | int or float      | Maximum value
