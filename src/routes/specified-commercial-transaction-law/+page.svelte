<script>
	const items = [
		{ label: '販売事業者', value: '株式会社bitboxx' },
		{ label: '運営統括責任者', value: '影島翔' },
		{ label: '所在地', value: '東京都中央区日本橋箱崎町16番11 ルミネ日本橋601' },
		{ label: 'メールアドレス', value: 'contact@bitboxx.co.jp' },
		{ label: '販売URL', value: 'https://pages.bitboxx.co.jp', href: 'https://pages.bitboxx.co.jp' },
		{ label: 'お支払い方法', value: 'クレジットカード、振込' },
		{ label: '販売価格', value: '各サービスページまたはお見積もり時に表示する金額によります。' },
		{
			label: '商品代金以外の必要料金',
			value: 'インターネット接続料金、通信料金、独自ドメイン取得費用等はお客様のご負担となります。'
		},
		{
			label: '役務の提供時期',
			value: 'ご契約および必要情報の受領後、個別に合意したスケジュールに従って提供します。'
		},
		{
			label: '引渡し方法',
			value: 'ウェブサイトの公開、管理画面の提供、または電子メールによりご案内します。'
		},
		{
			label: '返品・キャンセル',
			value:
				'サービスの性質上、着手後の返品・返金には応じられません。契約成立前のキャンセルについては個別に対応します。'
		},
		{
			label: '中途解約',
			value:
				'月額契約の解約は、次回更新日前までに当社所定の方法でご連絡ください。既に発生した料金の日割返金は行いません。'
		}
	];
</script>

<svelte:head>
	<title>特定商取引法に基づく表記 | bitboxx Pages</title>
</svelte:head>

<div class="bg-light_yellow min-h-screen py-10">
	<div class="mx-auto w-[calc(100%-2rem)] max-w-[960px] rounded-2xl bg-white px-6 py-8 md:px-10">
		<div class="mb-6">
			<a href="/" class="font-noto underline">戻る</a>
		</div>

		<h1 class="font-noto text-3xl font-bold">特定商取引法に基づく表記</h1>

		<div class="mt-8 overflow-hidden rounded-xl border border-black/10">
			{#each items as item, index}
				<div
					class={`grid md:grid-cols-[240px_1fr] ${index < items.length - 1 ? 'border-b border-black/10' : ''}`}
				>
					<div class="bg-gray px-5 py-4 font-noto font-bold">{item.label}</div>
					<div class="px-5 py-4 font-noto leading-7">
						{#if item.href}
							<a class="underline" href={item.href} target="_blank" rel="noreferrer">{item.value}</a
							>
						{:else}
							{item.value}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
