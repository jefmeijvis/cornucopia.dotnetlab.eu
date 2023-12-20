<script>
    import SvelteMarkdown from 'svelte-markdown'
    import {Text} from '$lib/utils/text'
    export let data
</script>

<p><a href="/blog">Back to overview</a></p>
    <div class="metadata">
    <p>Author: <a href="/author/{data.author}">{Text.Format(data.author)}</a></p>
    <p>Date: {data.date}</p>
    <img alt="{data.author} profile picture" src="/data/author/{data.author}/profile-picture.jpg"/>
</div>

<SvelteMarkdown source={data.markdown}></SvelteMarkdown>