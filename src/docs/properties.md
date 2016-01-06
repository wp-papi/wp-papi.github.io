---
title: Properties
type: docs
child: properties
---

```php
<?php

/**
 * Example of the default options.
 */

papi_property( [
  'after_class'  => '',
  'after_html'   => '',
  'before_class' => '',
  'before_html'  => '',
  'capabilities' => [],
  'default'      => '',
  'description'  => '',
  'disabled'     => false,
  'lang'         => false,
  'overwrite'    => false,
  'raw'          => false,
  'required'     => false,
  'rules'        => [],
  'settings'     => [],
  'sidebar'      => true,
  'slug'         => '',
  'sort_order'   => 100,
  'title'        => '',
  'type'         => 'string',
  'value'        => ''
] )
```

Papi has many different core properties to start with and you can easy create your own using our [Yeoman generator](https://github.com/wp-papi/generator-property). The are several keys that all properties have.

The property type is loaded from the type file instead of saving it in the database.

Key          | Default      | Description
-------------|--------------|---------------------------------------------------
after_class  | string       | Add custom css class to after div.
after_html   | string       | Output html after property html. Can be a html string or a callable function. Will be wrapped in a div with class `papi-after-html` and a data attribute with the property type.
after_class  | string       | Add custom css class to before div.
before_html  | string       | Output html before property html. Can be a html string or a callable function. Will be wrapped in a div with class `papi-before-html` and a data attribute with the property type.
capabilities | array        | Can be a string with a role or capability or a array with many values
default      | empty string | The default value that should be used when value is empty.
description  | empty string | The introduction text that will appear below the title text of the property. You could write your help text here. With `\n` you can create new lines in the description
disabled     | false        | Disable the property, won’t show in WordPress admin
display      | true         | When using this key you can hide the property being displayed, it will have the class `papi-hide`.
lang         | false        | When using this key you can specify which language will show the property
overwrite    | false        | When property is used on post page you can overwrite post object properties with property value when `overwrite` is true.
raw          | false        | This will render the property without a table, good to use when creating a custom property that uses other
post_type    | empty string | The post type that the property will be rendered for. Default is empty string that will be assigned the current post_type.
rules        | array        | [Read more about conditional logic](/docs/conditional_logic.html)
required     | false        | By default all fields are non required in Papi but this can be changed with required option
sidebar      | true         | Boolean that shows the sidebar on each property. If false the sidebar won’t show
settings     | array        | Array with custom settings for the property
sort_order   | 1000         | Numeric value, lowest value in the meta box will be at the top and the highest value at the bottom
slug         | empty string | The slug of property. If empty or not used the title will be generated to slug value
title        | empty string | The title of the property. Can be empty for blank title
type         | empty string | The property type (lower case is preferred to use)
value        | empty string | The default value that are presented in the property

Be sure to have different slug for each properties on a type, the same slug will not work great and you will lose data if you are using same slug for multiple properties.
