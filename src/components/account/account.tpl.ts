export const tpl = `
<form class='profile'>
    {{{avatar}}}
    <div class='profile__form'>
        {{#each profileData}}
            {{{this}}}
        {{/each}}
    </div>
    <div class='profile__settings'>
        {{#if buttons}}
            {{#each buttons}}
                {{{this}}}
            {{/each}}
        {{else}}
            {{{button}}}
        {{/if}}
    </div>
</form>
`;
