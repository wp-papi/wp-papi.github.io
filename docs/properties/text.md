---
title: Text
---

```php
<?php

/**
 * Example of text.
 */

papi_property( [
  'title' => 'Text',
  'slug'  => 'my_text_slug',
  'type'  => 'text',
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

This property will output the textarea tag and the output will be a string with all text from the textarea.

### Settings

Key        | Default | Description
-----------|---------|------------------------------------------------------------
allow_html | false   | Allow HTML in textarea
nl2br      | true    | Inserts HTML line breaks before all newlines in a string `since 3.0.0`
