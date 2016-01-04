---
title: Upgrade guide
type: docs
order: 2
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
