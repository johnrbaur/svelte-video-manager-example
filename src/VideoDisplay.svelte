<script>
  import { selectedVideoId } from './store.js';
</script>

<style>
  .video-container {
    margin-top: 10px;
  }
</style>

<div class="video-container z-depth-2">
  {#await $selectedVideoId then videoId}
  <iframe
    title="Selected Video"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/{videoId}"
    frameborder="0"
    allowfullscreen
  ></iframe>
  {/await}
</div>
