export const tpl = `<div class="info__row">
  {{#if info}}
    <label class="info__row-label">{{item}}</label>
    <input
      name="{{name}}"
      {{disabled}}
      class="info__row-input"
      value="{{info}}"
    />
  {{else}}
    <button class="info__row-button {{className}}">{{item}}</button>
  {{/if}}
</div>
`;
