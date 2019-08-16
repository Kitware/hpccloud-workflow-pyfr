<template>
  <div>
    (start)
    <hpc-job-scheduling
      :clusterFilter="clusterFilter"
      :getPayload="getPayload"
    />
    <v-layout>
      <hpc-next-step-button />
      <v-spacer />
    </v-layout>
  </div>
</template>
<script>
import { clusterFilter, getPayload } from './helper';

export default {
  name: 'PyFrViewSimulation',
  methods: {
    clusterFilter,
    getPayload,
  },
};
</script>
