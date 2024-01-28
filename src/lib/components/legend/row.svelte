<script lang="ts">
  import Diamond from "./svg/diamond.svelte";
  import Test from "./svg/test.svelte";
    export let text: string;
</script>

<!-- With width/height=100% you can scale using div attributes -->
<div class="card flex flex-row items-center justify-center">
    <div class="w-10 h-10 align-middle badge-icon "> 
        <Test></Test>
    </div>
    <!-- <span class="">
    </span> -->
    <div class="h3">
        {text}
    </div>
</div>