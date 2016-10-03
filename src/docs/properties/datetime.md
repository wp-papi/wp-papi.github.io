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
format       | YYYY-MM-DD hh:mm:ss | The format for which to save the data
show_seconds | false               | When true show seconds in the time selector
show_time    | true                | When true show the time selector
use_24_hours | false               | Whether or not to use the 24 hour clock
