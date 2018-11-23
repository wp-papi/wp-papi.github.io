---
title: String
---

```php
<?php

/**
 * Example of string.
 */

papi_property( [
  'title' => 'Name',
  'slug'  => 'my_name_slug',
  'type'  => 'string'
  'settings' => [
    'allow_html' => true
  ]
] )

/**
 * Example output.
 */

string 'Fredrik'
```

### Description

The string property is just a text input field. The value is saved as a string and the output is a string.

### Settings

Key        | Default | Description
-----------|---------|------------------------------------------------------------
allow_html | false   | Allow HTML in text input field
