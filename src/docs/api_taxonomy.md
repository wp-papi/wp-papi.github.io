---
title: API Taxonomy
type: docs
---

## papi_get_page_type_id

```php
<?php

/**
 * Example of `papi_get_taxonomy_type_id` function.
 */

echo papi_get_taxonomy_type_id();
// "open-taxonomy-type"

// with term id
echo papi_get_taxonomy_type_id( 2 );
// "article-taxonomy-type"
```

### Description

When given a term id it will fetch the Papi taxonomy for that term id instead, since `3.1.0`

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$term_id  | null    | no       | The term id will be added automatic if you are one a term, page or custom taxonomy type page. When fetching values from another term this argument will be required

## papi_get_page_type_name

```php
<?php

/**
 * Example of `papi_get_taxonomy_type_name` function.
 */
echo papi_get_taxonomy_type_name();
// => "Open Taxonomy"

// with term id
echo papi_get_taxonomy_type_name( 2 );
// => "Article Taxonomy"
```

### Description

Get the taxonomy type name. Useful when you will print out the name of the taxonomy type in your theme, since `3.1.0`

You can also use [the_papi_taxonomy_type_name](#the_papi_taxonomy_type_name) to display it without `echo`

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$term_id  | null    | no       | The term id will be added automatic if you are one a term, page or custom taxonomy type page. When fetching values from another term this argument will be required

## the_papi_taxonomy_type_name

```php
<?php

/**
 * Example of `the_papi_taxonomy_type_name` function.
 */

the_papi_taxonomy_type_name();
// => "Open Taxonomy"

// with term id
the_papi_taxonomy_type_name( 2 );
// => "Article Taxonomy"
```

### Description

Print the taxonomy type name. Useful when you will print out the name of the taxonomy type in your theme, since `3.1.0`

You can also use [papi_taxonomy_type_name](#papi_taxonomy_type_name) to fetch the name into a variable.

### Parameters

Parameter | Default | Required | Description
----------|---------|----------|------------------------------------------------
$term_id  | null    | no       | The term id will be added automatic if you are one a term, page or custom taxonomy type page. When fetching values from another term this argument will be required
