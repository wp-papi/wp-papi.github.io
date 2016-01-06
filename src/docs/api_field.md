---
title: API Field
type: docs
---

## papi_delete_field

```php
<?php

/**
 * Example of `papi_delete_field` function.
 */

$success = papi_delete_field( 456, 'twitter_url' );
```

### Description

With this function you can delete property value from the database. It will return false if can't update or find the property in a page type.

### Parameters

Parameter | Default | Required |
----------|---------|----------|------------------------------------------------
$post_id  | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When deleting values from another post this argument will be required
$slug     |         | yes      | The property slug to delete value from

## papi_get_field

```php
<?php

/**
 * Example of `papi_get_field` function.
 */

echo papi_get_field( 'twitter_url' );

// with default value
echo papi_get_field( 'twitter_url', 'http://twitter.com/frozzare' );
```

### Description

The post id will be added automatic if you are one a post, page or custom post type page.

When fetching values from another post this argument will be required.

You can also use [the_papi_field](#the_papi_field) to display it without `echo`

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$post_id  | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When fetching values from another post this argument will be required
$slug     |         | yes      | The property slug to fetch value from
$default  | null    | no       | When a default value is passed as argument it will use that value as return value and echo it if the property value is empty or don't exists

## papi_update_field

```php
<?php

/**
 * Example of `papi_update_field` function.
 */

$success = papi_update_field( 456, 'twitter_url', 'http://twitter.com/frozzare' );
```

### Description

With this function you can update property value from the database. It will return false if can't update or find the property in a page type.

### Parameters

Parameter | Default | Required |
----------|---------|----------|------------------------------------------------
$post_id  | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When deleting values from another post this argument will be required
$slug     |         | yes      | The property slug to update property value

## the_papi_field

```php
<?php

/**
 * Example of `the_papi_field` function.
 */

the_papi_field( 'twitter_url' )

// with post id
the_papi_field( 1, 'twitter_url' )

// with default value
the_papi_field( 1, 'twitter_url', 'http://twitter.com/frozzare' );
```

### Description

This function will echo the value of a property using the property slug.

You can also use [papi_field](#papi_field) to fetch the value into a variable.

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$post_id  | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When fetching values from another post this argument will be required
$slug     |         | yes      | The property slug to fetch value from
$default  | null    | no       | When a default value is passed as argument it will use that value as return value and echo it if the property value is empty or don't exists
