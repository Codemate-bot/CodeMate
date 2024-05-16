from typing import Final
import os
import discord
from discord.ext import commands
from dotenv import load_dotenv

# Function to get response based on user input
def get_response(user_input: str) -> str:
    lowered: str = user_input.lower()

    if lowered == '':
        return 'I am not sure what you are saying'
    
    elif "hello" in lowered:
        return "Hello! How can I help you today?"
    
    elif "help" in lowered:
        return "Sure! I am here to assist you. You can ask me anything."
    
    elif "bye" in lowered:
        return "Goodbye! Have a great day!"
    
    else:
        return 'I am not sure what you are saying'

# Load token from environment variable
load_dotenv()
TOKEN: Final[str] = os.getenv("DISCORD_TOKEN")

# Bot setup with command prefix
intents = discord.Intents.default()
intents.messages = True
bot = commands.Bot(command_prefix="!", intents=intents)

# Event when the bot is ready
@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')

# Handling incoming messages
@bot.event
async def on_message(message: discord.Message):
    if message.author == bot.user:
        return

    # Process commands
    await bot.process_commands(message)

# Command to say hello
@bot.command(name='hello')
async def hello(ctx: commands.Context):
    await ctx.send(f'Hello {ctx.author.mention}!')

# Command to respond with a custom message
@bot.command(name='say')
async def say(ctx: commands.Context, *, user_message: str):
    response = get_response(user_message)
    await ctx.send(response)

# Error handling
@bot.event
async def on_command_error(ctx: commands.Context, error: commands.CommandError):
    if isinstance(error, commands.CommandNotFound):
        await ctx.send("Sorry, I didn't understand that command.")
    else:
        await ctx.send("An error occurred. Please try again.")
        print(error)

# Welcome message
@bot.event
async def on_member_join(member: discord.Member):
    channel = discord.utils.get(member.guild.text_channels, name='general')
    if channel:
        await channel.send(f'Welcome to the server, {member.mention}!')

# Command to render render webpage
@bot.command(name='webpage')
async def webpage(ctx: commands.Context):
    await ctx.send("https://www.example.com")

# Main function to run the bot
def main():
    bot.run(TOKEN)

if __name__ == '__main__':
    main()