<template>
  <public-page>
    <template v-slot:main>

      <div class="row">
        <div class="col-12 col-md-5 col-lg-3 border-right mb-4">
          <div class="list-group list-group-flush">
            <router-link :to="{ name: 'legal-terms'}"
            class="list-group-item list-group-item-action">
              {{ $t('legal.tos.terms_of_service') }}
            </router-link>
            <router-link :to="{ name: 'legal-privacy'}"
            class="list-group-item list-group-item-action">
              {{ $t('legal.privacy.privacy_policy')}}
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-7 col-lg-9">
          <slot/>
        </div>
      </div>

    </template>
  </public-page>
</template>

<script>
import PublicPage from 'seed-theme/src/layouts/PublicPage.vue';

export default {
  name: 'LegalPage',
  components: {
    PublicPage,
  },
};
</script>
