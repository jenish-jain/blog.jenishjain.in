---
layout: post-list

slug: posts
description: >
    I like to share my learnings, process of building something with others. I am not a regular writer but you can expect something rolling every few months ;)
---

<div class="post-previews">
  {% for post in collections.posts %}
  <div class="post-preview" style="--bg-image: url({{post.data.seo_title | seoImage}})">
    <img src="{{post.data.thumb}}" alt='{{ post.data.title }}' class='post-preview' loading='lazy' width=250 height=125/>
    {% if post.data.url%}
    <h2><a href="{{post.data.url}}">{{ post.data.title }}</a></h2>
    {% else %}
    <h2><a href="/{{post.data.slug}}/">{{ post.data.title }}</a></h2>
     {% endif %}
    <p class="description">{{ post.data.description }}</p>
    <span aria-hidden="true">read this post &rarr;</span>
  </div>
  {% endfor %}
</div>
