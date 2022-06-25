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

		.inner {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			max-width: var(--page-max-width);
			height: 100%;
			padding-inline: var(--page-padding);
			margin: 0 auto;
		}

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
