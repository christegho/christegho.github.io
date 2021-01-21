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
* I am a machine learning engineer with focus on computer vision, and extensive experience in language modeling, and generative models. 
<br/><br/>
* I have executed challenging tasks throughout entire pipelines, from dealing with small amounts of data (as little as 10 training data points) all the way to deploying ML models that serve thousands of requests per second.
<br/><br/>
* I am currently working at [Calipsa](calipsa.io), focusing on deep learning for video understanding. I have also worked with organisations, artists and scientists supporting applying ML for their work.
<br/><br/>
* My interests are in **Bayesian neural networks**, **reinforcement learning**, **meta reinforcement learning**, **variational inference** and computer vision (**video understanding**, **few shot learning**, **object and movement detection**).
<br/><br/>
* I completed my Masters in machine learning at the University of Cambridge, in August 2017. 

<br/><br/>

<div class="row"> 
  <div class="column">
    <img src="/assets/images/calipsa/calipsa.gif" style="width:100%">
    <img src="/assets/images/thedoors/zachblas_the-doors_GAN-LSD.jpg" style="width:100%">
    
  </div>
  <div class="column">
    <img src="/assets/images/fa/can1.jpg" style="width:100%">
    <img src="/assets/images/thedoors/zachblas_the-doors_california-glass-architecture.jpg" style="width:100%">
    
  </div>  
  <div class="column">
    <img src="/assets/images/thedoors/zachblas_the-doors_GAN-brains-and-neural-networks3.jpg" style="width:100%">
<!--     <img src="/assets/images/thedoors/zachblas_the-doors_GAN-brains-and-neural-networks3.jpg" style="width:100%"> -->
    
  </div>
  <div class="column">
    <img src="/assets/images/thedoors/zachblas_the-doors_california-glass-architecture.jpg" style="width:100%">
<!--     <img src="/w3images/ocean.jpg" style="width:100%"> -->
 
  </div>
</div>


<!-- <div class="grid_gallery gallery cf" data-featherlight-gallery="" data-featherlight-filter="a.gallery" style="position: relative;height: 750px;">
<div class="grid-item" style="position: relative; left: 20%; top: 0px;">
<a href="" class="gallery" data-featherlight="image"><img src="/assets/images/calipsa/calipsa.gif" alt="The Doors" style="height: 300px">
<p class="wp-caption-text">Calipsa</p></a>
</div>

<div class="grid-item" style="position: absolute; left: -20%; top: 10px;">
<a href="" class="gallery" data-featherlight="image"><img src="/assets/images/thedoors/zachblas_the-doors_GAN-LSD.jpg" alt="The Doors" style="width: 40%">
<p class="wp-caption-text">The Doors (2020)</p></a>
</div>
    
<div class="grid-item" style="position: absolute; left: 1%; top: 280px;">
<a href="" class="gallery" data-featherlight="image"><img src="/assets/images/fa/can1.jpg" alt="The Doors" style="width: 500px">
<p class="wp-caption-text">Forensic Architecture</p></a>
</div>
    
<div class="grid-item" style="position: absolute; left: 60%; top: 280px;">
<a href="" class="gallery" data-featherlight="image"><img src="/assets/images/thedoors/zachblas_the-doors_california-glass-architecture.jpg" alt="The Doors" style="width: 340px">
<p class="wp-caption-text">The Doors (2020)</p></a>
</div>


    
<div class="grid-item" style="position: absolute; left: -1%; top: 420px;">
<a href="" class="gallery" data-featherlight="image"><img src="/assets/images/thedoors/zachblas_the-doors_GAN-brains-and-neural-networks3.jpg" alt="The Doors" style="width: 40%"></a>
</div>
</div> -->

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
