const { Client } = require('discord-rpc'),
    fs = require('fs'),
    readline = require('readline'),
    stream = require('stream'),
	Discord = require('discord.js'),
	dclient = new Discord.Client()
	token = "",
	rpc = new Client({ transport: "ipc" }),
    appClient = "413414231187390466",
	colors = require('colors/safe')
    
var lastidk = "";
var currentlyalive = "";
var alive = "";
var gameover = "yes";
var myTeamPlayers = 4;

dclient.on('ready', () => {
	console.log('Connected to Discord Bot!');
});

dclient.on('message', message => {
	const args = message.content.split(" ").slice(1);

	if (message.content.startsWith('win')) {
		channel = dclient.channels.find('name', 'Admin Chit Chat');
			channel.join()
				.then(connection => {
					console.log('Connected to Voice');
					const dispatcher = connection.playFile('C:/Users/Mick/Music/win.mp3');
			})
			.catch(console.error);
	}
	
	if (message.content === 'players') {
		channel = dclient.channels.find('name', 'Admin Chit Chat');
		channel.join()
			.then(connection => {
				console.log('Connected to Voice');
				const dispatcher = connection.playFile('C:/Users/Mick/Music/fortnitebot.mp3');
		})
		.catch(console.error);
	}

	if (message.content === 'gameover') {
		channel = dclient.channels.find('name', 'Admin Chit Chat');
		channel.join()
			.then(connection => {
				console.log('Connected to Voice');
				const dispatcher = connection.playFile('C:/Users/Mick/Music/gameover.mp3');
		})
		.catch(console.error);
	}
	
	if (message.content.startsWith('leave')) {
		channel = dclient.channels.find('name', 'Admin Chit Chat');
		channel.leave();
	}

	if (message.content.startsWith('players ')) {
		channel = dclient.channels.find('name', 'Admin Chit Chat');
		channel.join();
		myTeamPlayers = parseInt(args[0]);
		message.reply("Set players to " + args[0]);
	}
	
	if (message.content.includes('lee')) {
		channel = dclient.channels.find('name', 'Admin Chit Chat');
		channel.join()
			.then(connection => {
				console.log('Connected to Voice');
				const dispatcher = connection.playFile('C:/Users/Mick/Music/lee.mp3');
		})
		.catch(console.error);
	}
	
	if (message.content.includes('man ben')) {
		channel = dclient.channels.find('name', 'Admin Chit Chat');
		channel.join()
			.then(connection => {
				console.log('Connected to Voice');
				const dispatcher = connection.playFile('C:/Users/Mick/Music/manben.mp3');
		})
		.catch(console.error);
	}
	
	if (message.content.includes('.mp3')) {
		channel = dclient.channels.find('name', 'Admin Chit Chat');
		channel.join()
			.then(connection => {
				console.log('Connected to Voice');
				const dispatcher = connection.playFile('C:/Users/Mick/Music/'+args[0]);
		})
		.catch(console.error);
	}
	
	if (message.content.includes('land')) {
		console.log(message);
		if (message.author !== 'Fornite'){
			message.reply('I think you should go to...');
			var myRandom = Math.floor((Math.random() * 10) + 1);
			switch (myRandom) {
				case 1:
					message.reply('Retail Tactic');
					break; 
				case 2:
					message.reply('Tilted Towers');
					break; 
				case 3:
					message.reply('Salty Springs');
					break; 
				case 4:
					message.reply('Fatal Fields');
					break; 
				case 5:
					message.reply('Shifty Shafts');
					break; 
				case 6:
					message.reply('Greasy Grove');
					break; 
				case 7:
					message.reply('Snobby Shores');
					break; 
				case 8:
					message.reply('Pleasant Park');
					break; 
				case 9:
					message.reply('Lucky L4nding');
					break; 
				case 10:
					message.reply('Anarchy Acres');
					break; 
			}
		}
	}
});

async function updatediscord() {
	var lines = process.stdout.getWindowSize()[1];
	for(var i = 0; i < lines; i++) {
		console.log('\r\n');
	}
	
	console.log(colors.green("+=================================================+"))
	console.log(colors.green("|                Chaps Fornite Bot                |"))
	console.log(colors.green("|=================================================|"))
	console.log(colors.green("|               All Systems Online!               |"))
	console.log(colors.green("+-------------------------------------------------+"))
	console.log("")
	console.log("")
	console.log("")
	console.log("")
	
    var instream = fs.createReadStream(process.env.LOCALAPPDATA+"/FortniteGame/Saved/Logs/FortniteGame.log");
    var outstream = new stream;
    var rl = readline.createInterface(instream, outstream);
    rl.on('line', function(line) {
        // process line here
        i++;
        var id = "["+i+"] ";
        line = line.replace("[", "")
        var split = line.split("]");
        var command = split[2]+"";
        var ctype = command.split(": ");
        var type = ctype[0];
        if(type=="LogExit"){
            lastidk = "";
        } else if(type=="LogOnline"){
            var split = line.split(" ");
            var split2 = command.split(" ");
            if(split[3]=="FOnlinePresenceMcp::OnXmppPresenceReceived"){
                if(split[7]){
                    var total = "";
                    for (var i = 7; i < split.length; i++) {
                   // console.log(split[7]+split[8])
                       total = total+split[i];
					 //  console.log(split[8]);
    
                    }
                    lastidk = total;
                }
            }
        
        }
    });
    if(lastidk != ""){
        var obj = JSON.parse(lastidk);
		var filteredParty = ""
		var filtered = {}
		
		//console.log("");console.log("");console.log(colors.yellow("------- rawJSON -------"));console.log(lastidk);
        console.log("");console.log("");console.log(colors.yellow("------- obj -------"));console.log(obj);
		console.log("");console.log("");console.log(colors.yellow("------- obj[0] -------"));console.log(obj[0].Properties);

		for (key in obj[0].Properties) {
			if (key.match(/joininfo/)) filteredParty = key;
			//console.log(key.match(/joininfo/))
		}

		console.log("");console.log("");console.log("[Info] **Updating game data**");
		if(obj[0].Properties[filteredParty].sourceDisplayName === "MickyDNet" || obj[0].Properties[filteredParty].sourceDisplayName === "Bossko30" || obj[0].Properties[filteredParty].sourceDisplayName === "Kato_m8" || obj[0].Properties[filteredParty].sourceDisplayName === "oOoSCOTToOo") {
			console.log("[Info] Your party id: "+filteredParty)
			console.log("[Info] Your party member: "+obj[0].Properties[filteredParty].sourceDisplayName)
			if(obj[0].bIsPlaying==true){
				if(obj[0].Status+"".includes("-")){
					/*if(obj[0].Properties.FortPartySize_i <= myTeamPlayers){*/
						var split = obj[0].Status.split("-");
						var currentlyalive = split[1];
						var currentlyalive = currentlyalive.replace("Alive", "");
						gameover = "no";
						
						if (currentlyalive <= 50){
							if (currentlyalive == alive) {
								console.log(); console.log();
								console.log(colors.yellow("[Info] Same amount of players alive!"));
							} else {
								console.log(); console.log();
								console.log(colors.green("[Info] Someone died! :O"));
								console.log("[Info] Currently Alive: " + currentlyalive);
								console.log("[Info] Alive: " + alive)
								
								if (currentlyalive <= obj[0].Properties.FortPartySize_i){
									channel = dclient.channels.find('name', 'Admin Chit Chat');
									channel.join()
										.then(connection => {
											console.log(); console.log();
											console.log(colors.green('[Info] Connected to Voice'));
											const dispatcher = connection.playFile('C:/Users/Mick/Music/win.mp3');
									})
									.catch(console.error);
								}

								if (currentlyalive % 10 === 0){
									channel = dclient.channels.find('name', 'Admin Chit Chat');
									channel.join()
										.then(connection => {
											console.log(); console.log();
											console.log(colors.green('Connected to Voice'));
											const dispatcher = connection.playFile('C:/Users/Mick/Music/fortnitebot.mp3');
									})
									.catch(console.error);
								} else {
									console.log(); console.log();
									console.log("Not a divider of 10!");
								}
							}
						} else {
							console.log(); console.log();
							console.log(colors.yellow("[Info] TOO MANY PLAYERS!!!"));
						}
						
						alive = split[1];
						alive = alive.replace("Alive", "");
						
						console.log(); console.log();
						console.log("[Info] Ingame - "+ alive + " Alive")
						
						var tochannel = dclient.channels.find('name','fortnite-shit');
						
						rpc.setActivity({
							details: `Battle Royale`,
							state: `Ingame - ${alive} Alive`,
							largeImageKey: 'battle_royale',
							smallImageKey: 'logo',
							largeImageText: `Battle Royale`,
							smallImageText: `Fortnite`,
							instance: false,
						});
					/*} else {
						console.log("NOT YOUR GAME!!!")
					} --fixed to player name now.. */
				}
			} else {
				if (gameover == "no"){
					if(obj[0].Properties.FortPartySize_i > 2){
						channel = dclient.channels.find('name', 'Admin Chit Chat');
							channel.join()
								.then(connection => {
									console.log('Connected to Voice');
									//const dispatcher = connection.playFile('C:/Users/Mick/Music/gameover.mp3');
							})
							.catch(console.error);
					}
				}
				
				rpc.setActivity({
					details: `Battle Royale`,
					state: `Game Menu`,
					largeImageKey: 'battle_royale',
					smallImageKey: 'logo',
					largeImageText: `Battle Royale`,
					smallImageText: `Fortnite`,
					instance: false,
				});
				gameover = "yes";
			}
		} else {
			console.log(obj[0].Properties)
			
			var filteredParty = ""
			var filtered = {}

			for (key in obj[0].Properties) {
				if (key.match(/joininfo/)) filteredParty = key;
				//console.log(key.match(/joininfo/))
			}
			
			console.log("")
			console.log("")
			console.log("")
			console.log("")
			console.log(colors.yellow("[Info] Found another party in your friends list: "+filteredParty))
			console.log(colors.yellow("[Info] Their party member: "+obj[0].Properties[filteredParty].sourceDisplayName))
		}
    } else {
		console.log(colors.yellow("Cannot see your game... Is Fortnite open?"))
	}
    lastidk = "";
}

rpc.on('ready', () => {
    console.log(`Connected to Discord! (${appClient})`);
    global.intloop = setInterval(updatediscord, 1500);
});

rpc.login(appClient).catch(console.log("Discord error"));

dclient.login(token);