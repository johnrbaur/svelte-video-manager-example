<script>
	import VideoList from "./VideoList.svelte";
	import VideoDisplay from "./VideoDisplay.svelte";
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</svelte:head>

<div class="row">
  <div class="col s3">
    <VideoList />
  </div>
  <div class="col s6">
    <VideoDisplay />
  </div>
  <div class="col s3">
  </div>
</div>
