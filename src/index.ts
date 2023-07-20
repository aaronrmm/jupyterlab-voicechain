import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the jupyterlab-voicechain extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-voicechain:plugin',
  description: 'A Jupyterlab extension that provides voice commands for AI code completion with LangChain',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-voicechain is activated!');

    requestAPI<any>('get-example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The jupyterlab_voicechain server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
