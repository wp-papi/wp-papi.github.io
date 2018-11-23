---
title: Conditional logic
---

Papi has conditional logic for properties. So you can show or hide a field depending on the value of other fields.

When a property has `display => false` conditional logic will not have any impact on the property.

The example on the right will hide `Link` field since `Show` field is `false` when you load the page. When you click the `Show` it will do ajax call and check if `Link` field should be showed or not depending on the value of `Show`.

```php
<?php

$this->box( 'Content', [
  papi_property( [
    'type'  => 'bool',
    'title' => 'Show',
    'slug'  => 'show'
  ] ),
  papi_property( [
    'type'  => 'string',
    'title' => 'Link',
    'slug'  => 'link',
    'rules' => [
      [
        'operator' => '=',
        'value'    => true,
        'slug'     => 'show'
      ]
    ]
  ] )
] );
```

## Relation

Like in `WP Query` you can have `relation` between rules. It can be `OR` or `AND`. The default value is `OR`. In the example on the right the `relation` has `AND` value. The `relation` key should exist on the top level array.

```php
<?php

$this->box( 'Content', [
  papi_property( [
    'type'  => 'bool',
    'title' => 'Show',
    'slug'  => 'show'
  ] ),
  papi_property( [
    'type'  => 'bool',
    'title' => 'Hide',
    'slug'  => 'hide'
  ] ),
  papi_property( [
    'type'  => 'string',
    'title' => 'Link',
    'slug'  => 'link',
    'rules' => [
      'relation' => 'AND',
      [
        'operator' => '=',
        'value'    => true,
        'slug'     => 'show'
      ],
      [
        'operator' => '=',
        'value'    => false,
        'slug'     => 'hide'
      ]
    ]
  ] )
] );
```

## Rule

A single rule has four different keys. The rule should be a array in the top level `rules` array.

Key         | Default      | Description
------------|--------------|------------
operator    | `=`          | The operator to use. Possible values are `=`, `!=`, `>`, `>=`, `<`, `<=`, `LIKE`, `NOT LIKE`, `IN`, `NOT IN`, `BETWEEN`, `NOT BETWEEN`, `EXISTS`, `NOT EXISTS`, `EMPTY` and `NOT EMPTY`
slug        | empty string | The slug of the property to read from.
source      | null         | The source to compare the value with instead of fetching it from field or database. Possible values are callable function (no closure), mixed values.
value       | null         | The value to compare to.

## Operators

Operator       | Example value | Description
---------------|---------------|-----------------
`=`            | true          | Equal value
`!=`           | false         | Not equal value
`>`            | 12            | Greater then a number
`>=`           | 13            | Greater then or equal a number
`<`            | 14            | Less then a number
`<=`           | 15            | Less then or equal a number
`LIKE`         | `hello`       | Check if a string contains the value
`NOT LIKE`     | `hello`       | Check if a string not contains the value
`IN`           | [1, 2]        | In array
`NOT IN`       | [3, 4]        | Not in array
`BETWEEN`      | [5, 6]        | Between two numbers
`NOT BETWEEN`  | [7, 8]        | Not between two numbers
`EXISTS`       |               | Property value should not be null or empty array (Papi does not save empty arrays)
`NOT EXISTS`   |               | Property value should be null or empty array (Papi does not save empty arrays)
`EMPTY`        |               | Property value should be empty. '0', 0 and false are not empty.
`NOT EMPTY`    |               | Property value should not be empty. '0', 0 and false are not empty.

## Flexible and Repeater

In a `flexible` conditional logic will only work on the same row. The rule slug in `flexible` or `repeater` properties should be the same slug as the property and nothing more advanced like `flexible` or `repeater` slug and child property slug. So not `my_repeater_slug.my_child_slug` or `my_repeater_slug.0.my_child_slug` just `my_child_slug`. Papi will find right property to use.
