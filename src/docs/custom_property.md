---
title: Custom property
type: docs
---

It's easy to create your own property with Papi. You can use our [Yo generator](http://github.com/wp-papi/generator-property)

It's important that the class follow the property class name standard in Papi.

```php
<?php

// Bad
class PropertyStringx extends Papi_Property {}

class Property_Stringx extends Papi_Property {}

class Papi_Property_String_x extends Papi_Property {}

// Good
// type: string
class Papi_Property_Stringx extends Papi_Property {}

// type: image_video
class Papi_Property_Image_Video extends Papi_Property {}
```

Example bootstrap and property class:

The html method is the important one, with out that there aren't going to be any property output in WordPress admin.

Read more about the `Papi_Property` in the [class documentation](apigen/class-Papi_Property.html).

```php
<?php

// bootstrap.php
add_action( 'papi/include', function () {
  require_once 'class-papi-property-stringx.php';
} );

// class-papi-property-stringx.php

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

/**
 * Papi - Custom property string
 */

class Papi_Property_Stringx extends Papi_Property {

  /**
   * Get default settings.
   *
   * @return array
   */

  public function get_default_settings() {
    return [
      'allow_html' => false
    ];
  }

  /**
   * Generate the HTML for the property.
   */

  public function html() {
    ?>
      <input type="text" name="<?php echo $this->html_name(); ?>" value="<?php echo $this->get_value(); ?>" />
    <?php
  }

}
```
