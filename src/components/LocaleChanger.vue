<template>
  <div class="locale-changer">
    <form class="form-inline">
      <img :src="require('@/assets/icons/outline-language-24px@2x.svg')" class="icon" />
      <select class=
      "form-control form-control-sm locale-changer-select custom-select custom-select-sm"
      v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`"
        :value="lang" @click="changeLocale(lang)">{{ languageName(lang) }}</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: this.$i18n.availableLocales,
    };
  },
  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
      this.$router.push({
        name: this.$route.name,
        params: { locale: this.$i18n.locale },
        query: this.$route.query,
      });
    },
    languageName(lang) {
      switch (lang) {
        case 'en':
          return 'English';
        case 'es':
          return 'Español';
        default:
          return lang;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.locale-changer-select {
  width: auto;
  border: 0;
  font-size: 0.75rem;
}
</style>
