<style>
    * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

.header {
  text-align: center;
  padding: 32px;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 33%; /* IE10 */
  flex: 33%;
  max-width: 33%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

</style>
I am a machine learning engineer with focus on computer vision, language modeling, and generative models. I am interested in the intersection of art and machine learning, and have worked with organisations, artists and scientists applying ML to their work.
<br/><br/>
I have executed challenging tasks throughout entire pipelines, from dealing with small amounts of data (as little as 10 training data points) all the way to deploying ML models that serve thousands of requests per second.
<br/><br/>
My research interests are in **Bayesian neural networks**, **few shot learning**, **variational inference** and computer vision (**video understanding**, **object and movement detection**).
<br/><br/>
I completed my Masters in machine learning at the University of Cambridge, in August 2017. 

<br/><br/>
You can email me at christegho [at] gmail [dot] com.

<br/><br/>
<div class="row"> 
  <div class="column">
    <a href="/calipsa"><img src="/assets/images/calipsa/calipsa.gif" style="width:100%"></a>
    <a href="/the-doors"><img src="/assets/images/thedoors/zachblas_the-doors_GAN-LSD.jpg" style="width:100%"></a> 
    <a href="/cad-conspiracy"><img src="/assets/images/cad.jpg" style="width:100%"></a>
<!--       <a href="/serafin"><img src="/assets/images/serafin/im_1.jpg" style="width:100%"></a> -->
      
    
  </div>
  <div class="column">
    <a href="/fa"><img src="/assets/images/fa/can1.jpg" style="width:100%"></a>
    <a href="/the-doors"><img src="/assets/images/thedoors/zachblas_the-doors_california-glass-architecture.jpg" style="width:100%"></a>
    <a href="/fa"><img src="/assets/images/can3.jpg" style="width:100%"></a>
    <a href="/calipsa"><img src="/assets/images/calipsa/calipsa2.jpg" style="width:100%"></a>
<!--       <a href="/serafin"><img src="/assets/images/serafin/im_7.jpg" style="width:100%"></a> -->
    
  </div>  
  <div class="column">
    <a href="/the-doors"><img src="/assets/images/thedoors/zachblas_the-doors_GAN-brains-and-neural-networks3.jpg" style="width:100%"></a>
    <a href="/xinnn"><img src="/assets/images/xin.jpg" style="width:100%"></a>
    <a href="/fa"><img src="/assets/images/fa4.jpeg" style="width:100%"></a>
<!--       <a href="/serafin"><img src="/assets/images/serafin/im_2.jpg" style="width:100%"></a> -->
      
<!--     <img src="/assets/images/thedoors/zachblas_the-doors_GAN-brains-and-neural-networks3.jpg" style="width:100%"> -->
    
  </div>
</div>


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
