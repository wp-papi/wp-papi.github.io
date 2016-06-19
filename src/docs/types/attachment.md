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

It has the same method and settings as a [page type](/docs/types/page.html).
