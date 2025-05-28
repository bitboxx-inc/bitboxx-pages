<script>
    import Products from "./Products.svelte";
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
<div class="bg-light_yellow">
    <div class="flex justify-center items-center pt-2">
        <div id="concept" class="text-4xl my-12 font-noto"><b>コンセプト</b></div>
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
<div class="bg-gray">
    <div class="flex justify-center items-center pt-2">
        <div id="plans" class="text-4xl my-12 font-noto"><b>サービスプラン</b></div>
    </div>
    準備中
</div>
<!--<div class="h-dvh">-->

<!--    <Products/>-->

<!--    <ul class="ml-4">-->
<!--        <li>・<a href="/specified-commercial-transaction-law">特定商取引法に基づく表記</a></li>-->
<!--    </ul>-->

<!--</div>-->