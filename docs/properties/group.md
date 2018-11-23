---
title: Group
---

```php
<?php

/**
 * Example of group.
 */

papi_property( [
  'title'    => 'Group',
  'type'     => 'group',
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

[
  'my_string_slug'   => 'Hello'
  'my_dropdown_slug' => '#ffffff'
]
```

### Description

Group property is a property where you can group properties in a table with a sidebar instead of having all properties successively.

#### After 3.1.0

The data is saved like a repeater but with a single row, since the properties is subproperties to a property and with all the new stuff in Papi it wasn't possible to have it like before. The output data isn't changed, only the internal of how is working.

In `3.1.0` you can have group property inside flexible and repeaters.

#### Before 3.1.0

It's only a visual property and will not save any new data or something. Properties that exists in this property will be saved as if they was standalone.

**This property will not work inside a flexible or a repeater**

### Settings

Key           | Default       | Description
--------------|---------------|----------------------------------------------------------
items         | array         | The array of properties, the same key/values as `papi_property` function has.
