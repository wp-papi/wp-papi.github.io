---
title: API Page
type: docs
---

## papi_get_page

```php
<?php

/**
 * Example of `papi_get_page` function.
 */

echo papi_get_page()->twitter_url;

// with post id
echo papi_get_page( 2 )->twitter_url;
```

### Description

When given a post id it will fetch the Papi page for that post id instead.

The papi page function will do the same as current page function if no post id is used as a argument.

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$post_id  | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When fetching values from another post this argument will be required

## papi_get_page_type_id

```php
<?php

/**
 * Example of `papi_get_page_type_id` function.
 */

echo papi_get_page_type_id();
// "article-page-type"

// with post id
echo papi_get_page_type_id( 2 );
// "activity-page-type"
```

### Description

When given a post id it will fetch the Papi page for that post id instead.

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$post_id  | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When fetching values from another post this argument will be required

## papi_get_page_type_name

```php
<?php

/**
 * Example of `papi_get_page_type_name` function.
 */
echo papi_get_page_type_name();
// => "Article Page"

// with post id
echo papi_get_page_type_name( 2 );
// => "Video Page"
```

### Description

Get the page type name. Useful when you will print out the name of the page type in your theme.

You can also use [the_papi_page_type_name](#the_papi_page_type_name) to display it without `echo`

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$post_id  | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When fetching values from another post this argument will be required

## the_papi_page_type_name

```php
<?php

/**
 * Example of `the_papi_page_type_name` function.
 */

the_papi_page_type_name();
// => "Article Page"

// with post id
the_papi_page_type_name( 2 );
// => "Video Page"
```

### Description

Print the page type name. Useful when you will print out the name of the page type in your theme.

You can also use [papi_page_type_name](#papi_page_type_name) to fetch the name into a variable.

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$post_id  | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When fetching values from another post this argument will be required
