---
title: Url
---

```php
<?php

/**
 * Example of url.
 */

papi_property( [
  'title'    => 'Url with button',
  'slug'     => 'my_url_slug',
  'type'     => 'url',
  'settings' => [
    'mediauploader' => true
  ]
] )

/**
 * Example output.
 */

string 'http://site.com/wp-content/uploads/2014/11/image.png'
```

### Description

This property will output the textarea tag and the output will be a string with all text from the textarea.

![Url example](/img/docs/property-url.png)

### Settings

Key           | Default | Description
--------------|---------|------------
mediauploader | false   | When this is `true` a button will show next to the input field where you can open the WordPress media library
