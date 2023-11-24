// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help (Unformated)
export const Unformatedhelp = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'info' to display summary.
`;
};

// Help V2
export const help = async (args: string[]): Promise<string> => {
  return `
  Welcome! Here are all the available commands:

  == Info ==
  Info [Main page with all of my links]
  Help [Displays this text]
  Whoami [Says your name]
  Projects [Displays the current projects I have on my GitHub]
  oo [Optimized Oasis's basic info]

  == Contact ==
  Email [Opens a mailto link so you can email me]
  GitHub [Opens a Link to my GitHub profile]
  Linkedin [Opens a Link to my Linkedin profile]
  Reddit [Opens a Link to my Reddit profile]
  Twitter [Opens a Link to my Twitter profile]
  Ao3 [Opens a Link to my Ao3 profile]

  == Other ==
  Donate [Opens options where you can tip me]
  Banner [Displays the ASCII banner that is shown at website start]
  Repo [The GitHub link for this website]

  == Typical linux commands / fun stuff ==
  Weather (City) [Shows the weather for the inputted city]
  Quote [A random quote from quotable.io]
  Date [Shows the current date]
  vi [Text and code editor]
  cd [Go to other pages]
  ls [List's other pages]
  sudo [With great power..]
  echo (text) [Echo's what you input]

  `;
};


// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
//export const about = async (args: string[]): Promise<string> => {
//  return `Hi, I am ${config.name}. 
//Welcome to my website!
//More about me:
//'info' - short summary.`;
//};

//export const resume = async (args: string[]): Promise<string> => {
// window.open(`${config.resume_url}`);
//  return 'Opening resume...';
//};



// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">PayPal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls['Ko-Fi']}" target="_blank">Ko-Fi</a></u>
- <u>Bitcoin: bc1qc0rr93ax7fdj2ylyqwrlq7xnqxdryf345gsd5c7vnlvtsk9wkktq98d5tg </u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening GitHub...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`www.linkedin.com/in/steamwolf`);

  return 'Opening Linkedin...';
};

export const Ao3 = async (args: string[]): Promise<string> => {
  window.open(`https://archiveofourown.org/users/SteamWolf`);

  return 'Opening Ao3...';
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/${config.social.reddit}/`);

  return 'Opening Reddit...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://www.twitter.com/${config.social.twitter}/`);

  return 'Opening Twitter...';
};

export const V2 = async (args: string[]): Promise<string> => {
  window.open(`https://steamwolf.vercel.app/`);

  return 'Opening New Website...';
};

export const v2 = async (args: string[]): Promise<string> => {
  window.open(`https://steamwolf.vercel.app/`);

  return 'Opening New Website...';
};

// Typical linux commands / fun stuff
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `/a
/bunch
/of
/fake
/directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use 'vscode'.`;
};

export const vscode = async (args?: string[]): Promise<string> => {
  return `It's okay but it's made by Microsoft, try 'atom'.`;
};

export const nano = async (args?: string[]): Promise<string> => {
  return `Just use 'vim'.`;
};

export const atom = async (args?: string[]): Promise<string> => {
  return `Not compleatly free, Try 'sublime text'`;
};

export const sublime = async (args?: string[]): Promise<string> => {
  return `at this point you must know nothing is going to happen, just stop and go touch grass.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const oo = async (args?: string[]): Promise<string> => {
  window.open('https://steamwo1f.github.io/OOS/', '_blank')

  return `
   ██████  ██████  ████████ ██ ███    ███ ██ ███████ ███████ ██████       ██████   █████  ███████ ██ ███████ 
  ██    ██ ██   ██    ██    ██ ████  ████ ██    ███  ██      ██   ██     ██    ██ ██   ██ ██      ██ ██      
  ██    ██ ██████     ██    ██ ██ ████ ██ ██   ███   █████   ██   ██     ██    ██ ███████ ███████ ██ ███████ 
  ██    ██ ██         ██    ██ ██  ██  ██ ██  ███    ██      ██   ██     ██    ██ ██   ██      ██ ██      ██ 
   ██████  ██         ██    ██ ██      ██ ██ ███████ ███████ ██████       ██████  ██   ██ ███████ ██ ███████ 
                                                                                                             
                                                                                                             
   Welcome to Optimized Oasis, a carefully curated Minecraft modpack designed to enhance your gameplay experience without overwhelming you with new items or creatures. 
   This modpack focuses on improving the game's quality of life and world generation aspects, creating a seamless and optimized adventure for players of all levels.

   Optimized Oasis introduces a range of mods that work together harmoniously to improve various aspects of the game. 
   These mods provide convenient features like detailed information on in-game elements, customizable character appearances, and tooltips that offer valuable insights into items and blocks. 
   Additionally, the modpack enhances the atmosphere with immersive ambient sounds and adds visual flair with improved skin layers and customizable advancement displays.
   
   Moreover, Optimized Oasis enriches the world generation process, resulting in breathtaking landscapes and captivating structures. From vibrant biomes to unique and awe-inspiring 
   landmarks, every world offers a distinct and memorable experience.
   
   Embark on a refined Minecraft journey with Optimized Oasis, where your adventure is optimized for maximum enjoyment. 
   Explore, build, and survive in a world where the enhancements seamlessly integrate with the existing gameplay, providing a truly immersive and rewarding experience.
  `;
};


// Banner
export const banner = (args?: string[]): string => {
  return `

  ███████╗████████╗███████╗ █████╗ ███╗   ███╗██╗    ██╗ ██████╗ ██╗     ███████╗
  ██╔════╝╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║    ██║██╔═══██╗██║     ██╔════╝
  ███████╗   ██║   █████╗  ███████║██╔████╔██║██║ █╗ ██║██║   ██║██║     █████╗  
  ╚════██║   ██║   ██╔══╝  ██╔══██║██║╚██╔╝██║██║███╗██║██║   ██║██║     ██╔══╝  
  ███████║   ██║   ███████╗██║  ██║██║ ╚═╝ ██║╚███╔███╔╝╚██████╔╝███████╗██║     
  ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚══╝╚══╝  ╚═════╝ ╚══════╝╚═╝                                                                                                                                                                                            
                                                                                 
NOTICE: This website in no longer going to be updated with new information, please view the new version by typing 'V2'

Type 'info' to display summary / links.

Type 'help' to see the list of available commands.
`
}
