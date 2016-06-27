---
title: Editor
type: properties
---

```php
<?php

/**
 * Example of editor.
 */

papi_property( [
  'title' => 'Editor',
  'slug'  => 'my_editor_slug',
  'type'  => 'editor'
] )

/**
 * Example output.
 */

// String of text.
```

### Description

The WordPress editor.

### Settings

All settings has been added since `3.1.0`

Key              | Default     | Description
-----------------|-------------|------------------------------------------------------------
drag_drop_upload | true        | Enable Drag & Drop Upload Support.
mce_buttons      | empty array | Add custom mce buttons, read more about this in the WordPress [docs](https://codex.wordpress.org/TinyMCE_Custom_Buttons).
mce_buttons_2    | empty array | Add custom mce buttons, read more about this in the WordPress [docs](https://codex.wordpress.org/TinyMCE_Custom_Buttons).
mce_buttons_3    | empty array | Add custom mce buttons, read more about this in the WordPress [docs](https://codex.wordpress.org/TinyMCE_Custom_Buttons).
mce_buttons_4    | empty array | Add custom mce buttons, read more about this in the WordPress [docs](https://codex.wordpress.org/TinyMCE_Custom_Buttons).
media_buttons    | true        | Whether to display media insert/upload buttons.
teeny            | false       | Whether to output the minimal editor configuration used in PressThis.
