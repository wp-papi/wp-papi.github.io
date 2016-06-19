---
title: Attachment type
type: types
order: 1
---

### Example

```php
<?php

class Attachment_Type extends Papi_Attachment_Type {

  /**
   * The type meta options.
   *
   * @return array
   */
  public function meta() {
    return [
      'name' => 'Attachment'
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

The special thing about attachment type is that you can only create one attachment type since you can't have a step between uploading a file and edit where you can choose which type to create.

The attachment type will register the properties in the modal window and on the post type so you can edit your fields on both pages.

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

Add custom help tabs, array of key/value where the key is the title and the value is the content, since `3.1.0`.

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

Add text to help sidebar, since `3.1.0`.

### Meta method

The `meta` is a required method of the page type class. It should return an array containing the required keys.

Options             | Required | Description
--------------------|----------|------------
name                | yes      | The name of the page type
fill_labels         | no       | When this is true it will add the page type name to `add_new_item`, `edit_item` and `view_item` label. Both in WordPress admin and the admin bar on the front. You can override this with the `labels` array.
labels              | no       | With this you can handle the `labels` object that exists on a [post type](http://codex.wordpress.org/Function_Reference/get_post_type_object). So this means that you can change "Add New Page" for every page type and have something like `Add New Startpage`. Just create a array with the `labels` keys and values on your page type meta array
show_screen_options | no       | Show screen options tabs. Default is `true`, since `3.1.0`.
show_help_tabs      | no       | Show help tabs. Default is `true`, since `3.1.0`.
template            | no       | The template file to render. This can be both dot templates `pages.article` or `pages/article.php`. Extension is not required.

## Namespaces

```php
<?php

namespace Foo\Bar;

/**
 * Example of a option type with namespace.
 */
class Test_Attacment_Type extends \Papi_Attachment_Type {}
```

Papi has no problem to work with option types that have namespaces.
