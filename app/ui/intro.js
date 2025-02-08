const html = require('choo/html');

module.exports = function intro(state) {
  const introTitle =
    state.WEB_UI.CUSTOM_INTRO_TITLE || state.translate('introTitle');
  const introDescription =
    state.WEB_UI.CUSTOM_INTRO_DESCRIPTION ||
    state.translate('introDescription');
  return html`
    <send-intro
      class="flex flex-col items-center justify-center bg-white px-6 md:py-0 py-6 mb-0 h-full w-full dark:bg-grey-90"
    >
      <div class="mt-12 flex flex-col h-full">
        <h1 class="text-3xl font-bold md:pb-2">
          ${introTitle}
        </h1>
        <p class="max-w-sm leading-loose mt-6 md:mt-2 md:pr-14">
          ${introDescription}
        </p>
      </div>
    </send-intro>
  `;
};
