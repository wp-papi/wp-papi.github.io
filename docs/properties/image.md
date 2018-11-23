---
title: Image
---

```php
<?php

/**
 * Example of image.
 */

papi_property( [
  'title' => 'Image',
  'slug'  => 'my_image_slug',
  'type'  => 'image'
] )

/**
 * Example output.
 */

stdClass Object
(
      [width] => 800
      [height] => 600
      [file] => '2014/09/cube.jpg'
      [sizes] => array
        (
          [thumbnail] => array
          (
            [file] => 'cube-150x150.jpg'
            [width] => 150
            [height] => 150
            [mime-type] => 'image/jpeg'
          )

          [medium] => array
          (
            [file] => 'cube-300x225.jpg'
            [width] => 300
            [height] => 225
            [mime-type] => 'image/jpeg'
          )

      )

      [image_meta] => array
        (
          [aperture] => 0
          [credit] =>
          [camera] =>
          [caption] =>
          [created_timestamp] => 0
          [copyright] =>
          [focal_length] => 0
          [iso] => 0
          [shutter_speed] => 0
          [title] =>
          [orientation] => 1
        )
      [alt] => 'Alt text'
      [caption] => 'Caption text'
      [description] => 'Description text'
      [id] => 6
      [is_image] => true
      [title] => 'Title text'
      [url] => 'http://site.com/wp-content/uploads/2014/09/cube.jpg'
)
```

### Description

With this property you can add a image from the WordPress media library.

![Image example](/img/docs/property-image.png)

### Settings

No settings exists.
