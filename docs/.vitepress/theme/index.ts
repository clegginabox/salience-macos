import DefaultTheme from 'vitepress/theme';
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import './custom.css';

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // Screenshots everywhere — docs pages, the landing gallery, the hero.
      mediumZoom('.vp-doc img, .VPHero .image-src', {
        background: 'rgba(0, 0, 0, 0.85)',
      });
    };
    onMounted(initZoom);
    watch(
      () => route.path,
      () => nextTick(initZoom)
    );
  },
};
