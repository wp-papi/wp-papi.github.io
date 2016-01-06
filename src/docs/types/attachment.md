---
title: Attachment type
type: types
order: 1
---

```php
<?php

/**
 * Example of a attachment type.
 */

class Attachment_Type extends Papi_Attachment_Type {

  public function meta() {
    return [
      'name' => 'Attachment'
    ];
  }

  public function register() {
    $this->box( 'Content', [
      papi_property( [
        'title'    => 'Name',
        'slug'     => 'name',
        'type'     => 'string'
      ] ),
      papi_property( [
        'title'    => 'Post',
        'slug'     => 'post',
        'type'     => 'post'
      ] ),
      papi_property( [
        'title'    => 'Text',
        'slug'     => 'Text',
        'type'     => 'text'
      ] )
    ] );
  }

}
```

The special thing about attachment type is that you can only create one attachment type since you can't have a step between uploading a file and edit where you can choose which type to create.

The attachment type will register the properties in the modal window and on the post type so you can edit your fields on both pages.

### meta method

The `meta` is a required method of the page type class. It should return an array containing the required keys.

**Since 2.4.0** the method is called `meta` the old `page_type` method will still work but is deprecated and not recommended to use.

Options            | Required | Description
-------------------|----------|------------
name               | yes      | The name of the page type
fill_labels        | no       | When this is true it will add the page type name to `add_new_item`, `edit_item` and `view_item` label. Both in WordPress admin and the admin bar on the front. You can override this with the `labels` array.
labels             | no       | With this you can handle the `labels` object that exists on a [post type](http://codex.wordpress.org/Function_Reference/get_post_type_object). So this means that you can change "Add New Page" for every page type and have something like `Add New Startpage`. Just create a array with the `labels` keys and values on your page type meta array
template           | no       | The template file to render. This can be both dot templates `pages.article` or `pages/article.php`. Extension is not required. Dot templates and extension requirement does only exists in 2.3.0 and above.
