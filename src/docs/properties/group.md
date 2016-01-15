---
title: Group
type: properties
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

// String output
my_string_slug => string 'Hello'

// Dropdown output
my_dropdown_slug => string '#ffffff'
```

### Description

Group property is a property where you can group properties in a table with a sidebar instead of having all properties successively. It's only a visual property and will not save any new data or something. Properties that exists in this property will be saved as if they was standalone.

**This property will not work inside a flexible or a repeater**

### Settings

Key           | Default       | Description
--------------|---------------|----------------------------------------------------------
items         | array         | The array of properties, the same key/values as `$this->property` method or `papi_property` function has.
