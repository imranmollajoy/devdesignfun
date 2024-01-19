<script lang="ts">
  export let float: boolean = false;
  export let text: string = "Ad text goes here."
  export let href: string = "#"
</script>

<div class="ad block clear-both py-4 px-2 bg-success-50 text-success-800 md:float-left md:mr-12 md:w-[320px] lg:-ml-32">
  <p class="m-0 lg:m-0">AD</p>
  <a {href} class="text-xl" target="_blank" rel="noopener noreferre">{text}</a>
</div>
