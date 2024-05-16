# Discord Bot

This is a simple Discord bot built using the discord.py library. The bot responds to certain commands and messages from users.

## Features

- Responds to a `hello` command with a greeting.
- Responds to a `say` command with a custom message based on the user's input.
- Sends a welcome message to new members when they join the server.
- Provides a `webpage` command that sends a link to a webpage.
- Handles errors that occur when processing commands.

## Commands

- `!hello`: The bot responds with a greeting.
- `!say <message>`: The bot responds with a custom message based on the user's input.
- `!webpage`: The bot sends a link to a webpage.

## Setup

1. Clone the repository.
2. Install the required dependencies with `pip install -r requirements.txt`.
3. Set up a `.env` file in the root directory of the project with the following content:

    ```
    DISCORD_TOKEN=<your-discord-bot-token>
    ```

4. Run the bot with `python test.py`.

## Code Overview

The bot is set up to listen for certain events and commands. When a message is received, the bot checks if the message was sent by itself (to avoid responding to its own messages), and then processes any commands in the message.

The bot also handles errors that occur when processing commands. If a command is not found, it sends a message to the user. For other errors, it sends a generic error message and prints the error to the console.

The bot sends a welcome message to new members when they join the server, and it has a `webpage` command that sends a link to a webpage.

The `get_response` function is a simple text-based response system. It takes a string input from the user, converts it to lowercase, and then checks if it contains certain keywords. If the input is empty, or if it doesn't contain any of the specified keywords ("hello", "help", "bye"), the function returns a default response of 'I am not sure what you are saying'. If the input does contain one of the keywords, the function returns a corresponding response.

The `main` function is the entry point of the bot. It starts the bot by calling the `run` method on the `bot` object, passing in the bot's token. The token is a unique identifier that Discord uses to authenticate the bot. 
