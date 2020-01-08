<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options,
      { responsive: true, maintainAspectRatio: false });
  },
};
</script>

<style>
</style>
