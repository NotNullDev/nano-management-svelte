<script lang="ts">
	let checked = false;
	let classes = '';

	$: {
		classes = checked ? 'bg-gray-200' : 'bg-blue-500';
	}
</script>

<label class={'px-1 rounded  ' + classes}>
	<input type="checkbox" bind:checked class="invisible" />
</label>
