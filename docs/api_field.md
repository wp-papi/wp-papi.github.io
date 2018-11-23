---
title: API Field
---

* The different between option and post/term fields is that options don't have id.

## papi_delete_field / papi_delete_option / papi_delete_term_field

```php
<?php

/**
 * Example of `papi_delete_field` function.
 */

$success = papi_delete_field( 456, 'twitter_url' );
```

### Description

With this function you can delete property value from the database. It will return false if can't update or find the property in a entry type.

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$meta_id  | null    | no       | The meta (post or term) id will be added automatic if you are one a post, page, custom post type page or term. When deleting values from another post or term this argument will be required
$slug     |         | yes      | The property slug to delete value from

## papi_get_field / papi_get_option / papi_get_term_field

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

When fetching values from another post this argument will be required.

You can also use [the_papi_field](#the-papi-field-the-papi-option-the-papi-meta-field) to display it without `echo`

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$meta_id  | null    | no       | The meta (post or term) id will be added automatic if you are one a post, page, custom post type page or term. When deleting values from another post or term this argument will be required
$slug     |         | yes      | The property slug to fetch value from
$default  | null    | no       | When a default value is passed as argument it will use that value as return value and echo it if the property value is empty or don't exists

## papi_update_field / papi_update_option / papi_update_term_field

```php
<?php

/**
 * Example of `papi_update_field` function.
 */

$success = papi_update_field( 456, 'twitter_url', 'http://twitter.com/frozzare' );
```

### Description

With this function you can update property value from the database. It will return false if can't update or find the property in a entry type.

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$meta_id  | null    | no       | The meta (post or term) id will be added automatic if you are one a post, page, custom post type page or term. When deleting values from another post or term this argument will be required
$slug     |         | yes      | The property slug to update property value

## the_papi_field / the_papi_option / the_papi_meta_field

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

You can also use [papi_field](#papi-get-field-papi-get-option-papi-get-term-field) to fetch the value into a variable.

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$meta_id  | null    | no       | The meta (post or term) id will be added automatic if you are one a post, page, custom post type page or term. When deleting values from another post or term this argument will be required
$slug     |         | yes      | The property slug to fetch value from
$default  | null    | no       | When a default value is passed as argument it will use that value as return value and echo it if the property value is empty or don't exists
