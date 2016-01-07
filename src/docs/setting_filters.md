---
title: Setting Filters
type: docs
---

## Change column title for page type column.

**filter** `papi/settings/column_title_{$post_type}`

```php
<?php

/**
 * Example of `papi/settings/column_title_{$post_type}` filter.
 *
 * @return string
 */
add_filter( 'papi/settings/column_title_module', function ( $page_type ) {
 return __( 'Module Type', 'my_theme' );
} );

```

## Change default sort order

**filter** `papi/settings/sort_order`

```php
<?php

/**
 * Example of `papi/settings/sort_order` filter.
 *
 * @return int
 */
add_filter( 'papi/settings/sort_order', function () {
  return 1;
} );
```

### Description

Change the default sort order for page types, meta boxes, tabs and properties.

Default sort order is `1000`

## Change standard page description for post type

**filter** `papi/settings/standard_page_description_{$post_type}`

```php
<?php

/**
 * Example of `papi/settings/standard_page_description_{$post_type}` filter.
 *
 * @return string
 */
add_filter( 'papi/settings/standard_page_description_post', function ( $page_type ) {
  return __( 'The standard blog post', 'my_theme' );
} );
```

### Description

This filter is used to change the standard page description for a post type.

Default value is the translation of `Page with WordPress standard fields`
where `Page` will be the singular name for the post type.

## Change standard page name for post type

**filter** `papi/settings/standard_page_name_{$post_type}`

```php
<?php

/**
 * Example of `papi/settings/standard_page_description_{$post_type}` filter.
 *
 * @return string
 */
add_filter( 'papi/settings/standard_page_description_post', function ( $page_type ) {
  return __( 'Blog page', 'my_theme' );
} );
```

### Description

This filter is used to change the standard page name for a post type.

Default value is the translation of `Standard Page`
where `Page` will be the singular name for the post type.

## Change standard page thumbnail for post type

**filter** `papi/settings/standard_page_thumbnail_{$post_type}`

```php
<?php

/**
 * Example of `papi/settings/standard_page_thumbnail_{$post_type}` filter.
 *
 * @return string
 */
add_filter( 'papi/settings/standard_page_thumbnail_post', function () {
  return '/path/to/thumbnail.png';
} );
```

### Description

This filter is used to change the standard page thumbnail for a post type.

Default value is the translation of `empty string`

## Load page type from post id query string

**filter** `papi/settings/page_type_from_post_qs`

```php
<?php

/**
 * Example of `papi/settings/page_type_from_post_qs` filter.
 *
 * @return string
 */
add_filter( 'papi/settings/page_type_from_post_qs', function () {
  return 'parent_post';
} );
```

### Description

This filter is used to load a page type from a query string that have another post id.

When using plugins as Polylang the query string `from_post` is used to tell which post the current post was created from.

Papi will not now which page type to load then and it should be the same as the `from_post`. So that's when this filter will be useful.

This filter is not post type specific and will work on every post type.

Default value is `from_post`.

## Only page type for post type

**filter** `papi/settings/only_page_type_{$post_type}`

```php
<?php

/**
 * Example of `papi/settings/only_page_type_{$post_type}` filter.
 *
 * @return string
 */
add_filter( 'papi/settings/only_page_type_post', function () {
  return 'post-page-type';
} );
```

### Description

This filter is used to register all page type directories that Papi should look for page types in.

You can return a string or a array of strings.

## Page type directories

**filter** `papi/settings/directories`

```php
<?php

/**
 * Example of `papi/settings/directories` filter.
 *
 * @return bool
 */
add_filter( 'papi/settings/directories', function () {
  return false;
} );
```

### Description

This filter is used to register all page type directories that Papi should look for page types in.

You can return a string or a array of strings.

Default value is `empty array`.

## Show page type on add new page view

**filter** `papi/settings/show_page_type_{$post_type}`

```php
<?php

/**
 * Example of `papi/settings/show_page_type_{$post_type}` filter.
 *
 * @return bool
 */
add_filter( 'papi/settings/show_page_type_post', function ( $page_type ) {
  if ( $page_type === 'start-page-type' ) {
      return false;
  }

  return true;
} );
```

### Description

This filter is used to filter which page types that will be displayed or not on `Add New Page` page.

The function will send in the file name of post types as a argument.

Returning anything else then `true` will hide the page type on `Add New Page` page.

Default value for every page type is `true`

## Show standard page type for post type

**filter** `papi/settings/show_standard_page_type_{$post_type}`

```php
<?php

/**
 * Example of `papi/settings/show_standard_page_type_{$post_type}` filter.
 *
 * @return bool
 */
add_filter( 'papi/settings/show_standard_page_type_page', '__return_false' );
```

### Description

This filter allows you to show the standard page on the `Add New Page` view. The standard page is hidden by default.

Default value for every post type is `false`

## Show standard page type in filter

**filter** `papi/settings/show_standard_page_type_in_filter_{$post_type}`

```php
<?php

/**
 * Example of `papi/settings/show_standard_page_type_in_filter_{$post_type}` filter.
 *
 * @return bool
 */
add_filter( 'papi/settings/show_standard_page_type_in_filter_page', '__return_false' );
```

### Description

This filter allows you to show the standard page in the dropdown filter on the list page. The standard page is hidden by default.

Default value for every post type is `false`
