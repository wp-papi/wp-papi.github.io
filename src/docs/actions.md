---
title: Actions
type: docs
---

## Delete value

**action** `papi/delete_value/{$property_type}`

```php
<?php

/**
 * Example of `papi/delete_value/{$property_type}` action.
 */

add_action( 'papi/delete_value/string', function ( $slug, $post_id ) {
  // do something when string property is deleted
}, 10, 2 );
```

### Description

With this action you can do something when a property is deleted with `papi_delete_field` or `papi_delete_option`. The `$post_id` will be zero when you is deleting a option value.

## Include plugins or properties

**action** `papi/include`

```php
<?php

/**
 * Example of `papi/include` action that will include a custom property.
 */

add_action( 'papi/include', function () {
  require_once 'class-papi-property-kvack.php';
} );
```

### Description

With this action you can include plugins or properties build for Papi. Third party properties should use this action when they load there custom property in the plugin.
