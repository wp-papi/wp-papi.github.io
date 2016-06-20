---
title: Taxonomy type
type: types
order: 4
---

### Example

```php
<?php

class Open_Taxonomy_Type extends Papi_Attachment_Type {

  /**
   * The type meta options.
   *
   * @return array
   */
  public function meta() {
    return [
      'name'     => 'Open',
      'taxonomy' => 'category'
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

### Meta method

The `meta` is a required method of the page type class. It should return an array containing the required keys.

Options               | Required | Description
----------------------|----------|------------
name                  | yes      | The name of the page type
description           | no       | The description of the page type
fill_labels           | no       | When this is true it will add the page type name to `add_new_item`, `edit_item` and `view_item` label. Both in WordPress admin and the admin bar on the front. You can override this with the `labels` array.
labels                | no       | With this you can handle the `labels` object that exists on a [taxonomy](https://codex.wordpress.org/Function_Reference/get_taxonomy). So this means that you can change "Add New Page" for every page type and have something like `Add New Startpage`. Just create a array with the `labels` keys and values on your page type meta array
taxonomy              | yes      | Array of taxonomies that the taxonomy type should be registered on. Default is empty string
redirect_after_create | false    | Redirect after term is created where all Papi fields will be.
show_screen_options   | no       | Show screen options tabs. Default is `true`, since `3.1.0`
show_help_tabs        | no       | Show help tabs. Default is `true`, since `3.1.0`
sort_order            | no       | The sort order number of the page type
template              | no       | The template file to render. This can be both dot templates `pages.article` or `pages/article.php`. Extension is not required.
thumbnail             | no       | The thumbnail image that should appear on the add new page
