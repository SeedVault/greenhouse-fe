<template>
<div>
  <b-navbar toggleable="lg" class="d-md-none">
    <b-navbar-brand><logo /></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nav-menu-item
          v-for="item in menu()"
          v-bind:key="item.id"
          v-bind:text="item.text"
          v-bind:icon="item.icon"
          v-bind:target="item.target"
          v-bind:url="item.url"
          v-bind:type="item.type"
          v-bind:style="item.styles"
          ></nav-menu-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <div class="container-fluid min-vh-100 d-flex flex-column">

    <div class="row flex-fill">
      <div class="col-sm-12 col-md-3 col-xl-2 d-none d-md-block">
        <aside class="py-3 mb-4 mt-2">
          <div class="p-2">
            <div class="ml-1 mb-2">
              <logo />
            </div>
            <div class="d-flex flex-row align-items-center mb-3 mt-5">
              <div class="">
                <img
                  class="user-picture align-self-start mr-2 rounded-circle"
                  :src="user.picture" />
              </div>
              <div class="ml-1">
                <div class="user-username text-truncate">{{ user.username }}</div>
                <div class="user-email text-black-50 text-truncate">{{ user.email }}</div>
              </div>
            </div>
          </div>

          <ul class="nav flex-column mt-3">
            <app-menu-item
              v-for="item in menu()"
              v-bind:key="item.id"
              v-bind:text="item.text"
              v-bind:icon="item.icon"
              v-bind:target="item.target"
              v-bind:url="item.url"
              v-bind:type="item.type"
              v-bind:style="item.styles"
            ></app-menu-item>
          </ul>

        </aside>
      </div>

      <div class="col-sm-12 col-md-9 col-xl-10">
        <main class="py-3">
          <slot name="main"/>
        </main>
      </div>
    </div>

     <footer class="py-3">
      <div class="row">
        <div class="col-sm-6">
          <locale-changer />
        </div>
        <div class="col-sm-6">
          <div class="d-flex justify-content-sm-end form-control-sm pl-0">
            <router-link class="text-dark mr-4" :to="{ name: 'legal-privacy'}">
            {{ $t('common.privacy') }}</router-link>
            <router-link class="text-dark" :to="{ name: 'legal-terms'}">
            {{ $t('common.terms') }}</router-link>
          </div>
        </div>
      </div>
    </footer>

  </div>
  </div>
</template>

<script>
import AppMenuItem from 'seed-theme/src/components/AppMenuItem.vue';
import NavMenuItem from 'seed-theme/src/components/NavMenuItem.vue';
import Logo from 'seed-theme/src/components/Logo.vue';
import LocaleChanger from 'seed-theme/src/components/LocaleChanger.vue';
import { reactive, toRefs, computed } from '@vue/composition-api';

export default {
  name: 'AppPage',
  components: {
    AppMenuItem,
    Logo,
    LocaleChanger,
    NavMenuItem,
  },
  setup(props, context) {
    const data = reactive({
      loading: false,
      user: computed(() => context.root.$store.getters.user),
    });

    function menu() {
      return context.root.$store.getters.menu;
    }

    document.body.style = 'background-color: #f7f8f9;';

    return {
      ...toRefs(data), menu,
    };
  },
};
</script>

<style lang="scss" scoped>

.user {
  &-picture {
    width: 35px;
    height: 35px;
  }

  &-username {
    font-size: 16px;
    line-height: 1.5rem;
  }

  &-email {
    font-size: 12px;
    line-height: 1rem;
  }
}

@media (min-width: 576px) {
/*  .boxed-width {
    width: 375px;
  } */
}

</style>
