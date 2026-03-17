<script>
	const sections = [
		{
			title: '1. 個人情報の取得',
			body: '当社は、お問い合わせ、サービス提供のお申し込み、資料請求その他の場面において、氏名、会社名、メールアドレス、電話番号、住所その他サービス提供に必要な情報を適正な手段で取得します。'
		},
		{
			title: '2. 利用目的',
			body: '取得した個人情報は、お問い合わせへの対応、サービスの提供・運営、契約の履行、料金請求、保守サポート、重要なお知らせの送付、サービス改善および不正利用の防止のために利用します。'
		},
		{
			title: '3. 第三者提供',
			body: '当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。ただし、サービス運営上必要な範囲で、委託先に対して適切な監督のもと情報を取り扱わせることがあります。'
		},
		{
			title: '4. 安全管理措置',
			body: '当社は、個人情報への不正アクセス、漏えい、滅失またはき損の防止その他個人情報の安全管理のために、合理的かつ適切な措置を講じます。'
		},
		{
			title: '5. 開示・訂正・削除等',
			body: '本人から自己の個人情報について、開示、訂正、追加、削除、利用停止等の請求があった場合には、本人確認を行ったうえで、法令に従い適切に対応します。'
		},
		{
			title: '6. Cookie等の利用',
			body: '当社ウェブサイトでは、利便性向上や利用状況の把握のためにCookieその他これに類する技術を利用する場合があります。ブラウザ設定によりCookieを無効化できますが、一部機能が利用できなくなる場合があります。'
		},
		{
			title: '7. 方針の見直し',
			body: '当社は、法令等の改正や運用上の必要に応じて、本方針の内容を見直し、必要に応じて改定します。改定後の内容は当ウェブサイト上に掲載した時点から適用されます。'
		}
	];
</script>

<svelte:head>
	<title>個人情報保護方針 | bitboxx Pages</title>
</svelte:head>

<div class="bg-light_yellow min-h-screen py-10">
	<div class="mx-auto w-[calc(100%-2rem)] max-w-[960px] rounded-2xl bg-white px-6 py-8 md:px-10">
		<div class="mb-6">
			<a href="/" class="font-noto underline">戻る</a>
		</div>

		<h1 class="font-noto text-3xl font-bold">個人情報保護方針</h1>
		<p class="mt-6 font-noto leading-8">
			株式会社bitboxx（以下「当社」）は、当社が提供する bitboxx PAGES
			に関連して取得する個人情報について、
			個人情報の保護に関する法令その他の規範を遵守し、以下の方針に基づき適切に取り扱います。
		</p>

		<div class="mt-8 space-y-8">
			{#each sections as section}
				<section>
					<h2 class="font-noto text-xl font-bold">{section.title}</h2>
					<p class="mt-3 font-noto leading-8">{section.body}</p>
				</section>
			{/each}
		</div>

		<section class="mt-8">
			<h2 class="font-noto text-xl font-bold">8. お問い合わせ窓口</h2>
			<div class="mt-3 font-noto leading-8">
				<div>株式会社bitboxx</div>
				<div>東京都中央区日本橋箱崎町16番11 ルミネ日本橋601</div>
				<div>メールアドレス: contact@bitboxx.co.jp</div>
			</div>
		</section>
	</div>
</div>
