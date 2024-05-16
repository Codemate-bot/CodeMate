from typing import Final 
import os 
from dotenv import load_dotenv
from discord import Intents,Client,Message
from responses import get_response

# step 0 : load our token from somewhere safe 
load_dotenv()

TOKEN: Final[str] = os.getenv("DISCORD_TOKEN")
# print(TOKEN)

# bot setup 
intents = Intents.default() # this will give us all the intents we
intents.messages = True    # need for a basic bot
client = Client(intents=intents)

# step 2 : message event
async def send_message (message:Message, user_message:str) -> None:
    if not user_message :
        print('bot user message is empty')
        return
   
    try: 
        response = get_response(user_message)
        await message.channel.send(response)
    except Exception as e:
        print(e)
        
        
# step 3 : handling the startup for the bot
@client.event
async def on_ready() -> None:
    print(f'{client.user} has connected to Discord!')
    
# step 4 : handling incoming messages
@client.event
async def on_message(message:Message) -> None:
    if message.author == client.user:
        return
    
    username: str = str(message.author)
    user_message: str = str(message.content)
    channel: str = str(message.channel)

def main() -> None:
    client.run(token = TOKEN)

if __name__ == '__main__':
    main()