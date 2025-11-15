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
    <h2><a href="{{post.data.url}}" target="_blank" rel="noopener noreferrer">{{ post.data.title }}</a></h2>
    {% else %}
    <h2><a href="/{{post.data.slug}}/">{{ post.data.title }}</a></h2>
     {% endif %}
    <p class="description">{{ post.data.description }}</p>
    <span aria-hidden="true">read this post &rarr;</span>
  </div>
  {% endfor %}
</div>

<div style="text-align: center; margin-top: 3rem;">
  <a href="/tags/" style="
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--color-background);
    border: 2px solid var(--color-primary);
    border-radius: 0.25rem;
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.2s;
  " onmouseover="this.style.background='var(--color-primary)'; this.style.color='var(--color-background)';" onmouseout="this.style.background='var(--color-background)'; this.style.color='var(--color-primary)';">
    Navigate by tags?
  </a>
</div>
