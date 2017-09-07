---
title: Post
type: properties
---

```php
<?php

/**
 * Example of post.
 */

papi_property( [
  'title'    => 'Post',
  'slug'     => 'my_post_slug',
  'type'     => 'post'
] )

/**
 * Example output.
 */

WP_Post Object
(
  [ID] => 203
  [post_author] => 1
  [post_date] => 2014-11-18 22:07:38
  [post_date_gmt] => 2014-11-18 22:07:38
  [post_content] =>
  [post_title] => 'The post title'
  [post_excerpt] =>
  [post_status] => publish
  [comment_status] => closed
  [ping_status] => closed
  [post_password] =>
  [post_name] => 'the_post_title'
  [to_ping] =>
  [pinged] =>
  [post_modified] => 2014-11-18 22:09:05
  [post_modified_gmt] => 2014-11-18 22:09:05
  [post_content_filtered] =>
  [post_parent] => 0
  [guid] => 'http://site.com/?page_id=203'
  [menu_order] => 0
  [post_type] => 'page'
  [post_mime_type] =>
  [comment_count] => 0
  [filter] => 'raw'
)
```

### Description

With this property you can add reference to another post. It can't handle multiple references like [relationship](/docs/properties/relationship.html)

### Settings

Key           | Default       | Description
--------------|---------------|--------------------------------------------------
edit_url      | true          | Display edit post link in property
labels        | array         | Array of labels, `select_post_type` that defaults to `Select Post Type` and `select_item` that defaults to `Select %s` (the post type name).
layout        | 'simple'      | Post property has two different layouts, the `simple` one that is one dropdown with option labels and `advanced` that is two dropdown, one with all post types. `Since 3.0.0`
placeholder   | empty string  | Placeholder text that's displayed when no option is selected.
post_type     | 'post'        | The post types that the property will load posts from.
query         | array         | Append a `WP_Query` on all post types. Gist reference over `WP_Query`. Note that `post_type` in query will always be removed
select2       | true          | If true Select2 will be used, if false the native browser dropdown will be used.
