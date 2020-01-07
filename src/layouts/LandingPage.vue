<template>
  <public-page>
    <template v-slot:main>
    <div class="row align-items-center">
      <div class="col-12 col-md-5 col-lg-6 order-md-2">
        <img class="img-fluid mb-4" src="/images/home-picture.svg?data" />
      </div>
      <div class="col-12 col-md-7 col-lg-6 order-md-1">
        <router-view/>
        <h1 class="display-1 text-dark text-center text-md-left">
          <slot name="title"></slot>
        </h1>
        <h5 class="text-black-50 font-weight-normal mb-4 text-center text-md-left">
          <slot name="subheadline"></slot>
        </h5>
        <router-link :to="{ name: actionRoute }"
          class="btn btn-primary btn-lg w-xs-100 mx-auto mx-md-0">
          <slot name="call_to_action"></slot>
          <img src="../assets/icons/arrow-right-white.svg?data"
            class="d-none d-inline ml-2"/>
        </router-link>
        <div class="mt-5 text-dark text-justify smallest-text">
          <div class="text-uppercase">
            <strong>{{ $t('home.disclaimer') }}</strong>
          </div>
          <p>{{ $t('home.disclaimer_text') }}</p>
        </div>
      </div>
    </div>
    </template>
  </public-page>
</template>

<script>
import PublicPage from 'seed-theme/src/layouts/PublicPage.vue';

export default {
  name: 'LandingPage',
  components: {
    PublicPage,
  },
  props: ['actionRoute'],
};
</script>
