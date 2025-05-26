<script>
    import Products from "./Products.svelte";
</script>

<svelte:head>
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
</svelte:head>

<div class="flex">
    <div class="flex flex-col md:flex-row bg-gray">
        <!-- 左側: 画像 -->
        <div class="flex-1 flex items-center justify-center bg-gray">
            <img src="/images/top1.svg" alt="logo" class="max-w-full h-auto"/>
        </div>
        <!-- 右側: テキスト -->
        <div class="flex-1 flex items-center justify-center bg-gray">
            <div class="w-[395px] h-[155px] flex flex-col justify-center items-center">
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
        <div class="text-4xl my-12 font-noto"><b>コンセプト</b></div>
    </div>
</div>

<!--<div class="h-dvh">-->

<!--    <Products/>-->

<!--    <ul class="ml-4">-->
<!--        <li>・<a href="/specified-commercial-transaction-law">特定商取引法に基づく表記</a></li>-->
<!--    </ul>-->

<!--</div>-->