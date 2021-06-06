<template>
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    :width="size"
    :height="size"
    viewBox="0 0 459 459"
    style="enable-background: new 0 0 459 459"
    xml:space="preserve"
  >
    <path
      d="M178.5,382.5h102v-51h-102V382.5z M0,76.5v51h459v-51H0z M76.5,255h306v-51h-306V255z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: { type: [String, Number], default: 20 },
    color: { type: String, default: "white" },
  },
};
</script>
