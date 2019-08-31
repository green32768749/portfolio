<template>
  <div id="footer">
    <ul class="copyright">
      <li>Copyright &copy; 圖片屬於 <a href="https://www.facebook.com/people/Lin-Lynn/100010045894625">Lin Lynn</a> 版權所有</li>
      <li>
        程式碼授權方式與原版相同，樣板來自
        <a href="http://html5up.net">HTML5 UP</a>
      </li>
      <li><a href="https://github.com/sheiun/">@SheiUn</a> 使用 <a href="https://vuejs.org/">Vue</a> 改寫</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
@import "../assets/sass/libs/vendor";
@import "../assets/sass/breakpoints";

#footer {
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  padding: 2em 0 0 0;
  font-size: 0.75em;

  a {
    color: #ddd;
    color: rgba(255, 255, 255, 0.65);
    @include vendor("transition", "color .25s ease-in-out");

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }

  .copyright {
    list-style: none;
    padding-left: 0;

    li {
      display: inline-block;
      padding-left: 1em;
      margin-left: 1em;
      border-left: solid 1px rgba(255, 255, 255, 0.25);
      line-height: 1;

      &:first-child {
        padding-left: 0;
        margin-left: 0;
        border-left: 0;
      }
    }
  }

  @include breakpoint("<=small") {
    .copyright {
      li {
        padding-left: 0.5em;
        margin-left: 0.5em;
      }
    }
  }
}
</style>