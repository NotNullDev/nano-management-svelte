<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';
	import Sidebar from './sidebar.svelte';
</script>

<div class="min-h-screen flex flex-col bg-gray-100">
	<Header />
	<div class="flex flex-1">
		<Sidebar />
		<div class="flex-1"><slot /></div>
	</div>
</div>
