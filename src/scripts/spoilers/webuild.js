import Spoiler from './spoiler';

const details = document.querySelectorAll('#details-webuild');

const spoilerWebuild = new Spoiler({ spoilers: details });

spoilerWebuild.init();

export default spoilerWebuild;
