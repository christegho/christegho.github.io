
* I am a machine learning engineer with focus on computer vision, and extensive experience in language modeling, and generative models. I have executed challenging tasks throughout entire pipelines, from dealing with small amounts of data (as little as 10 training data points) all the way to deploying ML models that serve thousands of requests per second.

* I am currently working at [Calipsa](calipsa.io), focusing on deep learning for video analytics. I have also worked with organisations, artists and scientists supporting applying ML for their work.

* My interests are in Bayesian neural networks, reinforcement learning, meta reinforcement learning, variational inference and computer vision (video recognition, few shot learning, object and movement detection).

* I completed my Masters in machine learning at the University of Cambridge, in August 2017. For my thesis, I worked on improving uncertainty estimates in deep reinforcement learning, through Bayes By Backprop, for the application of dialogue systems.

### Projects ###
<article class="container-posts">
  {% for post in site.posts %}
  <div class="posts-list-item">
    <span class="posts-list-item-name float-left">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </span>
    <span class="posts-list-item-date float-right">
      {{ post.date | date: '%Y' }}
    </span>
  </div>
  {% endfor %}
  {% if paginator.total_pages > 1 %}
  <div class="list-pagination">
    {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="float-left">
      {{ site.data.lang[site.language].paginator_previous }}
    </a>
    {% endif %}
    <span class="page_number">
      {{ site.data.lang[site.language].paginator_pages }}{{ paginator.page }} / {{ paginator.total_pages }}
    </span>
    {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="float-right">
      {{ site.data.lang[site.language].paginator_next }}
    </a>
    {% endif %}
  </div>
  {% endif %}
</article>
