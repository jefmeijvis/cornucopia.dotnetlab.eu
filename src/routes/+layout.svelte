<script>
    import CookieNotice from "$lib/components/cookieNotice.svelte";
    import DevIndicator from "$lib/components/devIndicator.svelte";
    import Footer from "$lib/components/footer.svelte";
    import GoogleAnalytics from "$lib/components/googleAnalytics.svelte";
    import Metadata from "$lib/components/metadata.svelte";
    import MicrosoftClarity from "$lib/components/microsoftClarity.svelte";
    import Navbar from "$lib/components/navigation/navbar.svelte";
    export let data;
</script>

<Metadata></Metadata>
<DevIndicator></DevIndicator>
<GoogleAnalytics></GoogleAnalytics>
<MicrosoftClarity></MicrosoftClarity>
<CookieNotice></CookieNotice>

<div>
    <Navbar></Navbar>
    <div class="slot-container">
        <slot></slot>
    </div>
    <Footer timestamp={data.timestamp}></Footer>
</div>


<style>
    .slot-container
    {
        min-height: 100vh;
    }

    div
    {
        min-height: 100vh;
        background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,.8) 100%),radial-gradient(circle at 5px 5px,#0c0d0d70 2px,#ffffff00 0px,#ffffff00 0px) 0 0 / 8px 8px, linear-gradient(180deg, #222222 0%,#222222 200%);
    }
</style>