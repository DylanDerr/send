const html = require('choo/html');
const assets = require('../../common/assets');

module.exports = function(state) {
  const btnText = state.WEB_UI.CUSTOM_SEND_YOUR_FILES_LINK
    ? state.WEB_UI.CUSTOM_SEND_YOUR_FILES_LINK
    : state.user.loggedIn
    ? 'okButton'
    : 'sendYourFilesLink';
  const trySendDescription =
    state.WEB_UI.CUSTOM_TRY_SEND_DESCRIPTION ||
    state.translate('trySendDescription');
  return html`
    <div
      id="download-complete"
      class="flex flex-col items-center justify-center h-full w-full bg-white p-2 dark:bg-grey-90"
    >
      <h1 class="text-center text-3xl font-bold my-2">
        ${state.translate('downloadFinish')}
      </h1>
      <svg class="my-8 h-48 text-primary">
        <use xlink:href="${assets.get('completed.svg')}#Page-1" />
      </svg>
      <p
        class="text-grey-80 leading-normal dark:text-grey-40 ${state.user
          .loggedIn
          ? 'hidden'
          : ''}"
      >
        ${trySendDescription}
      </p>
      <p class="my-5">
        <a href="/" class="btn rounded-lg flex items-center mt-4" role="button"
          >${state.WEB_UI.CUSTOM_SEND_YOUR_FILES_LINK
            ? btnText
            : state.translate(btnText)}</a
        >
      </p>
    </div>
  `;
};
