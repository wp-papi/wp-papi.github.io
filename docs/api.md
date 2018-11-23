---
title: API
---

## papi_get_entry_type_css_class

```php
<?php

/**
 * Example output from `papi_get_entry_type_css_class` function.
 */

string 'standard-page-type'
```

### Description

This function will return the css class that is added to the body for a entry type.

## papi_get_page_type_key

```php
<?php

/**
 * Example output from `papi_get_page_type` function.
 */

string '_papi_page_type'
```

### Description

This function will return the key that Papi uses as key in postmeta for the page type id.

## papi_get_slugs

```php
<?php

/**
 * Example output from `papi_get_slugs` function.
 */

[
  'Content' => [
    'top_module',
    'feature_module',
    'show_feature_module'
  ]
]
```

### Description

This function will return a array with meta box title as keys and array of all Papi field slugs in that meta box.

### Parameters

Parameter   | Default | Required | Description
------------|---------|----------|------------------------------------------------
$post_id    | null    | no       | The post id will be added automatic if you are one a post, page or custom post type page. When fetching values from another post this argument will be required
$only_slugs | false   | no       | When true this will only return slugs and not the box titles. `Since 3.0.0`

## papi_property

```php
<?php

/**
 * Example of `papi_property` function.
 */

// my-page-type.php
$this->box( 'My meta box', [
  papi_property( 'properties/my-image.php', [
    'slug' => 'my_meta_box_image'
  ] )
] );

// properties/my-image.php
return papi_property( [
  'type'  => 'image',
  'title' => 'Image',
  'slug'  => 'custom_image_slug'
] );
```

### Description

This argument is only used when you load a template file, the array will be used to override property options from the template file.

This function will be the same as `$this->property` method on a page type.

When using a shared property file or another file that the property are stored in you can used it as a template file.

This is great to use when you will share properties over many page types and it will be less code to write.

### Parameters

Parameter         | Default | Required | Description
------------------|---------|----------|----------------------------------------
$file_or_options  |         | yes      | File path or a array containing property options
$values           | array   | no       | The values to override the template values with

## papi_tab

```php
<?php

/**
 * Example of `papi_tab` function.
 */

// my-page-type.php
$this->box( 'My meta box', [
  $this->tab( 'tabs/image-tab.php', [
    'title' => 'Background'
  ] )
] );

// tabs/image.php
return papi_tabs( [
  'title' => 'Images',
  'slug'  => 'custom_image_slug'
], [
  papi_property( 'properties/my-image.php' ),
  papi_property( [
    'type'  => 'string',
    'title' => 'Name',
    'slug'  => 'name'
  ] )
] );
```

### Description

This argument is only used when you load a template file, the array will be used to override tab options from the template file.

This function will be the same as `$this->tab` method on a page type.

When using a shared tab file or another file that the tab are stored in you can used it as a template file.

This is great to use when you will share tabs over many page types and it will be less code to write.

### Parameters

Parameter         | Default | Required | Description
------------------|---------|----------|----------------------------------------
$file_or_options  |         | yes      | Title, file path or a array containing tab options
$properties       | array   | no       | The values to override the template values with or properties

## papi_template

```php
<?php

/**
 * Example of `papi_template` function.
 */

// my-page-type.php
$this->box( 'My meta box', [
  papi_property( [
    'type'     => 'dropdown',
    'title'    => 'Dropdown',
    'slug'     => 'my_dropdown',
    'settings' => papi_template( 'settings/dropdown.php' )
  ] )
] );

// settings/dropdown.php
return [
  'items' => [
    'White' => '#ffffff',
    'Black' => '#000000'
  ]
];
```

### Description

`papi_property` function uses this function load template file. This function can be used to load template files that returns arrays. It can be handy when you will have to repeater or dropdown values in another file.

### Parameters

Parameter         | Default | Required | Description
------------------|---------|----------|----------------------------------------
$file_or_options  |         | yes      | File path to template file
$properties       | array   | no       | The values to override the template values with
