#!/bin/sh
sed -i.bak -e 's/{$ICECAST_SERVER_NAME}/icecast.arching-kaos.local/g' src/App.js src/Menu.js src/NowPlaying.js
sed -i.bak -e 's/{$RADIO_SERVER_NAME}/radio.arching-kaos.local/' src/Header.js
sed -i.bak -e 's/{$IRC_CLIENT}/https:\/\/kiwiirc.com\/nextclient\/\?settings=49cd08681623316a0b3fd692cb5cdafe/' src/Chat.js
sed -i.bak -e 's/{$API_SERVER_NAME}/api.arching-kaos.local/g' src/ShowList.js src/Menu.js
sed -i.bak -e 's/{$DOMAIN_NAME}/arching-kaos.local/' src/Signature.js
