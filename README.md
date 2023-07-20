# Motivation
I'd like to be able to write a full notebook entirely by describing cells to an AI. I imagine the commands I'll need to implement are:
- Starting/Ending a prompt for a new cell
- Starting/Ending a prompt to edit the current cell
- Running the current cell
- Navigating up/down cells
- Restarting and running all cells

# Progress
I'm new to typescript and creating jupyterlab extensions, so currently doing a tutorial in the tutorial branch.
Progress will likely be slow.

# Related repos
- https://github.com/krassowski/jupyterlab-voice-control
- https://github.com/jupyterlab/jupyter-ai

I plan to use LangChain so that you can choose what LLM API you want to use, allowing you to use private local models if you wish. The license will likely be BSD-3-Clause so that I can heavily lean on krassowski's jupyterlab-voice-control as at least a reference. I will probably disable many of those commands that might conflict with the voice commands I want to implement.
