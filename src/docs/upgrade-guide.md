---
title: Upgrade guide
type: docs
---

This guide will describe how to update Papi 2 to Papi 3.

### Meta method in page type classes

In Papi 3 we remove `page_type` and `option_type`, this is because we think that one name is better than multiple. With string replace you can replace all your `page_type` and `option_type` with `meta` and you're page types should work with Papi 3.

### Remove method in page type classes

The are some changes to how the page type class should be created. `$this->remove` has been removed and could not be used in `register` method anymore. This is because we removed one of the calls to `register` method so the boxes isn't loaded twice.

The old way:

```php
public function register() {
  $this->remove( ['editor'] );
}
```

The new way:

```php
public function remove() {
  return ['editor'];
}

public function register() {

}
```

You will need to implement a method call `remove` that returns a string or array of strings that will be used to remove post type supports or meta boxes.

### Properties

#### Flexible

Flexible property will only save one layout per row. The layout key is changed from `_layout` to `_flexible_layout` since `_layout` can be a real slug.

It has backward compatibility for the old layout key. This may cause problem with existing slugs that are named `layout`. To fix default value issue you need to manually add the layout value for the effected row.

The slug will be something like this: `sections_0_flexible_layout`, where `sections` is your flexible slug, `0` is the row and `_flexible_layout` is the new layout key. The value should be a slug of the layout title, the same value as the old `_layout` rows that exists on each property.

#### Flexible and Repeater

If you did array properties without call `papi_property` for flexible or repeater items you need to use `papi_property` since we removed the support for array properties. So just use `papi_property( [] )` and not `[]`.

#### Text

Since 3.0.0 `nl2br` is added as setting to text property and `true` by default [#135](https://github.com/wp-papi/papi/pull/135).
