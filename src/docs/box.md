---
title: Box (meta box)
type: docs
---

```php
<?php

/**
 * Example of the default options.
 */

$this->box( [
  'capabilities' => [],
  'context'      => 'normal',
  'priority'     => 'default',
  'sort_order'   => 1000,
  'title'        => ''
] );
```

Documentation of the `box` method. `box` is a short name for `metabox` in Papi.

### Options

Key          | Default      | Description
-------------|--------------|---------------------------------------------------
capabilities | array        | Can be a string with a role or capability or a array with many values
context      | 'normal'     | The same value as for context in `add_meta_box`
priority     | 'default'    | The same value as for priority in `add_meta_box`
sort_order   | 1000         | Numeric value, lowest value in the meta box will be at the top and the highest value at the bottom
title        | empty string | The title of the meta box. This can't be empty. When passing a string as the first argument for box method it will become `array('title' => 'the title')` automatic

### Callable method

It's possible to use callable method as a second argument in your box method
that returns a array with properties or tabs.

```php
<?php

/**
 * Example of using the callable parameter.
 */
public function register() {
  $this->box( 'Content', [$this, 'content_box'] );
}

/**
 * Example of callable box.
 *
 * @return array
 */
public function content_box() {
  return [
    papi_property( [
      'type'  => 'string',
      'title' => 'Name'
    ] ),
    papi_property( [
      'type'  => 'text',
      'title' => 'About'
    ] )
  ];
}
```
