<script>
	import VideoList from './VideoList.svelte';
	import VideoDisplay from './VideoDisplay.svelte';
	import ViewsFilter from './ViewsFilter.svelte';
	import ViewsBreakdown from './ViewsBreakdown.svelte';
</script>

<style>
  .container {
    max-width: 95% !important;
    width: 95% !important;
  }
</style>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</svelte:head>

<div class="container">
  <div class="row">
    <div class="col s3">
      <VideoList />
    </div>
    <div class="col s6">
      <div class="row">
        <div class="col s12">
          <VideoDisplay />
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <ViewsBreakdown />
        </div>
      </div>
    </div>
    <div class="col s3">
      <ViewsFilter />
    </div>
  </div>
</div>
