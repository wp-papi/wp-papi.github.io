---
title: Repeater
type: properties
---

```php
<?php

/**
 * Example of repeater.
 */

papi_property( [
  'title'    => 'Repeater',
  'slug'     => 'my_repeater_slug',
  'type'     => 'repeater',
  'settings' => [
    'items' => [
      papi_property( [
        'type'  => 'string',
        'title' => 'Title',
        'slug'  => 'my_string_slug'
      ] ),
      papi_property( [
        'type'     => 'dropdown',
        'title'    => 'Color',
        'slug'     => 'my_dropdown_slug',
        'settings' => [
          'items' => [
            'White' => '#ffffff',
            'Black' => '#000000'
          ]
        ]
      ] )
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
    [my_dropdown_slug] => '#ffffff'
  )

  [1] => array
  (
    [my_string_slug] => 'Test 2'
    [my_dropdown_slug] => '#000000'
  )
)
```

### Description

The repeater property can create a repeater of sub fields which can be repeated again and again. You can have repeater inside repeater since `3.1.0`, but not flexible inside repeater.

![Repeater example](/images/docs/property-repeater.png)

### Settings

Key           | Default       | Description
--------------|---------------|----------------------------------------------------------
add_new_label | 'Add new row' | Add new label text.
closed_rows   | false         | When this is true the existing rows will be closed when the page is loaded.
items         | array         | The array of properties, the same key/values as `papi_property` function has. You can't use repeater or flexible inside a repeater.
layout        | 'table'       | Choose between `table` or `row`.
limit         | -1 (no limit) | Prevent how many post references that can be added.

### Filters

```php
<?php

/**
 * Example of `papi/property/repeater/exclude` filter.
 */
add_filter( 'papi/property/repeater/exclude', function ( $exclude ) {
  return array_merge( $exclude, [
    'string'
  ] );
} );
```

Filter                         | Description
-------------------------------|-------------
papi/property/repeater/exclude | Prevent properties from render and working in repeater
