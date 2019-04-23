<script>
  import { selectedVideoId, videos } from './store.js';
</script>

<style>
  .title {
    font-size: 24px;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
</style>

<p class="title">Top 5 Preview</p>
<div class="collection">
  {#each $videos as video}
  <a
    class="collection-item"
    on:click={() => selectedVideoId.set(video.id)}
    class:active="{video.id === $selectedVideoId}"
  >
    <img src="http://img.youtube.com/vi/{video.id}/0.jpg" alt={video.title} />
    <p>{video.title} - {video.author}</p>
  </a>
  {/each}
</div>
