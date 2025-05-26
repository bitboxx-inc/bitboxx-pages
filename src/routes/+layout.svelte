<script>
    import "../app.css";
</script>

<svelte:head>
    <title>bitboxx Pages</title>
</svelte:head>


<div class="container mx-auto max-w-1280px">
    <header class="my-8">
        <div class="flex">
            <div>
                <img src="/images/logo.svg" alt="bitboxx logo" width="290" height="51" onclick="location.href='/'"/>
            </div>
            <div class="ml-auto">
                コンセプト
                サービスプラン
                お問い合わせ
            </div>
        </div>
    </header>
    <slot />
    <footer>
        <div class="flex justify-center">
            2024 &copy; bitboxx inc.
        </div>
    </footer>
</div>
