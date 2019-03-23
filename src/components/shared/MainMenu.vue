<template lang="pug">
  nav#main-menu
    .container.row.mx-auto.px-0
      router-link.text-center.py-3.px-0(
        to="/"
        exact
        active-class="active"
      )
        box-icon/
        span Timer
      router-link.text-center.py-3.px-0(
        to="/history"
        exact
        active-class="active"
      )
        clock-icon/
        span History
      router-link.text-center.py-3.px-0(
        to="/stats"
        exact
        active-class="active"
      )
        bar-chart-2-icon/
        span Stats
      router-link.text-center.py-3.px-0(
        to="/settings"
        exact
        active-class="active"
      )
        settings-icon/
        span Settings
</template>

<script>
import {
  BarChart2Icon,
  SettingsIcon,
  ClockIcon,
  BoxIcon
} from 'vue-feather-icons'

export default {
  name: 'MainMenu',
  components: {
    BarChart2Icon,
    SettingsIcon,
    ClockIcon,
    BoxIcon
  }
}
</script>

<style lang="scss" scoped>
#main-menu {
    box-shadow: 0 4px 20px 0 rgba(#000, .25);
  .container {
    a {
      transition: all 300ms ease;
      transform: translate(0);
      flex: 1;
      &:hover, &.active {
        text-decoration: none;
        &:after {
          border-radius: 0;
          height: 100%;
        }
        svg {
          height: 1.25rem;
        }
        span {
          font-size: .75rem;
        }
      }
      &:after {
        transition: all 300ms ease;
        border-radius: 50% 50% 0 0;
        background: currentColor;
        position: absolute;
        opacity: .05;
        z-index: -1;
        content: '';
        width: 100%;
        height: 0;
        bottom: 0;
        left: 0;
      }
      svg {
        transition: all 300ms ease;
        stroke-width: 1;
        height: 2rem;
      }
      span {
        transition: all 300ms ease;
        display: block;
        font-size: 0rem;
      }
    }
  }
}
</style>
