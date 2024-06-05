<script>
    import "../app.css";
</script>

<svelte:head>
    <title>bitboxx Pages</title>
</svelte:head>

<header class="h-12">
    <div class="flex mt-4 ml-4">
        <a href="/">bitboxx Pages</a>
    </div>
</header>

<slot />

<footer>
    <div class="flex justify-center">
        2024 &copy; bitboxx inc.
    </div>
</footer>