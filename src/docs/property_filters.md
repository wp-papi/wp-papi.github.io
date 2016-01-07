---
title: Property Filters
type: docs
---

## Format Value

**filter** `papi/format_value/{$property_type}`

```php
<?php

/**
 * Example of `papi/format_value/{$property_type}` filter.
 *
 * @return mixed
 */
add_filter( 'papi/format_value/string', function ( $value, $slug, $post_id ) {
  // do some magic with the value and return it.
  return $value;
}, 10, 3 );
```

### Description

Format the value of the property before it's returned to the theme.

## Load Value

**filter** `papi/load_value/{$property_type}`

```php
<?php

/**
 * Example of `papi/load_value/{$property_type}` filter.
 *
 * @return mixed
 */
add_filter( 'papi/load_value/string', function ( $value, $slug, $post_id ) {
  // do some magic with the value and return it.
  return $value;
}, 10, 3 );
```

### Description

This filter is applied after the value is loaded in the database.

## Update Value

**filter** `papi/update_value/{$property_type}`

```php
<?php

/**
 * Example of `papi/update_value/{$property_type}` filter.
 *
 * @return mixed
 */
add_filter( 'papi/update_value/string', function ( $value, $slug, $post_id ) {
  // do some magic with the value and return it.
  return $value;
}, 10, 3 );
```

### Description

This filter is applied before the value is saved in the database.
