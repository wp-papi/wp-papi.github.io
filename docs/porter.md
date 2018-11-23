---
title: Import and Export
---

Papi Porter is a utility class that you can use to import and export field data. You can create custom porter driver, for example a xml driver.

## Import

```php
<?php

// Get the porter class.
$porter = papi()->porter();

// Change value for slugs before driver is finished with the value.
$porter->before( 'driver:value', function ( $value, $slug ) {
  switch ($slug) {
    case 'my_string_slug':
      return 'Before';
    default:
      return $value;
  }
} );

// Change value for slugs after driver is finished with the value.
$porter->after( 'driver:value', function ( $value, $slug ) {
  switch ($slug) {
    case 'my_string_slug':
      return 'After';
    default:
      return $value;
  }
} );

// Create a new post.
$post_id = wp_insert_post( [
  'post_title' => 'Test Papi Import',
  'post_type'  => 'page'
] );

// Import data, will return true or false.
$result = $porter->import( [
  'post_id'   => $post_id,
  'page_type' => 'article-page-type'
], [
  'my_string_slug' => 'Hello'
] );

// Done! The value of `string_test` will be `After`.
```

This is a simple example that will import a string value to a new post. The value can be changed before and after the porter driver does the magic with the value.

### Parameters

Parameter    | Default | Required | Description
-------------|---------|----------|------------------------------------------------
$options     |         | yes      | Array, post or post id (that has a page type id in postmeta table).
$fields      | array   | no       | If true only the value will be return for fields and not all options.

## Drivers

```php
<?php

/**
 * Example of adding a driver.
 */
$porter->driver( new Papi_Porter_Driver_Example );

/**
 * Example of change driver.
 */
$porter->driver( 'example' );

/**
 * Example of driver class.
 */
class Papi_Porter_Driver_Example extends Papi_Porter_Driver {

  /**
   * The driver name.
   *
   * @var string
   */
  protected $name = 'example';

  /**
   * Alias for driver name.
   *
   * @var string
   */
  protected $alias = 'alias';

  /**
   * Get value that should be saved.
   *
   * @param  array $options
   *
   * @return mixed
   */
  public function get_value( array $options = [] ) {
    // Do some magic with the value.
    return $options['value'];
  }
}
```

Papi has a [core](https://github.com/wp-papi/papi/blob/master/src/includes/porter/class-papi-porter-driver-core.php) driver that is default. A driver can have a alias and the core driver alias is `papi`.

To change driver that the `import` method uses you can do it with `use_driver` or `driver` method that takes the name or alias as argument.

To add a custom driver that the `import` method can use you can add `add_driver` or `driver` method that takes the driver instance as argument.

## Export

```php
<?php

// Get the porter class.
$porter = papi()->porter();

// Export fields.
$fields  = $porter->export( 7 );

// Example output.
[
 'Content' => [
   'my_string_slug' => [
     'after_html'   => '',
     'before_html'  => '',
     'capabilities' => [],
     'description'  => '',
     'disabled'     => false,
     'lang'         => false,
     'raw'          => false,
     'required'     => false,
     'rules'        => [],
     'settings'     => [],
     'sidebar'      => true,
     'slug'         => 'papi_top_module',
     'sort_order'   => 100,
     'title'        => 'Name',
     'type'         => 'string',
     'value'        => 'After'
   ]
 ]
]
```

The `export` method will return array with box title as key and array of properties with all options and the value as box value.

### Parameters

Parameter    | Default | Required | Description
-------------|---------|----------|------------------------------------------------
$post_id     |         | yes      |
$only_values | false   | no       | If true only the value will be return for fields and not all options.
