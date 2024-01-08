<script>
    import { Text } from "$lib/utils/text";
import SvelteMarkdown from "svelte-markdown";
    export let data;
</script>

<div class="container">
    <div class="left">
        <img class="profile-picture" title="{data.author.name}" alt="{data.author.name}" src="/data/author/{data.author.name}/profile-picture.jpg"/>
    </div>
    <div class="right">
        <table>
            <tr>
                <td>
                    <img alt="linkedin logo" class="icon" src="/icons/linkedin.png"/>
                </td>
                <td>
                    <a target="_blank" href="{data.author.linkedin}">LinkedIn</a>
                </td>
            </tr>

            <tr>
                <td>
                    <img alt="email logo" class="icon" src="/icons/mail.png"/>
                </td>
                <td>
                    <a target="_blank" href="mailto:{data.author.email}">Mail</a>
                </td>
            </tr>

            <tr>
                <td>
                    <img alt="globe logo" class="icon" src="/icons/globe.png"/>
                </td>
                <td>
                    <a target="_blank" href="{data.author.website}">{Text.DisplayLink(data.author.website)}</a>
                </td>
            </tr>       
        </table>

    </div>
</div>

<SvelteMarkdown source={data.author.bio}></SvelteMarkdown>

<style>
    .container
    {
        display: flex;
        flex-direction: row;
    }

    .icon
    {
        width : 1rem;
    }

    .profile-picture
    {
        display: block;
        width : 10rem;
        margin:auto;
        outline: 1px white solid
    }

    table
    {
        margin-left: 1rem;
    }
</style>