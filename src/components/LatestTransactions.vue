<template>
  <div>
    <template v-if="transactions.length === 0">
      <p class="mt-5 text-black-50" >
        {{ $t('dashboard.there_are_no_transactions') }}
      </p>
    </template>
    <template v-else>
      <div class="d-flex flex-column">
        <div v-for="(transaction, index) in transactions" :key="index"
        class="font-weight-bold">
          <div :class="{ 'd-flex flex-column flex-sm-row p-2': true,
          'odd-transaction': index % 2 !== 0 }" >
            <div class="mr-sm-3">
              {{ $d(Date.parse(transaction.date), 'short') }}
              <div class="font-weight-light text-black-50">
              {{ transaction.user !== ''? transaction.user:
                $t('dashboard.unknown') }}
              </div>
            </div>
            <div class="d-flex flex-row flex-fill">
              <div class="flex-fill mx-sm-4 justify-content-center">
                {{ (transaction.sent? $t('dashboard.withdraw'):
                $t('dashboard.deposit')) }}
              </div>
              <div class="mx-sm-4">
                <template v-if="transaction.sent">
                  <div class="withdraw">
                    <icon icon="arrow-right-red" class="mr-2" />
                    <icon icon="seed-symbol-red" class="token-symbol" />
                    {{ $n(transaction.amount, 'cryptoCurrency') }}
                  </div>
                </template>
                <template v-else>
                  <div class="deposit">
                    <icon icon="arrow-left-green" class="mr-2" />
                    <icon icon="seed-symbol-green" class="token-symbol" />
                    {{ $n(transaction.amount, 'cryptoCurrency') }}
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="mt-5">
      <a class="smallest-text" :href="getExplorerUrl()"
      target="_blank">{{ $t('dashboard.view_all_transactions') }}</a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';

export default {
  name: 'LatestTransactions',
  props: ['transactions', 'walletAddress'],
  setup(props) {
    const data = reactive({ });

    function getExplorerUrl() {
      return `${process.env.VUE_APP_PARITY_URL_EXPLORER}/address/${props.walletAddress}/transactions`;
    }

    return {
      ...toRefs(data), getExplorerUrl,
    };
  },
};
</script>

<style lang="scss" scoped>

.token-symbol {
  height: 0.88em;
  top: -2px;
  position: relative;
}

.odd-transaction {
  background-color: #f7f8f9;
}

.withdraw {
  color: #f5296a;
}

.deposit {
  color: #39b54a;
}
</style>
