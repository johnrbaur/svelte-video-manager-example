<script>
  import { regions, dateFrom, dateTo, minor, adults, middleAged, retired } from './store.js';
  const regionList = ['North America', 'Europe', 'Asia', 'All'];
</script>

<style>
  .region-group,
  .age-group {
    display: flex;
    flex-direction: column;
  }
</style>

<h6>Region</h6>
<section class="region-group">
  {#each regionList as region}
  <label for={region}>
    <input
      class="with-gap"
      type="radio"
      name="region"
      id={region}
      bind:group={$regions}
      value={region} />
    <span>{region}</span>
  </label>
  {/each}
</section>

<h6>Date Range</h6>
<div>
  <label for="dateFrom">From</label>
  <input id="dateFrom" type="date" bind:value={$dateFrom} />
</div>
<div>
  <label for="dateTo">To</label>
  <input id="dateTo" type="date" bind:value={$dateTo} />
</div>

<h6>Age Groups</h6>
<section class="age-group">
  <label for="age1">
    <input type="checkbox" id="age1" bind:checked={$minor} />
    <span> Under 18 </span>
  </label>
  <label for="age2">
    <input type="checkbox" id="age2" bind:checked={$adults} />
    <span> 18 - 40 </span>
  </label>
  <label for="age3">
    <input
      type="checkbox"
      id="age3"
      bind:checked={$middleAged}
    />
    <span> 40 - 60 </span>
  </label>
  <label for="age4">
    <input
      type="checkbox"
      id="age4"
      bind:checked={$retired}
    />
    <span> Over 60 </span>
  </label>
</section>
