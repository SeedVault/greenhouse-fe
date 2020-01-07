<template>
  <div class="container min-vh-100 d-flex flex-column">

    <header class="py-3">
      <span>
        <router-link class="cursor-pointer" style="width: auto" :to="{ name: 'home'}">
          <logo />
        </router-link>
      </span>
    </header>


    <main class="py-3 flex-fill">
      <slot name="main"/>
    </main>

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
</template>

<script>
import LocaleChanger from 'seed-theme/src/components/LocaleChanger.vue';
import Logo from 'seed-theme/src/components/Logo.vue';

export default {
  name: 'PublicPage',
  components: {
    LocaleChanger,
    Logo,
  },
};
</script>
