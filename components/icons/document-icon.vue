<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 48 48"
  >
    <title>{{ title }}</title>
    <g>
      <path
        fill="#E6E6E6"
        d="M41,47H7c-1.105,0-2-0.895-2-2V3c0-1.105,0.895-2,2-2l24,0l12,12v32C43,46.105,42.105,47,41,47z"
      ></path>
      <path fill="#B3B3B3" d="M31,1v10c0,1.105,0.895,2,2,2h10L31,1z"></path>
      <path
        fill="#B3B3B3"
        d="M34,35H14c-0.552,0-1,0.448-1,1s0.448,1,1,1h20c0.552,0,1-0.448,1-1S34.552,35,34,35z"
      ></path>
      <path
        fill="#B3B3B3"
        d="M34,25H14c-0.552,0-1,0.448-1,1s0.448,1,1,1h20c0.552,0,1-0.448,1-1S34.552,25,34,25z"
      ></path>
      <path
        fill="#B3B3B3"
        d="M22,15h-8c-0.552,0-1,0.448-1,1s0.448,1,1,1h8c0.552,0,1-0.448,1-1S22.552,15,22,15z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Confession",
    },
    width: {
      type: Number,
      default: 48,
    },
  },
};
</script>
