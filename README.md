# **BROKEN SINCE THE NEW UPDATE**

# Node JS - Live Fortnite Discord Bot
This script will play tones over the bot accordingly during your game;
* Every 10 players that die <= 50 Alive
* When you win (Still in the works, but should work.)
* When your team loses (Its currently commented out, but just remove the `//` on line 280)

# Install
* Download files
* Use "npm install"
* do "node index"
* Run the game

# Things to try if things go wrong
* Dependency Errors: 
If its an issue with dependencies, I most likely cannot help you as I did not code them. But, if its because its not installed, try `npm install *the_missing_dep*.

# Known Issues
* `When you win` is currently set to `currentlyalive <= your team players` not accounting for `your team actually alive`
* The code is a total mess.. i know
* Most of this code makes no sense..
  * e.g. `message.content.includes('man ben')` & `message.content.includes('lee')`
     * This bot was originally made for one of my discords.. so some of the code is an inside joke/meme.
* There is a delay between my game and the bot.
  * There is nothing I can do about this, Fortnite has a delay on the file the bot reads it from. 
* `Unhandled errors` when not in game. These will most likely be fixed in a later build.
	 
# Need any help?
Join my `empty` Discord ;) https://discord.gg/wkdmu4g
