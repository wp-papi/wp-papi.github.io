---
title: File
type: properties
---

```php
<?php

/**
 * Example of file.
 */

papi_property( [
  'title' => 'File',
  'slug'  => 'my_file_slug',
  'type'  => 'file'
] )

/**
 * Example output.
 */

stdClass Object
(
      [file] => '2014/09/text.txt'
      [alt] => ''
      [caption] => 'Caption text'
      [description] => 'Description text'
      [id] => 6
      [is_image] => false
      [title] => 'Title text'
      [url] => 'http://site.com/wp-content/uploads/2014/09/test.txt'
)
```

### Description

With this property you can add a file from the WordPress media library. If the `multiple` setting is set to true the output will be a array with objects instead of just one object.

![File example](/images/docs/property-file.png)

### Settings

Key      | Default | Description
---------|---------|------------------------------------------------------------
multiple | false   | If true you can add multiple files
