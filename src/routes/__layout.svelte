<script lang="ts">
	import Header from '$lib/header/Header.svelte';
    import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>

<h1 class="hidden">잇수다</h1>
<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
        min-height: calc(100vh - var(--header-height) - var(--footer-height));
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
