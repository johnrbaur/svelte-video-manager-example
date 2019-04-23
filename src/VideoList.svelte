<script>
  import { videoData } from './video-data.js';
  import { selectedVideo } from './store.js';

  const videos = videoData;
</script>

{#each videos as video}
<div on:click={() => selectedVideo.set(video.id)}>{video.title}</div>
{/each}
