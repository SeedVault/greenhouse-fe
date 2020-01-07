<template>
  <form class="form-inline d-flex flex-row">
    <div>
      <img src="../assets/icons/language.svg?data" />
    </div>
    <div>
      <select class="form-control form-control-sm custom-select
      custom-select-sm cursor-pointer border-0 no-background"
      v-model="$i18n.locale">
        <option v-for="(locale, i) in locales" :key="`locale${i}`"
        :value="locale" @click="changeLocale(locale)">{{ languageName(locale) }}</option>
      </select>
    </div>
  </form>
</template>

<script>

import { ref } from '@vue/composition-api';

export default {
  setup(props, context) {
    const locales = ref(context.root.$i18n.availableLocales);

    function changeLocale(locale) {
      context.root.$i18n.locale = locale;
      // store local into a cookie
      const myDate = new Date();
      myDate.setMonth(myDate.getMonth() + 120);
      document.cookie = `locale=${locale};expires=${myDate};domain=.${window.location.hostname};path=/`;
      // change current route
      context.root.$router.push({
        name: context.root.$route.name,
        params: { locale: context.root.$i18n.locale },
        query: context.root.$route.query,
      });
    }

    function languageName(locale) {
      switch (locale) {
        case 'en':
          return 'English';
        case 'es':
          return 'Español';
        default:
          return locale;
      }
    }

    return {
      locales, changeLocale, languageName,
    };
  },
};
</script>

<style lang="scss" scoped>
.no-background {
  background-color: transparent;
}
</style>
