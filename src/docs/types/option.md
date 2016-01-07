---
title: Option type
type: types
order: 2
---

### Example

```php
<?php

class Header_Option_Type extends Papi_Option_Type {

  /**
   * The type meta options.
   *
   * @return array
   */
  public function meta() {
    return [
      'menu' => 'options-general.php',
      'name' => 'Header'
    ];
  }

  /**
   * Register content meta box.
   */
  public function register() {
    $this->box( 'Content', [
      papi_property( [
        'title' => 'Name',
        'slug'  => 'name',
        'type'  => 'string'
      ] ),
      papi_property( [
        'title' => 'Post',
        'slug'  => 'post',
        'type'  => 'post'
      ] ),
      papi_property( [
        'title' => 'Text',
        'slug'  => 'Text',
        'type'  => 'text'
      ] )
    ] );
  }
}
```

Option type is used to create option pages with Papi. Option types will not be showed on Papi's tool page since they don't belong to a post type.

### Differents between option type and a page type

- Does not save the option type id in the database since options don't have a post id. So you can't have different option types that has the same property slug.

### Meta method

The `meta` is a required method of the option type class. It should return an array containing the required keys.

Options    | Required | Description
-----------|----------|------------
capability | no       | The capability that are allowed to access the page. Default is `manage_options`
menu       | yes      | The menu to register the sub menu page on
name       | yes      | The name of the option type

## Menu

Papi does only register submenu pages, so if you want a custom admin page you have to add it yourself.

## Namespaces

```php
<?php

namespace Foo\Bar;

/**
 * Example of a option type with namespace.
 */
class Test_Option_Type extends \Papi_Option_Type {}
```

Papi has no problem to work with option types that have namespaces.
