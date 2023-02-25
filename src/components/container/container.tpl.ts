export const tpl = `
<div class="container">
    {{#if backArrow}}
       <div class='container-back' id='back'>➜</div>
     {{/if}}
  {{{children}}}
</div>
`;
