---
title: Page type
type: types
order: 3
---

### Example

```php
<?php

class Video_Page_Type extends Papi_Page_Type {

  /**
   * The type meta options.
   *
   * @return array
   */
  public function meta() {
    return [
      'name'        => 'Video page',
      'description' => 'A page where you can embed videos',
      'template'    => 'pages/video-page.php'
    ];
  }

  /**
   * Register content meta box.
   */
  public function register() {
    $this->box( 'Content', [
      papi_property( [
        'title' => 'Name',
        'slug'  => 'name',
        'type'  => 'string'
      ] ),
      papi_property( [
        'title' => 'Post',
        'slug'  => 'post',
        'type'  => 'post'
      ] ),
      papi_property( [
        'title' => 'Text',
        'slug'  => 'Text',
        'type'  => 'text'
      ] )
    ] );
  }
}
```

### Meta method

The `meta` is a required method of the page type class. It should return an array containing the required keys.

Options            | Required | Description
-------------------|----------|------------
name               | yes      | The name of the page type
child_types        | no       | Array of page type that will be available when `parent_post` query string exists. The array values should be the page type id.
description        | no       | The description of the page type
fill_labels        | no       | When this is true it will add the page type name to `add_new_item`, `edit_item` and `view_item` label. Both in WordPress admin and the admin bar on the front. You can override this with the `labels` array.
labels             | no       | With this you can handle the `labels` object that exists on a [post type](http://codex.wordpress.org/Function_Reference/get_post_type_object). So this means that you can change "Add New Page" for every page type and have something like `Add New Startpage`. Just create a array with the `labels` keys and values on your page type meta array
post_type          | no       | Array of post types that the page type should be registered on. Default is `page`
sort_order         | no       | The sort order number of the page type
standard_type      | no       | True or false if standard page type should be displayed on `Add New Page` when `parent_post` query string exists or when you want to hide standard page when a post type only has one page type, like `only_page_type` filter.
template           | no       | The template file to render. This can be both dot templates `pages.article` or `pages/article.php`. Extension is not required. Dot templates and extension requirement does only exists in 2.3.0 and above.
thumbnail          | no       | The thumbnail image that should appear on the add new page

```javascript
/**
 * Example of template structure.
 */

themes/
  my-theme/
    pages/
      about-page.php
      contact-page.php
      video-page.php
```

When you using `template` key you can get a better structure of all pages type you are using and which template file it used.

When creating a new page you will get a new view before you get the edit view for your page where you should choose which page type to use. This will happen for all post types that uses page types.

### box method

This method is used to register all properties, tabs and remove meta boxes as described above.

The box method can has callable method as the second argument that returns a array with properties or tabs.

Read more about that under [box section](/docs/box.html).

### Display method

```php
<?php

/**
 * Example of `display` method.
 *
 * @param  string $post_type
 *
 * @return bool
 */
public function display( $post_type ) {
  return $post_type === 'post';
}
```

This method is use to tell if the page type should be display or not on `Add New Page` page.

The method will take a `$post_type` argument. This is useful when the page type is register one more then one post type.

Returning anything else then true will hide the page type.

Default value is `true`.

### Remove method

```php
<?php

/**
 * Example of `remove` method.
 */
public function remove() {
  return ['commentsdiv', 'editor'];
}
```

Since 3.0.0 the remove method is removed and replace with a new remove method where you returns a string or array of strings of the post type support or meta box id that should be removed. You can remove both post type support and meta boxes with `remove.` This is because we removed one of the calls to `register` method so the boxes isn't loaded twice. Read more about this in the upgrade guide.

Check out [remove_post_type_support](http://codex.wordpress.org/Function_Reference/remove_post_type_support#Parameters) for right post type support or [remove_meta_box](https://codex.wordpress.org/Function_Reference/remove_meta_box#Parameters) for meta box slugs.

## Namespaces

```php
<?php

namespace Foo\Bar;

/**
 * Example of a page type with namespace.
 */
class Test_Page_Type extends \Papi_Page_Type {}
```

Papi has no problem to work with page types that have namespaces.
