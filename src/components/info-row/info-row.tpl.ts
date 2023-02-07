export const tpl = `
<div class="info-row">
  {{#if info}}
  <div class="info-row-wrapper">
    <label for="{{id}}" class="info-row-label">{{item}}
    </label>
    <input id="{{id}}" name="{{id}}" {{disabled}} class="info-row-input" value="{{info}}" {{#if required}}
      data-required="{{required}}"
      {{/if}}
      type="{{type}}" />
    <span class="info-row-error"></span>
  </div>
  {{else}}
  <button class="info-row-button {{className}}">{{item}}</button>
  {{/if}}
</div>
`;
