export const tpl = `
<form class='profile'>
    <div class='profile__logo'>
        <div class='profile__img'>
            <img src='{{avatar}}' alt='avatar' />
        </div>
        <p class='profile__name'>{{userName}}</p>
    </div>
    <div class='profile__form'>
        {{#each rows}}
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
