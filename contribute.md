---
layout: page
title: Contribute
permalink: /contribute/
---

Everyone is welcome to contribute with patches, bug-fixes and new features.

## Ideas

If you have a idéa the easiest way is to create a issue on [GitHub](https://github.com/wp-papi/papi/issues).

## Bugs

Before you submit a bug issue you should be able to run the tests that the project has. Then you know if the tests works or not.

When you submit a bug issue you should write which browser you are using since Papi contains front-end code and not only back-end code.

If a test fails you should tell which one so it's easier to know what the bug is about.

Try to be as detailed as possible in your bug issue so we can help you better with the issue.

**Please** write how to reproduce the bug.

## Pull requests

Good pull requests—patches, improvements, new features—are are allways welcome. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request.

**Please follow** the projects code style. The projects PHP code should be following the [WordPress code standard](https://make.wordpress.org/core/handbook/coding-standards/php/) and allways use brackets.

1. Fork [wp-papi/papi](https://github.com/wp-papi/papi) on Github and add the upstream remote.

{% highlight python %}

git clone https://github.com/<your-username>/papi.git

cd papi

git remote add upstream https://github.com/wp-papi/papi.git

{% endhighlight %}

This is useful if you cloned your repo a while ago and want's to updated it.

{% highlight python %}

git checkout master
git pull upstream master

{% endhighlight %}

2. Create a new branch:

{% highlight python %}

git checkout -b <my_branch>.

{% endhighlight %}

3. Commit your changes to your fork.
4. Push to your branch:

{% highlight python %}

git push origin <my_branch>

{% endhighlight %}


5. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
with a clear title and description against the `wip-*` branch.

**Note:**
If you are making several changes at once please divide them into multiple pull requests.

## License

By contributing your code, you agree to license your contribution under the [MIT license](https://github.com/wp-papi/papi/blob/master/LICENSE).
