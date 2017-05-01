---
title: Taxonomy type
type: types
order: 4
---

### Example

```php
<?php

class Open_Taxonomy_Type extends Papi_Taxonomy_Type {

  /**
   * The type meta options.
   *
   * @return array
   */
  public function meta() {
    return [
      'name'                  => 'Open',
      'taxonomy'              => 'category',
      'redirect_after_create' => true
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

Taxonomy type exists since `3.1.0`

### Meta method

The `meta` is a required method of the taxonomy type class. It should return an array containing the required keys.

Options               | Required | Description
----------------------|----------|------------
name                  | yes      | The name of the taxonomy type
description           | no       | The description of the taxonomy type
fill_labels           | no       | When this is true it will add the taxonomy type name to `add_new_item`, `edit_item` and `view_item` label. Both in WordPress admin and the admin bar on the front. You can override this with the `labels` array.
labels                | no       | With this you can handle the `labels` object that exists on a [taxonomy](https://codex.wordpress.org/Function_Reference/get_taxonomy). So this means that you can change "Edit Category" for every taxonomy type and have something like `Edit Open taxonomy`. Just create a array with the `labels` keys and values on your taxonomy type meta array
taxonomy              | yes      | Array of taxonomies that the taxonomy type should be registered on. Default is empty string
redirect_after_create | no       | Redirect after term is created where all Papi fields will be. Default is `false`
show_screen_options   | no       | Show screen options tabs. Default is `true`
show_help_tabs        | no       | Show help tabs. Default is `true`
sort_order            | no       | The sort order number of the taxonomy type
template              | no       | The template file to render. This can be both dot templates `taxonomies.open` or `taxonomies/open.php`, extension is not required.

### Body classes method

```php
<?php

/**
 * Example of `body_classes` method.
 *
 * @return array
 */
public function body_classes() {
  return ['custom-class'];
}
```

With this method you can add custom body classes to body when a taxonomy type is rendered in the WordPress admin.

### Box method

This method is used to register all properties, tabs and remove meta boxes as described above.

The box method can has callable method as the second argument that returns a array with properties or tabs.

Read more about that under [box section](/docs/box.html).

### Display method

```php
<?php

/**
 * Example of `display` method.
 *
 * @param  string $taxonomy
 *
 * @return bool
 */
public function display( $taxonomy ) {
  return $taxonomy === 'category';
}
```

This method is used to tell if the taxonomy type should be displayed (listed in the dropdown) or not.

The method will take a `$taxonomy` argument. This is useful when the taxonomy type is registered on more than one taxonomy.

Returning anything other than `true` will hide the taxonomy type.

Default value is `true`

### Help method

```php
<?php

/**
 * Example of `help` method.
 *
 * @return array
 */
public function help() {
  return [
    'Custom title' => 'Custom help text'
  ];
}
```

Add custom help tabs, array of key/value where the key is the title and the value is the content

### Help sidebar method

```php
<?php

/**
 * Example of `help_sidebar` method.
 *
 * @return string
 */
public function help_sidebar() {
  return '<p>Hello, world</p>';
}
```

Add custom html to help sidebar

## Namespaces

```php
<?php

namespace Foo\Bar;

/**
 * Example of a taxonomy type with namespace.
 */
class Test_Taxonomy_Type extends \Papi_Taxonomy_Type {}
```

Papi has no problem to work with taxonomy types that have namespaces.
