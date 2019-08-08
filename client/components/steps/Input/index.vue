<template>
  <hpc-simput
    type="pyfr"
    step="Input"
    :simulation="simulation"
    :model="model"
  />
</template>

<script>
export default {
  name: 'PyFrSimput',
  props: {
    simulation: {
      type: Object,
      default: null,
    },
    metadata: {
      type: Object,
      default: null,
    },
  },
  computed: {
    model() {
      return Object.assign(
        { hideViews: [], data: {} },
        JSON.parse(this.metadata.model)
      );
    },
  },
};
</script>
