<script lang="ts">
import Test from '$lib/components/legend/svg/test.svelte'
import Row from './row.svelte'

</script>

<Row text="hellow">
    <svelte:fragment slot="icon">
        <Test></Test>
    </svelte:fragment>
</Row>