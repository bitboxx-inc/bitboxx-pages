<script>
    import "../app.css";

    const links = [
        {text: "コンセプト", href: "/#concept"},
        {text: "サービスプラン", href: "/#plans"}
    ]
</script>

<svelte:head>
    <title>bitboxx Pages</title>
</svelte:head>


<div class="container mx-auto max-w-[1280px]">
    <!-- ✅ デスクトップ版：md以上で表示 -->
    <div class="hidden md:block">
        <header class="my-8 ml-8">
            <div class="flex">
                <div>
                    <img class="max-w-[290px]" src="/images/logo.svg" alt="bitboxx logo" height="51" onclick="location.href='/'"/>
                </div>
                <div class="ml-auto mr-8 my-auto">
                    {#each links as link}
                        <a href="{link.href}" class="ml-4"><b>{link.text}</b></a>
                    {/each}
                    <span class="ml-4">
                        <button class="bg-yellow hover:bg-yellow_light
                            text-black font-bold rounded-full px-8 py-1 shadow-[0_4px_0_#000] border focus:ring-2 focus:ring-yellow-500">
                            問い合わせ
                        </button>
                    </span>
                </div>
            </div>
        </header>
    </div>

    <!-- ✅ モバイル版：md未満で表示 -->
    <div class="block md:hidden">
        <header class="mx-auto my-2">
            <div class="flex justify-center my-6">
                <img class="max-w-[290px]" src="/images/logo.svg" alt="bitboxx logo" height="51" onclick="location.href='/'"/>
            </div>
            <div class="flex justify-center mb-8">
                <div class="my-auto">
                    {#each links as link}
                        <a href="{link.href}" class="ml-4"><b>{link.text}</b></a>
                    {/each}
                    <span class="ml-4">
                        <button class="bg-yellow hover:bg-yellow_light
                            text-black font-bold rounded-full px-8 py-1 shadow-[0_4px_0_#000] border focus:ring-2 focus:ring-yellow-500">
                            問い合わせ
                        </button>
                    </span>
                </div>
            </div>
        </header>
    </div>

    <slot/>

    <footer>
        <div class="flex justify-center">
            2024 &copy; bitboxx inc.
        </div>
    </footer>
</div>

