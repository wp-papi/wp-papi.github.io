---
title: WP-CLI
type: docs
---

Papi has custom [WP-CLI](http://wp-cli.org) commands since version 3.

```
$ wp papi

usage: wp papi post <command>
   or: wp papi type <command>

See 'wp help papi <command>' for more information on a specific command.
```

## Post command

This command can be used to show which properties a post has and which properties that has a value.

```
$ wp papi post get 1505

+----------+----------+-----------+
| slug     | type     | has value |
+----------+----------+-----------+
| name     | string   | true      |
+----------+----------+-----------+
```

## Term command

This command can be used to show which properties a term has and which properties that has a value.

```
$ wp papi term get 1505

+----------+----------+-----------+
| slug     | type     | has value |
+----------+----------+-----------+
| name     | string   | true      |
+----------+----------+-----------+
```

## Type command

This command can be used to list all types that are registered with Papi, it will list all types and not just page types.

If you use a different type name in your classes when you extended `Papi_Page_Type`, for example `Feature_Module_Type`, the type value in the list will show `module` as value instead of `page`

```
$ wp papi type list

+---------------+--------------------------+------------+----------------------------+-----------------+------------+
| name          | id                       | post_type  | template                   | number of pages | type       |
+---------------+--------------------------+------------+----------------------------+-----------------+------------+
| Article page  | pages/article-page-type  | page       | pages/article-page.php     | 3               | page       |
| List          | options/list-option-type | n/a        | n/a                        | n/a             | option     |
+---------------+--------------------------+------------+----------------------------+-----------------+------------+
```
