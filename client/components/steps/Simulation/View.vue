<template>
  <hpc-job-scheduling :clusterFilter="clusterFilter" :getPayload="getPayload" />
</template>
<script>
import { clusterFilter, getPayload } from './helper';

export default {
  name: 'PyFrStartSimulation',
  methods: {
    clusterFilter,
    getPayload,
  },
};
</script>
