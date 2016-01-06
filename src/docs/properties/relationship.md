---
title: Relationship
type: properties
---

```php
<?php

/**
 * Example of relationship.
 */

papi_property( [
  'title'    => 'Relationship',
  'slug'     => 'my_relationship_slug',
  'type'     => 'relationship',
  'settings' => [
    'limit'     => 3,
    'post_type' => ['post', 'page', 'my-custom-post-type']
  ]
] )

/**
 * Example output.
 */

array
(
  [0] => WP_Post Object
  (
    [ID] => 203
    [post_author] => 1
    [post_date] => 2014-11-18 22:07:38
    [post_date_gmt] => 2014-11-18 22:07:38
    [post_content] =>
    [post_title] => 'The post title'
    [post_excerpt] =>
    [post_status] => 'publish'
    [comment_status] => 'closed'
    [ping_status] => 'closed'
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
)
```

### Description

With this property you can link posts, pages or custom post types together. With the `post_type` setting you can diced witch post types to use, default is page.

![Relationship example](/images/docs/property-relationship.png)

### Settings

Key          | Default       | Description
-------------|---------------|--------------------------------------------------
items        | array         | Array of items that should be listed in the relationship. You can use this to have your own data in the relationship property. Each item in the array is required to have `id` and `title` values. All sort options that begins with `Post` will be hidden.
limit        | -1 (no limit) | Prevent how many post references that can be added.
only_once    | false         | When this is true you can only select a relationship once.
post_type    | 'page'        | Change which post types it loads post objects from
query        | array         | Append a `WP_Query` on all post types. Gist reference over `WP_Query`. Note that `post_type` in query will always be removed
show_sort_by | true          | Show the sort by dropdown or not.

### Items data

```php
<?php

/**
 * Example of custom data in relationship.
 */

$categories = array_map( function ( $cat ) {
  return [
    'id'    => (int) $cat->term_id,
    'title' => $cat->name
  ];
}, get_categories() );

papi_property( [
  'title'    => 'Categories'
  'type'     => 'relationship',
  'settings' => [
    'items' => $categories
  ]
] )
```

### Filters

```php
<?php

/**
 * Example of `papi/property/relationship/sort_options` filter.
 */

add_filter( 'papi/property/relationship/sort_options', function ( $not_allowed ) {
  return array_merge( $not_allowed, [
    'Name (alphabetically)' => function ( $a, $b ) {
      // Backwards compatibility with both `post_title` and `title`.
      return strcmp(
        strtolower( isset( $a->post_title ) ? $a->post_title : $a->title ),
        strtolower( isset( $b->post_title ) ? $b->post_title : $b->title )
      );
    }
  ] );
} );
```

Filter                                  | Description
----------------------------------------|-------------
papi/property/relationship/sort_options | Add more sort options to property relationship. The array key is the name and the value that is saved as the sort order identification

