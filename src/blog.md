---
title: Blog posts
layout: base
tags: primary
pagination:
    data: collections.blog
    size: 2
    alias: items
---
{%- for post in items %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}

<p>{% if page.url != pagination.href.first %}<a href="{{ pagination.href.first }}"><button class="outline">First page</button></a>{% else %}First page{% endif %} - {% if pagination.href.previous %}<a href="{{ pagination.href.previous }}"><button class="outline">Previous</button></a>{% else %}Previous{% endif %} - This is page {{ pagination.pageNumber | plus: 1 }} - {% if pagination.href.next %}<a href="{{ pagination.href.next }}"><button class="outline">Next</button></a> {% else %} Next{% endif %} - {% if page.url != pagination.href.last %}<a href="{{ pagination.href.last }}"><button class="outline">Last page</button></a>{% else %}Last page{% endif %}</p>