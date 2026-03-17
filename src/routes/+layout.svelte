<script>
	import '../app.css';

	const links = [
		{ text: 'コンセプト', href: '/#concept' },
		{ text: 'サービスプラン', href: '/#plans' }
	];
</script>

<div class="container mx-auto max-w-[1280px]">
	<!-- ✅ デスクトップ版：md以上で表示 -->
	<div class="hidden md:block">
		<header class="my-8 ml-8">
			<div class="flex">
				<div>
					<a href="/">
						<img class="max-w-[290px]" src="/images/logo.svg" alt="bitboxx logo" height="51" />
					</a>
				</div>
				<div class="ml-auto mr-8 my-auto">
					{#each links as link}
						<a href={link.href} class="ml-4"><b>{link.text}</b></a>
					{/each}
					<span class="ml-4">
						<a
							href="/#contact"
							class="inline-block bg-yellow hover:bg-yellow_light
                            text-black font-bold rounded-full px-8 py-1 shadow-[0_4px_0_#000] border focus:ring-2 focus:ring-yellow-500"
						>
							問い合わせ
						</a>
					</span>
				</div>
			</div>
		</header>
	</div>

	<!-- ✅ モバイル版：md未満で表示 -->
	<div class="block md:hidden">
		<header class="mx-auto my-2">
			<div class="flex justify-center my-6">
				<a href="/">
					<img class="max-w-[290px]" src="/images/logo.svg" alt="bitboxx logo" height="51" />
				</a>
			</div>
			<div class="flex justify-center mb-8">
				<div class="my-auto">
					{#each links as link}
						<a href={link.href} class="ml-4"><b>{link.text}</b></a>
					{/each}
					<span class="ml-4">
						<a
							href="/#contact"
							class="inline-block bg-yellow hover:bg-yellow_light
                            text-black font-bold rounded-full px-8 py-1 shadow-[0_4px_0_#000] border focus:ring-2 focus:ring-yellow-500"
						>
							問い合わせ
						</a>
					</span>
				</div>
			</div>
		</header>
	</div>

	<slot />

	<footer class="pt-8">
		<!-- ✅ デスクトップ版：md以上で表示 -->
		<div class="hidden md:block">
			<div class="flex">
				<a href="/">
					<img class="ml-12" src="/images/logo.svg" alt="bitboxx logo" />
				</a>
				<div class="ml-auto mr-12 font-noto text-right">
					<a href="/privacy-policy">個人情報保護方針</a>
					<br />
					<a href="/specified-commercial-transaction-law">特定商取引法に基づく表記</a>
				</div>
			</div>
		</div>

		<!-- ✅ モバイル版：md未満で表示 -->
		<div class="block md:hidden">
			<div class="">
				<div class="ml-auto mr-8 font-noto text-right">
					<a href="/privacy-policy">個人情報保護方針</a>
					<br />
					<a href="/specified-commercial-transaction-law">特定商取引法に基づく表記</a>
				</div>
				<a href="/" class="block">
					<img class="mx-auto mt-6" src="/images/logo.svg" alt="bitboxx logo" />
				</a>
			</div>
		</div>
		<div class="flex justify-center mt-8 my-4">2024 &copy; bitboxx inc.</div>
	</footer>
</div>
