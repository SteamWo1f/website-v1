import config from '../../../config.json';

const summary = async (args: string[]): Promise<string> => {
  if (config.ascii === 'SteamWolf') {
    return `                                                  
                                                              |   summary
                                                               | -----------
                                                              |   ABOUT
         :?7?~                                  :J!:           |  ${config.name}
        ~7   :J.                              .!!..^?:        |   DJ | Photo & Video Editor | Python Coder | Beginner Video Producer | Creative Writer
       !7     .?^                            ~7.    .Y.        | 爵 <u><a href="https://drive.google.com/drive/folders/13i6pVkjvJCkA6qjiBb4cJNPptSpuPLOZ?usp=sharing" target="_blank">Portfolio</a></u>  
      7!        !!                         :?:       .Y       |  ----------- 
     7!          ^?.                     .7~          ^J       |  CONTACT 
    ?~            .J:                   ^?.            !7     |   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u> 
   ?^               7~                 ^?               ?~     |  <u><a href="https://github.com/${config.social.github}" target="_blank">Github</a></u>
  J^                 ~?               ~?                 Y:   |   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">Linkedin</a></u>
 ~?                   ~?             ~7                  .Y.   | 爵 <u><a href="https://www.reddit.com/user/SteamWo1f" target="_blank">Reddit</a></u>
 J^                    ?7...........!7                    ^P  |  爵 <u><a href="https://twitter.com/SteamWolf5" target="_blank">Twitter</a></u>
 P.                 .:?7!:75:::::::^?!:.                  .G   | 爵 <u><a href="https://www.twitch.tv/steamwo1f" target="_blank">Twitch</a></u>
.P               :~!^^G   :J          .~!^.               .G  |  爵 <u><a href="https://steamwolf.bandcamp.com/" target="_blank">Music</a></u>
:Y             :5J   .5   :J             .^!!:            :P   | 爵 <u><a href="https://www.tumblr.com/blog/steamwo1f" target="_blank">Tumblr</a></u>
77            77~5   :Y   :Y                 ~7.          J~  |  爵 <u><a href="https://discord.com/invite/XBz9hJAxzD" target="_blank">Discord Server</a></u>
Y~          ^JJ~7B. .!G^:.~Y                   ~7.      .J:    | 爵 <u><a href="https://www.youtube.com/channel/UCJqYptKIPNtsWRYWJZZH5Dg" target="_blank">YouTube</a></u>
.Y.       .JG  .7PGJJ??!5??Y       .^!~~~~~^.    ~7.   .J.    |  爵 <u><a href="https://archiveofourown.org/users/SteamWolf" target="_blank">Ao3</a></u>  
 .Y.     :J^P.?!!?~^^^^^Y7~Y      .Y.      .~?.   ^5  :J.      | -----------
  .Y.   .P:~PJGY^.?~..~? YJY      ^J         .?~   Y:~?       |   DONATE 
   .Y. .57Y7 !PP :Y    P.YPY      ~?          :P   ^B7         |  <u><a href="https://paypal.me/SteamWo1f" target="_blank">PayPal</a></u>
    .Y.Y: ?~ ~GPY:~7^~7!??7Y      .7~       .!!.    G.        |   <u><a href="https://ko-fi.com/steamwolf" target="_blank">Ko-Fi</a></u>
     .G5  ?J^?PPB5?77?YJ??75......  .!~~~~~~~.      Y:         | ---------------------------------------
      ?5~~?:  .GJ~!GB5JPY?^:.....:~!~:              ?~        |  ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣶⣶⣾⣿⣿⣿⣿⣷⣶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
      !J^^^^^~~Y?~~7J?#7!!^:.   ..^!J#?.            5.         | ⠀⠀⠀⠀⠀⣠⢔⣫⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀
      .G..          ^7?J   .^~~~^.. :5.~7.         :Y         |  ⠀⠀⠀⣠⢊⡴⡫⢚⡽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
         .^!^.     ?~   .^!~.    :!!.   :Y      :!~.           | ⠀⠀⡴⣱⢫⢎⡔⡩⣚⠵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀
            .~!^.  .J:     .^!~~~:      77   .~!:             |  ⠀⣼⣽⣳⣣⢯⣞⡜⡱⣫⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
               .~!^..?~    .~~~~^.    ^?: .^!^.                | ⢸⣿⣿⣿⣿⣿⣿⣾⡽⣱⣫⠞⠉⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
                  .~!~?!~~~:.   .:~~~~~.^!~.                  |  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠃⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
                     .~!^.           :!~:                      | ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠘⠃⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                        .!7^......:!?^                        |  ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
                                                               | ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀⣀⣀⣠⣴⢟⡵⣳⢯⢿⣿⡟⣿⣿⣿⣿⡇
                                                              |  ⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣞⡵⣫⢏⢞⡽⡽⣻⢯⡟⠀
                                                               | ⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣚⢕⡡⢊⠜⡵⣣⠟⠀⠀
                                                              |  ⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢷⣫⢖⡥⢊⡴⠋⠀⠀⠀
                                                               | ⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣞⣭⠞⠋⠀⠀⠀⠀⠀
                                                              |  ⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠿⢿⣿⣿⣿⣿⡿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀


`;
  } else {
    return `

                                                              |   summary
                                                               | -----------
                                                              |   ABOUT
         :?7?~                                  :J!:           |  ${config.name}
        ~7   :J.                              .!!..^?:        |   DJ | Photo & Video Editor | Python Coder | Beginner Video Producer | Creative Writer
       !7     .?^                            ~7.    .Y.        | 爵 <u><a href="https://drive.google.com/drive/folders/13i6pVkjvJCkA6qjiBb4cJNPptSpuPLOZ?usp=sharing" target="_blank">Portfolio</a></u> 
      7!        !!                         :?:       .Y       |  ----------- 
     7!          ^?.                     .7~          ^J       |  CONTACT 
    ?~            .J:                   ^?.            !7     |   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u> 
   ?^               7~                 ^?               ?~     |  <u><a href="https://github.com/${config.social.github}" target="_blank">Github</a></u>
  J^                 ~?               ~?                 Y:   |   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">Linkedin</a></u>
 ~?                   ~?             ~7                  .Y.   | 爵 <u><a href="https://www.reddit.com/user/SteamWo1f" target="_blank">Reddit</a></u>
 J^                    ?7...........!7                    ^P  |  爵 <u><a href="https://twitter.com/SteamWolf5" target="_blank">Twitter</a></u>
 P.                 .:?7!:75:::::::^?!:.                  .G   | 爵 <u><a href="https://www.twitch.tv/steamwo1f" target="_blank">Twitch</a></u>
.P               :~!^^G   :J          .~!^.               .G  |  爵 <u><a href="https://steamwolf.bandcamp.com/" target="_blank">Music</a></u>
:Y             :5J   .5   :J             .^!!:            :P   | 爵 <u><a href="https://www.tumblr.com/blog/steamwo1f" target="_blank">Tumblr</a></u>
77            77~5   :Y   :Y                 ~7.          J~  |  爵 <u><a href="https://discord.com/invite/XBz9hJAxzD" target="_blank">Discord Server</a></u>
Y~          ^JJ~7B. .!G^:.~Y                   ~7.      .J:    | 爵 <u><a href="https://www.youtube.com/channel/UCJqYptKIPNtsWRYWJZZH5Dg" target="_blank">YouTube</a></u>
.Y.       .JG  .7PGJJ??!5??Y       .^!~~~~~^.    ~7.   .J.    |  爵 <u><a href="https://archiveofourown.org/users/SteamWolf" target="_blank">Ao3</a></u>  
 .Y.     :J^P.?!!?~^^^^^Y7~Y      .Y.      .~?.   ^5  :J.      | -----------
  .Y.   .P:~PJGY^.?~..~? YJY      ^J         .?~   Y:~?       |   DONATE 
   .Y. .57Y7 !PP :Y    P.YPY      ~?          :P   ^B7         |  <u><a href="https://paypal.me/SteamWo1f" target="_blank">PayPal</a></u>
    .Y.Y: ?~ ~GPY:~7^~7!??7Y      .7~       .!!.    G.        |   <u><a href="https://ko-fi.com/steamwolf" target="_blank">Ko-Fi</a></u>
     .G5  ?J^?PPB5?77?YJ??75......  .!~~~~~~~.      Y:         | ---------------------------------------
      ?5~~?:  .GJ~!GB5JPY?^:.....:~!~:              ?~        |  ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣶⣶⣾⣿⣿⣿⣿⣷⣶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
      !J^^^^^~~Y?~~7J?#7!!^:.   ..^!J#?.            5.         | ⠀⠀⠀⠀⠀⣠⢔⣫⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀
      .G..          ^7?J   .^~~~^.. :5.~7.         :Y         |  ⠀⠀⠀⣠⢊⡴⡫⢚⡽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
         .^!^.     ?~   .^!~.    :!!.   :Y      :!~.           | ⠀⠀⡴⣱⢫⢎⡔⡩⣚⠵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀
            .~!^.  .J:     .^!~~~:      77   .~!:             |  ⠀⣼⣽⣳⣣⢯⣞⡜⡱⣫⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
               .~!^..?~    .~~~~^.    ^?: .^!^.                | ⢸⣿⣿⣿⣿⣿⣿⣾⡽⣱⣫⠞⠉⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
                  .~!~?!~~~:.   .:~~~~~.^!~.                  |  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠃⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
                     .~!^.           :!~:                      | ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠘⠃⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                        .!7^......:!?^                        |  ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
                                                               | ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀⣀⣀⣠⣴⢟⡵⣳⢯⢿⣿⡟⣿⣿⣿⣿⡇
                                                              |  ⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣞⡵⣫⢏⢞⡽⡽⣻⢯⡟⠀
                                                               | ⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣚⢕⡡⢊⠜⡵⣣⠟⠀⠀
                                                              |  ⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢷⣫⢖⡥⢊⡴⠋⠀⠀⠀
                                                               | ⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣞⣭⠞⠋⠀⠀⠀⠀⠀
                                                              |  ⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠿⢿⣿⣿⣿⣿⡿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀
`;
  }
};

export default summary;
