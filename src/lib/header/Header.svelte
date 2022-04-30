<script lang="ts">
    import logo from '$assets/images/itsuda-logo.png';
    import '$assets/style/app.css';
</script>

<header>
    <h2 class="hidden">Header</h2>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Itsuda" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
        height: var(--header-height);
        background-color: #3b3b3b;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
