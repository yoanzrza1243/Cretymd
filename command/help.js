const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┅═┅═❏ *Botz WhatsApp* ❏═┅═┅

*❏◈▻ USER BOT*

❏➭ Nama: ${pushname !== undefined ? pushname : '-'}
❏➭ Status: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
❏➭ Limit: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
❏➭ Balance: ${toCommas(getBalance(sender, balance))}
❏➭ Role: ${role}

*❏◈▻ OWNER BOT*

❏➭ Nama: ${botName}
❏➭ Creator: ${ownerName}
❏➭ Mode: *Public*
❏➭ Jam: ${jam} WIB
❏➭ Tanggal: ${tanggal(new Date())}

❏––––––『 *ALLMENU* 』––––––

╭––『 Itsuka Menu 』
┆
┆❏ .menu
┆❏ .infobot
┆❏ .sewa
┆❏ .speed
┆❏ .runtime
┆❏ .owner
┆❏ .donasi
┆❏ .dashboard 
┆
╰–––––––––––––––༓

╭––『 Group Menu 』
┆
┆❏ .antilink
┆❏ .antilink2
┆❏ .antiwame
┆❏ .antiwame2
┆❏ .welcome
┆❏ .afk
┆❏ .hidetag
┆❏ .linkgc
┆❏ .setppgc
┆❏ .setppgc2
┆❏ .setnamegc
┆❏ .setdesc
┆❏ .open
┆❏ .close
┆❏ .kick
┆❏ .promote
┆❏ .demote
┆❏ .revoke
┆❏ .setwelcome
┆❏ .setleft
┆❏ .left
┆
╰–––––––––––––––༓

╭––『 Sticker Menu 』
┆
┆❏ .sticker
┆❏ .smeme
┆❏ .emojimix
┆❏ .stickerwm
┆❏ .tourl
┆❏ .tovn
┆❏ .toaudio
┆❏ .tomp3
┆❏ .toimg
┆❏ .nuliskiri
┆❏ .nuliskanan
┆❏ .say
┆❏ .translate
┆❏ .obfus
┆❏ .ssweb
┆
╰–––––––––––––––༓

╭––『 Download Menu 』
┆
┆❏ .play
┆❏ .ytmp4
┆❏ .ytmp3
┆❏ .instagram
┆❏ .mediafire
┆❏ .facebook
┆❏ .ytsearch 
┆❏ .google
┆❏ .mediafire
┆❏ .tiktok
┆❏ .tiktokaudio
┆❏ .gitclone
┆
╰–––––––––––––––༓

╭––『 RPG Menu 』
┆
┆❏ .tictactoe
┆❏ .casino
┆❏ .deltt
┆❏ .delcasino
┆❏ .inventory
┆❏ .joinrpg
┆❏ .buy
┆❏ .sell
┆❏ .heal
┆❏ .hunt
┆❏ .adventure
┆❏ .luckyday
┆❏ .killslime
┆❏ .killgoblin
┆❏ .killdevil
┆❏ .killbehemonth
┆❏ .killdemon
┆❏ .killdemonking
┆❏ .mining
┆❏ .sellikan
┆❏ .sellbesi
┆❏ .sellemas
┆❏ .jelajah
┆❏ .mancing
┆❏ .jualikan
┆❏ .jualcoal
┆❏ .lebur
┆❏ .jualstone
┆❏ .jualingot
┆❏ .jualkayu
┆❏ .nebang
┆❏ .goplanet
┆❏ .jualbahankimia
┆
╰–––––––––––––––༓

╭––『 Store Menu 』
┆
┆❏ .list
┆❏ .dellist
┆❏ .addlist
┆❏ .update
┆❏ .jeda
┆❏ .tambah
┆❏ .kurang
┆❏ .bagi
┆❏ .kali
┆❏ .proses
┆❏ .done
┆❏ .setdone
┆❏ .changedone
┆❏ .delsetdone
┆❏ .setproses
┆❏ .changeproses
┆❏ .delsetproses
┆
╰–––––––––––––––༓

╭––『 Campur Menu 』
┆
┆❏ .fitnah
┆❏ .nowa
┆❏ .fakehidetag
┆❏ .react
┆❏ .getquoted
┆❏ .lirik
┆❏ .grupwa
┆❏ .pinterest
┆❏ .waifu
┆❏ .cecan
┆❏ .cogan
┆❏ .limit
┆❏ .balance
┆❏ .transfer
┆❏ .buylimit
┆❏ .buyglimit
┆❏ .toplocal
┆❏ .topglobal
┆
╰–––––––––––––––༓

╭––『 Anonymous Menu 』
┆
┆❏ .menfess
┆❏ .confess
┆❏ .start
┆❏ .next
┆❏ .stop
┆❏ .balasmenfess
┆❏ .stopmenfess
┆❏ .tolakmenfess
┆
╰–––––––––––––––༓

╭––『 Owner Menu 』
┆
┆❏ .join
┆❏ .left
┆❏ .public
┆❏ .self
┆❏ .setppbot
┆❏ .setppbot2
┆❏ .broadcast 
┆❏ .autoread
┆❏ .autobio
┆❏ .antidelete
┆❏ .antiviewonce 
┆❏ .autorespond
┆❏ .anticall
┆❏ .autoblok212
┆❏ .bcimg
┆❏ .bcvn
┆❏ .bcstik
┆❏ .bcvideo
┆❏ .bcsewa
┆❏ .addpremium 
┆❏ .addsewa
┆❏ .delpremium
┆❏ .delsewa
┆
╰–––––––––––––––༓

*TEXTPRO MENU*${petik}
 • ${prefix}halloween2
 • ${prefix}horror
 • ${prefix}game8bit
 • ${prefix}layered
 • ${prefix}glitch2
 • ${prefix}coolg
 • ${prefix}coolwg
 • ${prefix}realistic
 • ${prefix}space3d
 • ${prefix}gtiktok
 • ${prefix}stone
 • ${prefix}marvel
 • ${prefix}marvel2
 • ${prefix}pornhub
 • ${prefix}avengers
 • ${prefix}metalr
 • ${prefix}metalg
 • ${prefix}metalg2
 • ${prefix}halloween2
 • ${prefix}lion
 • ${prefix}wolf_bw
 • ${prefix}wolf_g
 • ${prefix}ninja
 • ${prefix}3dsteel
 • ${prefix}horror2
 • ${prefix}lava
 • ${prefix}bagel
 • ${prefix}blackpink
 • ${prefix}rainbow2
 • ${prefix}water_pipe
 • ${prefix}halloween
 • ${prefix}sketch
 • ${prefix}sircuit
 • ${prefix}discovery
 • ${prefix}metallic2
 • ${prefix}fiction
 • ${prefix}demon
 • ${prefix}transformer
 • ${prefix}berry
 • ${prefix}thunder
 • ${prefix}magma
 • ${prefix}3dstone
 • ${prefix}neon
 • ${prefix}glitch
 • ${prefix}harry_potter
 • ${prefix}embossed
 • ${prefix}broken
 • ${prefix}papercut
 • ${prefix}gradient
 • ${prefix}glossy
 • ${prefix}watercolor
 • ${prefix}multicolor
 • ${prefix}neon_devil
 • ${prefix}underwater
 • ${prefix}bear
 • ${prefix}wonderfulg
 • ${prefix}christmas
 • ${prefix}neon_light
 • ${prefix}snow
 • ${prefix}cloudsky
 • ${prefix}luxury2
 • ${prefix}gradient2
 • ${prefix}summer
 • ${prefix}writing
 • ${prefix}engraved
 • ${prefix}summery
 • ${prefix}3dglue
 • ${prefix}metaldark
 • ${prefix}neonlight
 • ${prefix}oscar
 • ${prefix}minion
 • ${prefix}holographic
 • ${prefix}purple
 • ${prefix}glossyb
 • ${prefix}deluxe2
 • ${prefix}glossyc
 • ${prefix}fabric
 • ${prefix}neonc
 • ${prefix}newyear
 • ${prefix}newyear2
 • ${prefix}metals
 • ${prefix}xmas
 • ${prefix}blood
 • ${prefix}darkg
 • ${prefix}joker
 • ${prefix}wicker
 • ${prefix}natural
 • ${prefix}firework
 • ${prefix}skeleton
 • ${prefix}balloon
 • ${prefix}balloon2
 • ${prefix}balloon3
 • ${prefix}balloon4
 • ${prefix}balloon5
 • ${prefix}balloon6
 • ${prefix}balloon7
 • ${prefix}steel
 • ${prefix}gloss
 • ${prefix}denim
 • ${prefix}decorate
 • ${prefix}decorate2
 • ${prefix}peridot
 • ${prefix}rock
 • ${prefix}glass
 • ${prefix}glass2
 • ${prefix}glass3
 • ${prefix}glass4
 • ${prefix}glass5
 • ${prefix}glass6
 • ${prefix}glass7
 • ${prefix}glass8
 • ${prefix}captain_as2
 • ${prefix}robot
 • ${prefix}equalizer
 • ${prefix}toxic
 • ${prefix}sparkling
 • ${prefix}sparkling2
 • ${prefix}sparkling3
 • ${prefix}sparkling4
 • ${prefix}sparkling5
 • ${prefix}sparkling6
 • ${prefix}sparkling7
 • ${prefix}decorative
 • ${prefix}chocolate
 • ${prefix}strawberry
 • ${prefix}koifish
 • ${prefix}bread
 • ${prefix}matrix
 • ${prefix}blood2
 • ${prefix}neonligth2
 • ${prefix}thunder2
 • ${prefix}3dbox
 • ${prefix}neon2
 • ${prefix}roadw
 • ${prefix}bokeh
 • ${prefix}gneon
 • ${prefix}advanced
 • ${prefix}dropwater
 • ${prefix}wall
 • ${prefix}chrismast
 • ${prefix}honey
 • ${prefix}drug
 • ${prefix}marble
 • ${prefix}marble2
 • ${prefix}ice
 • ${prefix}juice
 • ${prefix}rusty
 • ${prefix}abstra
 • ${prefix}biscuit
 • ${prefix}wood
 • ${prefix}scifi
 • ${prefix}metalr
 • ${prefix}purpleg
 • ${prefix}shiny 
 • ${prefix}jewelry
 • ${prefix}jewelry2
 • ${prefix}jewelry3
 • ${prefix}jewelry4
 • ${prefix}jewelry5
 • ${prefix}jewelry6
 • ${prefix}jewelry7
 • ${prefix}jewelry8
 • ${prefix}metalh
 • ${prefix}golden
 • ${prefix}glitter
 • ${prefix}glitter2
 • ${prefix}glitter3
 • ${prefix}glitter4
 • ${prefix}glitter5
 • ${prefix}glitter6
 • ${prefix}glitter7
 • ${prefix}metale
 • ${prefix}carbon
 • ${prefix}candy
 • ${prefix}metalb
 • ${prefix}gemb
 • ${prefix}3dchrome
 • ${prefix}metalb2
 • ${prefix}metalg
 • ${prefix}metalg${petik}
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `*🎭 LIST HARGA SEWA 🎭*

Rp 2.000 = °2 Hari
Rp 5.000 = °6 Hari
Rp 10.000 = °13 Hari
Rp 15.000 = °19 Hari
Rp 20.000 = 27 Hari
Rp 27.000 = permanen
====================
PROMO HARI INI ✨
*Rp 15.000 = Permanent*
========================
_• BOT ON 24 JAM_
_• ADA MENU DOWNLOAD_
_• BISA BIKIN STIKER_
_• ADA ANTILINK+WELCOME_
_• BISA JAGAIN KAMU EH 
MAKSUDNYA JAGAIN GRUP_

BERMINAT? CHAT NO OWNER
KETIK .OWNER`