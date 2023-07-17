import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-voicechain extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-voicechain:plugin',
  description: 'A Jupyterlab extension that provides voice commands for AI code completion with LangChain.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-voicechain is activated!');
  }
};

export default plugin;
