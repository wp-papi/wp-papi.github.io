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
  'display'      => true,
  'id'           => '',
  'layout'       => 'horizontal',
  'priority'     => 'default',
  'sort_order'   => 1000,
  'title'        => ''
] );
```

Documentation of the `box` method. `box` is a short name for meta box in Papi.

### Options

Key          | Default      | Description
-------------|--------------|---------------------------------------------------
capabilities | array        | Can be a string with a role or capability or a array with many values
context      | 'normal'     | The same value as for context in `add_meta_box` or `after_title` if you want is after the title input field.
display      | true         | Prevent box from render when set to `false`, since `3.1.0`
id           | empty string | The box id, default is automatically generated from the title.
layout       | 'horizontal' | The box can be rendered in `horizontal` or `vertical` mode, where the title and description is rendered above the field, since `3.1.0`
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

### Share boxes across types

When doing a large site it can be handy to share boxes between types, so the box method can take a file path to a box template file where you define both box options and properties. The file need to be placed inside your registered Papi directory, for example `boxes/content.php`.

Example:

```
<?php

// my-page-type.php
$this->box( 'boxes/content.php' );

// boxes/content.php
return [
  'title' => 'Content',

  papi_property( [
    'type'  => 'string',
    'title' => 'Name'
  ] ),

  papi_property( [
    'type'  => 'text',
    'title' => 'About'
  ] )
];
```

If you don't want different files per box you can create a function that returns the same as the box file and call the functions within the box.

```
<?php

// my-page-type.php
$this->box( content_box() );

// boxes.php
function content_box() {
  return [
    'title' => 'Content',

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
