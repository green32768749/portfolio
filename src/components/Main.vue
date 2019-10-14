<template>
  <div id="main">
    <article
      v-if="panelShow"
      :id="this.$store.state.bookmark"
      :class="{ intro: this.$store.state.bookmark === 'home' }"
      class="panel"
    >
      <header v-html="$store.getters.bookmark.header"></header>

      <a
        @click="$store.commit('go', 'work')"
        v-if="this.$store.state.bookmark === 'home'"
        href="#"
        class="jumplink pic"
      >
        <img :src="require('@/images/me.png')" alt />
      </a>

      <section v-if="this.$store.state.bookmark != 'home'">
        <p>
          <span
            class="tab"
            @click="go(tab)"
            :key="tab"
            v-for="tab in Object.keys($store.getters.bookmark.tabs)"
          >
            <i
              class="icon fa-star"
              :class="{ solid: $store.state.tab == tab }"
            ></i>
            {{ $store.getters.bookmark.tabs[tab].title }}
          </span>
        </p>
        <transition name="fade">
          <div class="row" v-if="imageShow">
            <Picture
              :key="index"
              v-for="(item, index) in $store.state.current.images"
              :src="item[1]"
              :click="() => showAlbum(index)"
            />
          </div>
        </transition>
        <VueEasyLightbox
          :index="index"
          :visible="albumShow"
          :imgs="getImages()"
          @hide="
            () => {
              this.albumShow = false;
            }
          "
        ></VueEasyLightbox>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import Picture from './Picture.vue';
import VueEasyLightbox from 'vue-easy-lightbox';

@Component({
  components: {
    Picture,
    VueEasyLightbox,
  },
})
export default class Main extends Vue {
  public panelShow = true;
  public imageShow = true;
  public albumShow = false;
  public index = 0;

  public getImages() {
    return this.$store.state.current.images.map((item: any[]) => {
      // NOTE: depends on google app scripts data structure.
      return item[1];
    });
  }

  public go(location: string) {
    this.$store.commit('go', location);
  }

  public mounted() {
    this.loadImage();
    this.$store.watch(
      (state) => state.tab,
      () => {
        this.loadImage();
      },
    );
  }

  public showAlbum(index: number) {
    this.index = index;
    this.albumShow = true;
  }

  public getTitle() {
    const tab = this.$store.getters.safeTab;
    let title = '原創';
    if (tab) {
      title = tab.title;
    }
    return title;
  }

  public loadImage(key: string = 'QAZQAZWFR@R') {
    const loader = this.$loading.show();
    const name = this.getTitle();
    this.imageShow = false;
    fetch(
      `https://script.google.com/macros/s/AKfycbx2nKhxh5IiPSkI6dsAxNtyRN67wvpAmnK4WETy15BcRJ2VhdHC/exec?key=${key}&name=${name}`,
    )
      .then((res) => res.json())
      .then((jsonArr) => {
        this.$store.state.current.images = jsonArr;
        this.imageShow = true;
        loader.hide();
      });
  }
}
</script>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
@import "@/assets/sass/libs/_vendor";
@import "@/assets/sass/breakpoints";

#main {
  position: relative;
  overflow: hidden;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
  @include vendor(
    "transition",
    ("min-height 0.5s ease-in-out", "max-height 0.5s ease-in-out")
  );

  > .panel {
    @include vendor("transition", "opacity 0.25s ease-in-out");
    margin-bottom: 0;
    position: relative;
    padding: 3.5em 2.5em 2.5em 2.5em;
    width: 100%;

    &.inactive {
      opacity: 0;
    }

    @include breakpoint("<=small") {
      padding: 2em 1.5em 1.5em 1.5em;
    }

    &.intro {
      padding: 0;
      height: 20em;
      @include vendor("display", "flex");
      @include vendor("flex-direction", "row");
      @include vendor("align-items", "center");

      .pic {
        text-decoration: none;
        position: relative;
        @include vendor("flex-grow", "0");
        @include vendor("flex-shrink", "0");
        width: 17em;
        height: 100%;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: require('@/images/overlay.png');
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        img {
          position: relative;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          @include vendor("object-fit", "cover");
          @include vendor("object-position", "center");
        }

        .arrow {
          display: block;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -1.375em;
          width: 2.75em;
          height: 2.75em;
          background: #000;
          background: rgba(0, 0, 0, 0.75);
          color: #ffffff;
          text-align: center;
          line-height: 2.75em;
          font-size: 1.5em;
          z-index: 1;
          @include vendor(
            "transition",
            ("width .15s ease-in-out", "padding-right .15s ease-in-out")
          );

          &:before {
            position: relative;
            padding-right: 0;
            top: 0.125em;
          }

          span {
            display: block;
            text-indent: -9999px;
          }
        }

        &:hover {
          .arrow {
            width: 3em;
            padding-right: 0.25em;
          }
        }
      }

      header {
        @include vendor("flex-grow", "1");
        @include vendor("flex-shrink", "1");
        padding: 3.5em 2.5em;
        margin-bottom: 0;
        width: 100%;

        h1 {
          line-height: 1.25em;
          margin-bottom: 0;
        }

        p {
          letter-spacing: -0.015em;
          font-size: 1.25em;
          margin: 0.25em 0 0 0;
        }
      }

      @include breakpoint("<=medium") {
        @include vendor("flex-direction", "column");
        height: auto;

        .pic {
          height: 25em;
          width: 100%;
        }

        header {
          padding: 4em;
          text-align: center;
        }
      }

      @include breakpoint("<=small") {
        .pic {
          height: 20em;
        }

        header {
          padding: 2.75em 2em 2.5em 2em;

          p {
            font-size: 1em;
            margin: 0.25em 0 0 0;
          }
        }
      }
    }
  }
}

.tab {
  cursor: pointer;
  margin-right: 1vw;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style> 