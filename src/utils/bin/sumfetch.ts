import config from '../../../config.json';

const summary = async (args: string[]): Promise<string> => {
  if (config.ascii === 'SteamWolf') {
    return `                                                  

 |  ---------------------------
  | ╔═╗┌┬┐┌─┐┌─┐┌┬┐┬ ┬┌─┐┬  ┌─┐
 |  ╚═╗ │ ├┤ ├─┤│││││││ ││  ├┤ 
  | ╚═╝ ┴ └─┘┴ ┴┴ ┴└┴┘└─┘┴─┘└  
 |  ---------------------------
  |
 |   summary
  | -----------
 |   ABOUT
  |  ${config.name}
 |   DJ | Photo & Video Editor | Python Coder | Beginner Video Producer | Creative Writer
  | 爵 <u><a href="https://drive.google.com/drive/folders/13i6pVkjvJCkA6qjiBb4cJNPptSpuPLOZ?usp=sharing" target="_blank">Portfolio</a></u>  
 |  ----------- 
  |  CONTACT 
 |   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u> 
  |  <u><a href="https://github.com/${config.social.github}" target="_blank">Github</a></u>
 |   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">Linkedin</a></u>
  | 爵 <u><a href="https://www.reddit.com/user/SteamWo1f" target="_blank">Reddit</a></u>
 |  爵 <u><a href="https://twitter.com/SteamWolf5" target="_blank">Twitter</a></u>
  | 爵 <u><a href="https://www.twitch.tv/steamwo1f" target="_blank">Twitch</a></u>
 |  爵 <u><a href="https://steamwolf.bandcamp.com/" target="_blank">Music</a></u>
  | 爵 <u><a href="https://www.tumblr.com/blog/steamwo1f" target="_blank">Tumblr</a></u>
 |  爵 <u><a href="https://discord.com/invite/XBz9hJAxzD" target="_blank">Discord Server</a></u>
  | 爵 <u><a href="https://www.youtube.com/channel/UCJqYptKIPNtsWRYWJZZH5Dg" target="_blank">YouTube</a></u>
 |  爵 <u><a href="https://archiveofourown.org/users/SteamWolf" target="_blank">Ao3</a></u>  
  | -----------
 |   DONATE 
  |  <u><a href="https://paypal.me/SteamWo1f" target="_blank">PayPal</a></u>
 |   <u><a href="https://ko-fi.com/steamwolf" target="_blank">Ko-Fi</a></u>
  | ---------------------------------------
`;
  } else {
    return `

   |  ---------------------------
    | ╔═╗┌┬┐┌─┐┌─┐┌┬┐┬ ┬┌─┐┬  ┌─┐
   |  ╚═╗ │ ├┤ ├─┤│││││││ ││  ├┤ 
    | ╚═╝ ┴ └─┘┴ ┴┴ ┴└┴┘└─┘┴─┘└  
   |  ---------------------------
    |
   |   summary
    | -----------
   |   ABOUT
    |  ${config.name}
   |   DJ | Photo & Video Editor | Python Coder | Beginner Video Producer | Creative Writer
    | 爵 <u><a href="https://drive.google.com/drive/folders/13i6pVkjvJCkA6qjiBb4cJNPptSpuPLOZ?usp=sharing" target="_blank">Portfolio</a></u>  
   |  ----------- 
    |  CONTACT 
   |   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u> 
    |  <u><a href="https://github.com/${config.social.github}" target="_blank">Github</a></u>
   |   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">Linkedin</a></u>
    | 爵 <u><a href="https://www.reddit.com/user/SteamWo1f" target="_blank">Reddit</a></u>
   |  爵 <u><a href="https://twitter.com/SteamWolf5" target="_blank">Twitter</a></u>
    | 爵 <u><a href="https://www.twitch.tv/steamwo1f" target="_blank">Twitch</a></u>
   |  爵 <u><a href="https://steamwolf.bandcamp.com/" target="_blank">Music</a></u>
    | 爵 <u><a href="https://www.tumblr.com/blog/steamwo1f" target="_blank">Tumblr</a></u>
   |  爵 <u><a href="https://discord.com/invite/XBz9hJAxzD" target="_blank">Discord Server</a></u>
    | 爵 <u><a href="https://www.youtube.com/channel/UCJqYptKIPNtsWRYWJZZH5Dg" target="_blank">YouTube</a></u>
   |  爵 <u><a href="https://archiveofourown.org/users/SteamWolf" target="_blank">Ao3</a></u>  
    | -----------
   |   DONATE 
    |  <u><a href="https://paypal.me/SteamWo1f" target="_blank">PayPal</a></u>
   |   <u><a href="https://ko-fi.com/steamwolf" target="_blank">Ko-Fi</a></u>
    | ---------------------------------------

`;
  }
};

export default summary;
