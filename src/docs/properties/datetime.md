---
title: Datetime
type: properties
---

```php
<?php

/**
 * Example of datetime.
 */

papi_property( [
  'title'    => 'Datetime',
  'slug'     => 'my_datetime_slug',
  'type'     => 'datetime'
] )

/**
 * Example output.
 */

string '2014-11-21'
```

### Description

The date property has a picker build in using [Pikaday](https://github.com/owenmead/Pikaday) with time support.

### Settings

Key          | Default             | Description
-------------|---------------------|------------------------------------------
format       | YYYY-MM-DD hh:mm:ss | Show the text input
show_seconds | false               | Array with hex colors
show_time    | true                | Array with hex colors
use_24_hours | false               | Array with hex colors
