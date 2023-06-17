// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
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

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'info' - short summary.`;
};

//export const resume = async (args: string[]): Promise<string> => {
// window.open(`${config.resume_url}`);
//  return 'Opening resume...';
//};



// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls['Ko-Fi']}" target="_blank">patreon</a></u>
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

export const Reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/${config.social.reddit}/`);

  return 'Opening Teddit...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://www.twitter.com/${config.social.twitter}/`);

  return 'Opening Twitter...';
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
  return `you can't open vscode from here, try 'Atom'.`;
};

export const nano = async (args?: string[]): Promise<string> => {
  return `Just use 'vim'.`;
};

export const atom = async (args?: string[]): Promise<string> => {
  return `Not compleatly free, Try 'Sublime Text'`;
};

export const sublime = async (args?: string[]): Promise<string> => {
  return `At this point you must know nothing is going to happen, just stop and go touch grass.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const ao3 = async (args?: string[]): Promise<string> => {
  return `You found the gay corner: https://archiveofourown.org/users/SteamWolf`;
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
                                                                                 
  
Type 'info' to display summary / links.

Type 'help' to see the list of available commands.
`
}
