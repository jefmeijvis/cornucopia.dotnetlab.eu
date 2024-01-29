<div class="hero-text">
    <h1>Cornucopia</h1>
    <h3>OWASP Cyber security threat modeling game</h3>
    <video poster="/images/video-stills/why-play-still.png" preload="none" controls>
        <source src="/videos/why-play.mp4#t=0.1" type="video/mp4">
        <track kind="captions"/>
    </video>
</div>

<style>
    video
    {
        display: block;
        width : 30rem;
        border-radius: .25rem;
        margin:auto;
    }
    .hero-text
    {
        width : 100%;
        height : 100%;
    }

    h1
    {
        color:white;
        opacity: 90%;
        text-shadow: 0 .5rem rgba(0, 0, 0, 0.541);
    }

    h3
    {
        color:white;
        opacity: 90%;
        text-shadow: 0 .2rem rgba(0, 0, 0, 0.541);
    }

    h3
    {
        text-align: center;
        font-family: var(--font-title);
        font-weight: 500;
        font-size: 2rem;
        margin-top: 0;
    }

    h1
    {
        font-size: 8rem;
        padding-top:8rem;
        margin: 0;
        width : 100%;
        text-align: center;
        font-family: var(--font-title);
        font-weight: 500;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        video
        {
            width : 50%;
        }

        h1
        {
            font-size: 4rem;
            padding-top: 1rem;
        }

        h3
        {
            font-size: 1.5rem;
        }
    }
</style>