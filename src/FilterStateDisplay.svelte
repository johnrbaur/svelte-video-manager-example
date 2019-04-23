<script>
  import { regions, dateFrom, dateTo, minor, adults, middleAged, retired } from './store.js';
</script>

<div>
  <span>Region:</span>
  <div class="chip">{$regions}</div>

  <span
    >Date Range:
    <div class="chip">
      {$dateFrom}
    </div>
    <div class="chip">
      {$dateTo}
    </div>
  </span>

  <span>
    Age Groups:
    {#if $minor}
    <span class="chip">
      Minors
    </span>
    {/if}
    {#if $adults}
    <span class="chip">
      Adults
    </span>
    {/if}
    {#if $middleAged}
    <span class="chip">
      Middle Aged
    </span>
    {/if}
    {#if $retired}
    <span class="chip">
      Retired
    </span>
    {/if}
  </span>
</div>
