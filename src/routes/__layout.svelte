<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '$assets/style/app.scss';
</script>

<h1 class="hidden">잇수다</h1>
<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: var(--page-max-width);
		min-height: calc(100vh - var(--header-height) - var(--footer-height));
		padding-inline: var(--page-padding);
		margin: 0 auto;
	}
</style>
