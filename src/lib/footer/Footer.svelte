<script lang="ts">
	import logo from '$assets/images/itsuda-logo.png';
	import { helpMail } from '$data/links';
</script>

<footer>
	<h2 class="hidden">Footer</h2>
	<div class="inner">
		<div class="contents">
			<div class="logo">
				<a href="/">
					<img src={logo} alt="Itsuda" />
				</a>
				<span>© 2022 Itsuda</span>
			</div>
			<nav>
				<a href={helpMail}>문의하기</a>
			</nav>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: space-between;
		height: var(--footer-height);
		background-color: var(--color-dark-1);
		color: var(--color-lightgray-2);
		font-size: 14px;
		margin-bottom: 70px;

		.inner {
			.contents {
				display: flex;
				justify-content: space-between;
				width: 100%;
				height: 100%;
				border-top: 1px solid var(--color-gray-2);

				.logo {
					display: flex;
					align-items: center;
					gap: 5px;

					a {
						img {
							width: 40px;
							height: 40px;
							object-fit: contain;
							opacity: 0.6;

							&:hover {
								opacity: 0.7;
							}
						}
					}
				}

				nav {
					display: flex;
					align-items: center;
					padding-inline: 5px;
				}
			}
		}
	}
</style>
