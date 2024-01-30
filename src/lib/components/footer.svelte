<footer>
    <div class="flex-container">
        <div class="box">
            <p class="title">Provided by dotNET lab</p>
            <p>
                This website is created, hosted and provided by <a target='_blank' href="https://www.dotnetlab.eu">dotNET lab.</a>
                dotNET lab provides training and guidance on secure software development.
                <a href="mailto:administratie@dotnetlab.eu?subject=Secure Software Development&body=I would like to get in touch to know more about the services dotNET lab provides for secure software development!">Contact us</a> to get in touch! 
            </p>
            <p class="title">OWASP Cornucopia</p>
            <p>
                OWASP Cornucopia is originally created by Colin Watson.
                It is open source and can be downloaded free of charge from the <a target='_blank' href="https://owasp.org/www-project-cornucopia/">OWASP website</a>.
                It is is free to use.
                It is licensed under the Creative Commons Attribution-ShareAlike 3.0 license, so you can copy, 
                distribute and transmit the work, and you can adapt it, and use it commercially, 
                but all provided that you attribute the work and if you alter, transform, 
                or build upon this work, 
                you may distribute the resulting work only under the same or similar license to this one.
                OWASP does not endorse or recommend commercial products or services.
                OWASP Cornucopia is licensed under the Creative Commons Attribution-ShareAlike 3.0 license and is © 2012-2016 OWASP Foundation.
            </p>
        </div>
        <div class="box">
            <p class="title">Get the cards</p>
            <p><a href="https://webshop.dotnetlab.eu/product/cornucopia-card-deck/">Order online</a></p>
            <p><a href="https://owasp.org/www-project-cornucopia/#div-cards">Print your own</a></p>
            <p><a href="mailto:administratie@dotnetlab.eu?subject=Order your customized Corncuopia card deck!&body=I would like to create a customized Cornucopia card deck order with my own company logo and branding. ">Order your customized version</a></p>
        </div>

        <div class="box">
            <p class="title">Mappings</p>
            <p><a href="https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/">OWASP SCP</a></p>
            <p><a href="https://owasp.org/www-project-application-security-verification-standard/">OWASP ASVS</a></p>
            <p><a href="https://owasp.org/www-project-appsensor/">OWASP APPSENSOR</a></p>
            <p><a href="https://capec.mitre.org/">CAPEC</a></p>
            <p><a href="https://safecode.org/">SAFECODE</a></p>
        </div>
    </div>
    <p class="footer">OWASP and the OWASP logo are trademarks of the <a href="https://owasp.org/">OWASP Foundation</a></p>
    <p class="footer"><a href="/about#license">Licensing information</a> | <a href="/build">Build information</a></p>
    <p class="footer"><a href="https://www.dotnetlab.eu">DotNETlab</a> {new Date().getFullYear()}</p>
</footer>


<style>
    .footer
    {
        width : calc(100% - 2rem);
        text-align: center;
    }

    a
    {
        color:var(--white);
    }

    a:hover
    {
        font-weight: bold;
        color:var(--green)
    }

    .title
    {
        font-size: 1.5rem;
        text-decoration: underline;
        font-family: var(--font-title);
    }

    p
    {
        color:var(--white);
        font-family: var(--font-body);
        margin-top:.5rem;
        margin-bottom:.5rem;
    }
    .box
    {
        margin:1rem;
        flex:1;
    }

    .flex-container
    {
        display: flex;
        flex-direction: row;
        align-items: stretch;

    }
    footer
    {
        border-top: 1px solid var(--white);
        width : calc(100% - 2rem);
        background-color: var(--background);
        padding: 1rem;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .flex-container
        {
            flex-direction: column;
        }

        .box
        {
            width : 90%;
            margin-bottom: 2rem;
        }
    }
</style>