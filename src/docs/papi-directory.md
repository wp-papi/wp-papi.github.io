---
title: Papi directory
type: docs
---

Papi does require a directory in your theme, plugin or somewhere in your WordPress site where your page types exists. You can add multiplied directories.

```php
<?php

/**
 * Register page types directory with Papi.
 */

add_filter( 'papi/settings/directories', function () {
  return __DIR__ . '/includes/page-types';
} );
```
