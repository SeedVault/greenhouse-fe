<template>
  <div class="layout-container">
    <b-container fluid>
      <b-form-row align-v="center">
        <b-col md="2">
          <div class="sidebar">
            <!-- <center>
              <img class="sidebar__logo" :src="logo" />
            </center> -->

            <div class="sidebar__profile media" style="margin-top: 37px;margin-bottom: 40px;">
              <img class="align-self-start mr-3" :src="logoImage" style="margin-left:5px;width:30px;height:30px" />
              <div class="media-body">
                <!-- <img class="" src="/images/logo_separator.png" style="floating:right;width: 1px; height:30px;margin-right: 5px;"/> -->
                <img class="" :src="logoText" :style="logoTextStyle" />
              </div>
            </div>

            <div class="sidebar__profile media">
              <template v-if="user.picture != ''">
                <img class="align-self-start mr-3 rounded-circle" :src="user.picture" />
              </template>
              <template v-else>
                <img class="align-self-start mr-3 rounded-circle" src="@/assets/images/avatar@2x.svg" />
              </template>
              <div class="media-body">
                <div class="sidebar__profile--username">{{ user.username }}</div>
                <div class="sidebar__profile--email">{{ user.email }}</div>
              </div>
            </div>

            <div class="sidebar__menu">

              <ul class="nav flex-column">
                <app-menu-item
                  v-for="item in menu"
                  v-bind:key="item.id"
                  v-bind:text="item.text"
                  v-bind:icon="item.icon"
                  v-bind:target="item.target"
                  v-bind:url="item.url"
                  v-bind:type="item.type"
                  v-bind:style="item.styles"
                ></app-menu-item>
              </ul>

              <ul class="nav flex-column sidebar__menu--divider">
                <li class="nav-item">
                  <a class="nav-link" href="/auth/logout">
                    <img src="@/assets/icons/outline-exit_to_app-24px@2x.svg" />
                    {{ $t('app.sign_out') }}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </b-col>

        <b-col md="10">
          <!-- <font-awesome-icon :icon="['fas', 'user-circle']" /> -->
          <template v-if="$route.matched.length">
            <!-- <transition name="fade" mode="out-in"> -->
              <div class="container-fluid workspace">
                <!-- <router-view></router-view> -->
                 <slot/>
              </div>
            <!-- </transition> -->
          </template>
          <template v-else>
            <center>
              <h1>You are logged {{ loggedIn ? 'in' : 'out' }}</h1>
            </center>
          </template>

        </b-col>
      </b-form-row>

    </b-container>
  </div>
</template>

<script>
import AppMenuItem from 'seed-theme/src/components/AppMenuItem.vue';
export default {
  name: 'AppLayout',
  components: {
    AppMenuItem,
  },
  mounted () {
    document.body.className = 'body-gray'
  },
  beforeDestroy () {
    document.body.className = ''
  },
  methods: {
    seedAppUrl(url) {
      return url;
      //return `${url}/${this.lang}`;
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    menu () {
      return this.$store.getters.menu
    },
    logo() {
      return this.$store.getters.logo
    },
    logoImage() {
      return this.$store.getters.logoImage
    },
    logoText() {
      return this.$store.getters.logoText
    },
    logoTextStyle() {
      return `padding-left:5px;height:30px;width:${this.$store.getters.logoTextWidth};`;
    },
    lang() {
      return this.$store.getters.lang
    },
  },
}
</script>

<style lang="scss" scoped>

  .layout-container {
    height:100%;
  }

  .sidebar {

    &__logo {
      padding-left: 20px;
      margin-top: 37px;
      margin-bottom: 40px;
    }

    &__profile {
      padding-left: 10px;
      margin-bottom: 50px;

      img {
        width: 40px;
        height: 40px;
        float: left;
      }

      &--email {
        font-size: 12px;
        line-height: 18px;
      }

      &--username {
        font-size: 20px;
        line-height: 24px;
      }
    }

    &__menu {
      a {
        font-size: 16px;
        padding: 13px 20px 13px 20px;
        color: #686b77;
        img {
          padding-right: 10px;
          width: 28px;
          text-align: right;
        }

        &.active {
          background: rgba(107,76,159,.15);
          border-radius: 8px;
          color: #6b4c9f;
          font-weight: 500;
          img {
            filter: invert(38%) sepia(13%) saturate(2389%) hue-rotate(221deg) brightness(75%) contrast(92%);
          }
        }

        &:hover {
          color: #6b4c9f;
          font-weight: 500;
          img {
            filter: invert(38%) sepia(13%) saturate(2389%) hue-rotate(221deg) brightness(75%) contrast(92%);
          }
        }
      }

      &--divider {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #dedfe0;
        margin-bottom: 20px;
      }
    }

  }

  .workspace {
    min-height: 80%;
    margin-top: 20px;
    @media (min-width: 576px) {
      padding-left: 20px;
    }
  }

</style>
