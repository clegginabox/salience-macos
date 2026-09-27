import { fetchReleaseData } from './.vitepress/releases.mjs';

export default {
  load: fetchReleaseData,
};
