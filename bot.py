import discord

intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')
        
# "excute" command rendering another web page 
    if message.content.startswith('$excute'):
        await message.channel.send('https://www.google.com')
        
client.run('your token here')