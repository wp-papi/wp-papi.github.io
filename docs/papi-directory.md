---
title: Papi directory
---

Papi does require a directory in your theme, plugin or somewhere in your WordPress site where your types exists. You can add multiple directories.

```php
<?php

/**
 * Register page types directory with Papi.
 *
 * @return string
 */
add_filter( 'papi/settings/directories', function () {
  return __DIR__ . '/includes/page-types';
} );
```
