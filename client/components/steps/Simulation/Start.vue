<template>
  <div>
    (start)
    <hpc-job-scheduling
      :clusterFilter="clusterFilter"
      :getPayload="getPayload"
      :getMetadata="getMetadata"
    />
    <v-layout>
      <hpc-next-step-button />
      <v-spacer />
    </v-layout>
  </div>
</template>
<script>
import { clusterFilter, getPayload, getMetadata } from './helper';

export default {
  name: 'PyFrViewSimulation',
  methods: {
    clusterFilter,
    getPayload,
    getMetadata,
  },
};
</script>
