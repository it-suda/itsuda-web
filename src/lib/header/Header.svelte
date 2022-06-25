<script lang="ts">
	import logo from '$assets/images/itsuda-logo.png';
	import '$assets/style/app.css';
</script>

<header>
	<h2 class="hidden">Header</h2>
	<div class="inner">
		<div class="logo">
			<a href="/">
				<img src={logo} alt="Itsuda" />
			</a>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		height: var(--header-height);
		background-color: var(--color-dark-1);
		border-bottom: 1px solid var(--color-gray-2);

		.logo {
			width: 52px;
			height: 52px;

			a {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}
</style>
