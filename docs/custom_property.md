---
title: Custom property
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
// type: stringx
class Papi_Property_Stringx extends Papi_Property {}

// type: image_video
class Papi_Property_Image_Video extends Papi_Property {}
```

Example bootstrap and property class:

The html method is the important one, without that there aren't going to be any property output in WordPress admin.

Read more about the `Papi_Property` in the [class documentation](apigen/class-Papi_Property.html).

```php
<?php

// bootstrap.php, only required in a plugin, load class direct in theme.
add_action( 'papi/init', function () {
  require_once __DIR__ . '/class-papi-property-stringx.php';
} );

// class-papi-property-stringx.php

/**
 * Papi - Custom string property
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

## Convert type

A property has a convert type that describes how it will be prepared before converting the value from the database to the application. By default this value is `string` and that will try to convert the database value to a string, so if you doing a property that will store a array and the convert type is `string` you will get a empty value, changing the convert type to `array` will bypass the string conversion.

```php
class Papi_Property_Example extends Papi_Property {

  /**
   * The convert type.
   *
   * @var string
   */
  public $convert_type = 'array';

}
```
