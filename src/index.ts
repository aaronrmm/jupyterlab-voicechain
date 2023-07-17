import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';
/**
 * Initialization data for the jupyterlab-voicechain extension.
 */

const activate_func = (app: JupyterFrontEnd, palette: ICommandPalette) =>{
  console.log('JupyterLab extension jupyterlab-voicechain.activate_func is activated!');
}

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-voicechain:plugin',
  description: 'A Jupyterlab extension that provides voice commands for AI code completion with LangChain.',
  autoStart: true,
  activate: activate_func
};

export default plugin;
