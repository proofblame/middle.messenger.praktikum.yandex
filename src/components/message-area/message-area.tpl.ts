export const tpl = `
{{#each messages}}
    {{#if (isAuthor user_id)}}
        <div class="message__block message__block_from-me">
    {{else}}
        <div class="message__block">
    {{/if}}
            <p>{{content}}<time>{{getTime time}}</time></p>
        </div>
{{/each}}
    `;
