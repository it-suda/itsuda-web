<script context="module" lang="ts">
	export const prerender = true;
    import Banner from '$lib/banner/Banner.svelte';
    import Events from '$lib/events/Events.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
    <h1 class="hidden">Home</h1>
    <Banner />
    <Events />
</section>

<style>
</style>
