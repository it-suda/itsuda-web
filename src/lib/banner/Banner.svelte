<script lang="ts">
	import '$assets/style/app.css';
	import banners from '$data/banners';

	const intervalTime = 2000;
	let currentIndex = 0;

	setInterval(() => {
		if (currentIndex >= banners.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex += 1;
		}
	}, intervalTime);

	$: getNameClass = (i) => {
		if (i === currentIndex) {
			return 'current';
		} else if (i === currentIndex + 1 || (currentIndex === banners.length - 1 && i === 0)) {
			return 'next';
		} else if (i === currentIndex - 1 || (currentIndex === 0 && i === banners.length - 1)) {
			return 'prev';
		} else {
			return 'hidden';
		}
	};

	$: bannerStyle = `
		background-image: url(${banners[currentIndex].image});
		background-color: ${banners[currentIndex].bgColor}
	`;
</script>

<div class="container">
	<h2 class="hidden">Banner</h2>
	<div class="banner" style={bannerStyle}>
		<div class="title">
			잇수다에는
			<p>
				<span class="box">
					{#each banners as { name }, i}
						<span class="name {getNameClass(i)}">
							{name}
						</span>
					{/each}
				</span>
				를 위한
			</p>
			이벤트 잇수다
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		height: 470px;
		padding-block: 50px;

		.banner {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 25px;
			padding: 50px 50px 50px 60px;
			height: 100%;
			background-repeat: no-repeat;
			background-position: right;
			transition: background-color 0.3s;

			.title {
				font-size: 40px;
				line-height: 1.8;
				font-weight: bold;

				p {
					display: flex;
					align-items: center;
					margin: 0;
				}

				.box {
					position: relative;
					display: inline-flex;
					align-items: center;
					flex-direction: column;
					min-width: 250px;
					height: 80px;
					margin-right: 10px;
					background-color: rgba(0, 0, 0, 0.1);
					border: 5px solid white;
					overflow: hidden;

					.name {
						position: absolute;
						display: block;
						transition: transform 0.3s;

						&.prev {
							transform: translate3d(0, -100%, 0);
						}

						&.next {
							transform: translate3d(0, 100%, 0);
						}
					}
				}
			}
		}
	}
</style>
