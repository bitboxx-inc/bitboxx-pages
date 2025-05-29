<script>
    import Products from "./Products.svelte";

    const plans = [
        {
            title: 'ウェブサイト<br/>制作・保守管理',
            description: '中小企業・店舗・士業・フリーランスなどに最適な、シンプルでしっかりした公式サイトを制作・運用するプランです。',
            services: [
                'スマホ対応レスポンシブデザイン',
                'ページ公開（トップ＋最大3ページ）',
                '独自ドメイン取得/設定代行',
                'お問い合わせフォーム設置',
                'アクセスレポート（Google Analytics）',
                '月1回のテキスト/画像差し替え対応',
            ],
            options: [
                '多言語対応（＋月額￥10,000～）',
                '1ページ追加（＋月額￥20,000～）',
                '画像・動画制作（お問い合わせ）',
                '画像・動画撮影（お問い合わせ）',
            ],
            icon: '/images/services/web.svg'
        },
        {
            title: 'ECサイト<br/>構築・運営支援',
            description: '商品の販売・予約・決済機能をシンプルに導入したい方向け。低コストではじめられるECの最短ルートです。',
            services: [
                '商品ページ（月10商品まで登録代行）',
                'カート機能・決済機能（Stripeほか）',
                '在庫・受注管理画面付き',
                '商品画像の簡易レタッチ',
                '自動返信メール設定',
                '月1回の商品情報更新対応',
            ],
            options: [
                '商品点数追加（10点毎に￥10,000）',
                '定期購入対応（初期費用+￥20,000）',
                '画像・動画撮影（お問い合わせ）'
            ],
            icon: '/images/services/ec.svg'
        },
        {
            title: '顧客管理システム<br/>構築管理',
            description: '顧客データ管理や会員ページ機能を併設した、運用重視の中～大規模サイト向けパッケージ',
            services: [
                '商品ページ（月10商品まで登録代行）',
                'カート機能・決済機能（Stripeほか）',
                '在庫・受注管理画面付き',
                '商品画像の簡易レタッチ',
                '自動返信メール設定',
                '月1回の商品情報更新対応',
            ],
            options: [
                '商品点数追加（10点毎に￥10,000）',
                '定期購入対応（初期費用+￥20,000）',
                '画像・動画撮影（お問い合わせ）'
            ],
            icon: '/images/services/customer.svg'
        }
    ]
</script>

<svelte:head>
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
</svelte:head>

<div class="flex">
    <div class="flex flex-col md:flex-row border-to bg-gray min-h-[393px]">
        <!-- 左側: 画像 -->
        <div class="flex items-center justify-center max-w-[786px] ">
            <img src="/images/top1.svg" alt="logo" class="w-full h-auto"/>
        </div>
        <!-- 右側: テキスト -->
        <div class="flex-1 flex items-center justify-center ">
            <div class="flex-1 md:w-[494px] h-[155px] flex flex-col justify-center items-center">
                <div class="font-bold text-4xl font-noto mb-1 text-center">ウェブサイト</div>
                <div class="font-bold text-4xl font-noto mb-2 text-center">すべて、おまかせ</div>
                <div class="text-lg font-noto text-center">プロがつくる、まもる、そだてる。</div>
            </div>
        </div>
    </div>
</div>

<!-- コンセプト -->
<div id="concept" class="bg-light_yellow">
    <div class="flex justify-center items-center pt-2">
        <div class="text-4xl my-12 font-noto"><b>コンセプト</b></div>
    </div>
    <div class="flex flex-col md:flex-row border-to">
        <!-- 左側: 画像 -->
        <div class="flex-1 items-center justify-center md:min-w-[480px] md:max-w-[50%]">
            <div class="md:min-h-[364px] md:mx-16 mx-8 mb-16 rounded-lg bg-white">
                <img class="mx-auto pt-6" src="/images/top2_light.svg" width="64" height="64" alt="logo"/>
                <div class="font-bold text-xl font-noto text-center mt-4">ウェブサイト制作、<br/>もっとラクをしよう</div>
                <div class="font-noto text-center mt-8 md:mx-20 mx-4 text-base pb-8">
                    bitboxx PAGESは、「月額10万円〜」で、ウェブサイトの企画・構成・デザインから、保守・運用・セキュリティまでワンストップで対応。プロがすべて対応します。
                </div>
            </div>
        </div>
        <!-- 右側: テキスト -->
        <div class="flex-1 items-center justify-center md:max-w-[50%]">
            <div class="md:mx-4 mx-8 mb-16">
                <div class="font-bold md:text-2xl font-noto text-center mt-4">＼　ご希望に合わせて、まるごと対応！　／</div>
                <img class="mx-auto pt-6" src="/images/top2_pc.svg"alt="logo"/>
            </div>
        </div>
    </div>
</div>

<!-- サービスプラン -->
<div id="plans" class="bg-gray">
    <div class="flex justify-center items-center pt-2">
        <div class="text-4xl my-12 font-noto"><b>サービスプラン</b></div>
    </div>
    <div class="flex flex-col md:flex-row border-to">
        {#each plans as plan}
            <div class="flex-1 items-center justify-center md:max-w-[33%]">
                <div class="md:min-h-[720px] py-6 md:px-8 px-5 mx-8 mb-16 rounded-lg bg-white">
                    <img class="mx-auto" src="{plan.icon}" width="64" height="64" alt="logo"/>
                    <div class="font-bold text-xl font-noto text-center mt-4">{@html plan.title}</div>
                    <div class="font-noto text-center mt-8 text-base pb-8">
                        {plan.description}
                    </div>
                    <div class="bg-light_yellow hover:bg-yellow_light text-black font-bold rounded-full text-center border">含まれるサービス</div>
                    <div class="mt-6">
                        {#each plan.services as service}
                            <div>●{service}</div>
                        {/each}
                    </div>
                    <div class="mt-12 bg-white hover:bg-yellow_light text-black font-bold rounded-full text-center border">オプションの例</div>
                    <div class="mt-6">
                        {#each plan.options as option}
                            <div>●{option}</div>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<!-- お問い合わせ -->
<div id="contact" class="bg-yellow">
    <div class="flex justify-center items-center pt-2">
        <div class="text-4xl my-12 font-noto"><b>お問い合わせ</b></div>
        （準備中）
    </div>
    <div class="flex justify-center items-center">
        <div class="md:w-full w-[320px] md:max-w-[800px] md:min-h-[364px] md:mx-16 py-8 mx-8 mb-16 rounded-lg bg-white">
            <form class="md:mx-32 mx-8 md:w-[560px]">

                <div>
                    <span class="font-noto">企業名</span>
                    <span class="font-noto text-xs">*必須</span>
                </div>
                <input name="company" class="w-full mt-2 border-2 rounded-lg"/>

                <div class="mt-8">
                    <span class="font-noto">お名前</span>
                    <span class="font-noto text-xs">*必須</span>
                </div>
                <input name="name" class="w-full mt-2 border-2 rounded-lg"/>

                <div class="mt-8">
                    <span class="font-noto">メールアドレス</span>
                    <span class="font-noto text-xs">*必須</span>
                </div>
                <input name="email" class="w-full mt-2 border-2 rounded-lg"/>

                <div class="mt-8">
                    <span class="font-noto">お問い合わせ内容</span>
                    <span class="font-noto text-xs">*必須</span>
                </div>
                <textarea name="content" class="w-full h-[240px] mt-2 border-2 rounded-lg"/>

                <div class="mt-4 flex justify-center items-center">
                    <input type="checkbox" name="agree" class="my-auto"/><span class="my-auto ml-2"><a class="font-mono">当社規定の個人情報保護方針に同意する</a></span>
                </div>

                <div class="mt-8 flex justify-center items-center">
                    <button disabled class="bg-gray hover:bg-yellow_light w-[400px]
                            text-black font-bold rounded-full px-8 py-1 shadow-[0_4px_0_#000] border focus:ring-2 focus:ring-yellow-500">
                        送信する
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
