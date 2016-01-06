---
title: Color
type: properties
---

```php
<?php

/**
 * Example of color.
 */

papi_property( [
  'title'    => 'Color',
  'slug'     => 'my_color_slug',
  'type'     => 'color'
] )

/**
 * Example output.
 */

string '#ffffff'
```

### Description

The property output the WordPress color picker.

### Settings

Key        | Default | Description
-----------|---------|----------------------------------------------------------
show_input | true    | Show the text input
palettes   | array   | Array with hex colors
