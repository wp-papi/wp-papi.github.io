---
title: Flexible
type: properties
---

```php
<?php

/**
 * Example of flexible.
 */

papi_property( [
  'title'    => 'Flexible',
  'slug'     => 'my_flexible_slug',
  'type'     => 'flexible',
  'settings' => [
    'items' => [
      [
        'title' => 'Posts',
        'items' => [
          papi_property( [
            'type'  => 'string',
            'title' => 'Title',
            'slug'  => 'my_string_slug'
          ] ),
          papi_property( [
            'type'  => 'post',
            'title' => 'Post',
            'slug'  => 'my_post_slug'
          ] )
        ]
      ],
      [
        'title' => 'Image',
        'items' => [
          papi_property( [
            'type'  => 'string',
            'title' => 'Title',
            'slug'  => 'my_title_slug'
          ] ),
          papi_property( [
            'type'  => 'image',
            'title' => 'Image',
            'slug'  => 'my_image_slug'
          ] )
        ]
      ]
    ]
  ]
] )

/**
 * Example output.
 */

array
(
  [0] => array
  (
    [my_string_slug] => 'Test 1'
    [my_post_slug] => 'WP_Post object',
    [_layout] => 'posts'
  )

  [1] => array
  (
    [my_title_slug] => 'Test 2'
    [my_image_slug] => 'Image object',
    [_layout] => 'image'
  )
)
```

### Description

The flexible property can create a repeater with different layouts that contains sub fields. That's the big different from a [repeater property](#repeater). You can't have a flexible or repeater in a flexible.

![Flexible example](/images/docs/property-flexible.png)

### Settings

Key           | Default       | Description
--------------|---------------|----------------------------------------------------------
add_new_label | 'Add new row' | Add new label text. **Since 2.4.2**
closed_rows   | false         | When this is true the existing rows will be closed when the page is loaded.
items         | array         | Array of key/value. See `Items key/value` section.
layout        | 'table'       | Choose between `table` or `row`.
limit         | -1 (no limit) | Prevent how many post references that can be added.

### Items key/value

Key    | Default | Description
-------|---------|----------------------------------------------------------
items  | array   | The array of properties, the same key/values as `$this->property` method or `papi_property` function has. You can't use repeater or flexible inside a flexible.
slug   | string  | The slug of the flexible layout. **This is not required**. If you don't have a slug value it will be generated from the title.
title  | string  | The title of the flexible layout.

### Filters

```php
<?php

/**
 * Example of `papi/property/flexible/exclude` filter.
 */

add_filter( 'papi/property/flexible/exclude', function ( $exclude ) {
  return array_merge( $exclude, [
    'string'
  ] );
} );
```

Filter                         | Description
-------------------------------|-------------
papi/property/flexible/exclude | Prevent properties from render and working in flexible
