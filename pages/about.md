---
layout: page
title: About
permalink: /about/
---

{% capture my_include %}{% include_relative about_content.md %}{% endcapture %}
{{ my_include | markdownify }}