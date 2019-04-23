import { readable, writable } from 'svelte/store';
import moment from 'moment';

export const selectedVideoId = writable();
export const regions = writable('All');
export const dateFrom = writable(moment('1995-01-01').format('YYYY-MM-DD'));
export const dateTo = writable(moment().startOf('day').format('YYYY-MM-DD'));
export const minor = writable(true);
export const adults = writable(true);
export const middleAged = writable(true);
export const retired = writable(true);

export const videos = readable([], async set => {
  const videoData = await fetch('https://api.angularbootcamp.com/videos').then(res => res.json());
  set(videoData);
  selectedVideoId.set(videoData[0].id)
});
