import Vue from 'vue';
import 'seed-theme/src/scss/seed.scss';
import { ModalPlugin, NavbarPlugin } from 'seed-theme/node_modules/bootstrap-vue';
import BalanceChart from 'seed-theme/src/components/BalanceChart.vue';
import LatestTransactions from 'seed-theme/src/components/LatestTransactions.vue';
import CenteredErrorBox from 'seed-theme/src/components/CenteredErrorBox.vue';
import DividerBox from 'seed-theme/src/components/DividerBox.vue';
import FullCentered from 'seed-theme/src/components/FullCentered.vue';
import LittleCentered from 'seed-theme/src/components/LittleCentered.vue';
import InputCheckbox from 'seed-theme/src/components/InputCheckbox.vue';
import Icon from 'seed-theme/src/components/Icon.vue';
import InputTextarea from 'seed-theme/src/components/InputTextarea.vue';
import InputText from 'seed-theme/src/components/InputText.vue';
import InputPassword from 'seed-theme/src/components/InputPassword.vue';
import InputSelect from 'seed-theme/src/components/InputSelect.vue';
import InputSelectSmall from 'seed-theme/src/components/InputSelectSmall.vue';
import InputSearch from 'seed-theme/src/components/InputSearch.vue';
import InputSearchSmall from 'seed-theme/src/components/InputSearchSmall.vue';
import LoadingCheckmark from 'seed-theme/src/components/LoadingCheckmark.vue';
import Oops from 'seed-theme/src/components/Oops.vue';
import CustomError from 'seed-theme/src/components/CustomError.vue';
import BackBox from 'seed-theme/src/components/BackBox.vue';
import SimpleBox from 'seed-theme/src/components/SimpleBox.vue';
import ValidationBox from 'seed-theme/src/components/ValidationBox.vue';
import ValidationMessages from 'seed-theme/src/components/ValidationMessages.vue';

Vue.use(ModalPlugin);
Vue.use(NavbarPlugin);

// Register function to normalize mongoose validation messages
Vue.prototype.normalizeErrors = (errors) => {
  const data = [];
  const keys = Object.keys(errors.data.errors);
  const values = Object.values(errors.data.errors);
  for (let i = 0; i < keys.length; i += 1) {
    data[keys[i]] = [{ msg: values[i].message }];
  }
  return data;
};


Vue.mixin({
  methods: {
    showFatalError(error) {
      // context.root.$bvModal.msgBoxOk in API Composition
      return this.$root.$bvModal.msgBoxOk(
        error.response ? this.$root.$i18n.t('common.something_went_wrong')
          : error.message, {
          centered: true,
          title: this.$root.$i18n.t('common.oops'),
        },
      );
    },
  },
});

// Global components
Vue.component('back-box', BackBox);
Vue.component('balance-chart', BalanceChart);
Vue.component('latest-transactions', LatestTransactions);
Vue.component('centered-error-box', CenteredErrorBox);
Vue.component('divider-box', DividerBox);
Vue.component('full-centered', FullCentered);
Vue.component('little-centered', LittleCentered);
Vue.component('icon', Icon);
Vue.component('input-checkbox', InputCheckbox);
Vue.component('input-text', InputText);
Vue.component('input-textarea', InputTextarea);
Vue.component('input-password', InputPassword);
Vue.component('input-search', InputSearch);
Vue.component('input-search-small', InputSearchSmall);
Vue.component('input-select', InputSelect);
Vue.component('input-select-small', InputSelectSmall);
Vue.component('loading-checkmark', LoadingCheckmark);
Vue.component('oops', Oops);
Vue.component('custom-error', CustomError);
Vue.component('simple-box', SimpleBox);
Vue.component('validation-box', ValidationBox);
Vue.component('validation-messages', ValidationMessages);
