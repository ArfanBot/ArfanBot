const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
        return `
「 *${botName}* 」

◪ *USER INFO*
  ❏ Name: ${pushname}
  ❏ XP: ${reqXp}
  ❏ Money: ${uangku}
  ❏ Registered: ✔️
◪ *BOT INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
  ❏ Version: 1.0.0
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MENU*
  │
  ├─ ❏ ${prefix}logomakermenu
  ├─ ❏ ${prefix}imagemakermenu
  ├─ ❏ ${prefix}stickermakermenu
  ├─ ❏ ${prefix}searchmenu
  ├─ ❏ ${prefix}educationmenu
  ├─ ❏ ${prefix}kerangmenu
  ├─ ❏ ${prefix}downloadermenu
  ├─ ❏ ${prefix}mememenu
  ├─ ❏ ${prefix}groupmenu
  ├─ ❏ ${prefix}soundmenu
  ├─ ❏ ${prefix}musicmenu
  ├─ ❏ ${prefix}islammenu
  ├─ ❏ ${prefix}stalkmenu
  ├─ ❏ ${prefix}wibumenu
  ├─ ❏ ${prefix}18+menu
  ├─ ❏ ${prefix}funmenu
  ├─ ❏ ${prefix}todmenu
  ├─ ❏ ${prefix}informationmenu
  ├─ ❏ ${prefix}stayonscreenmenu
  ├─ ❏ ${prefix}xpmenu
  ├─ ❏ ${prefix}limitmenu
  ├─ ❏ ${prefix}ownermenu
  └─ ❏ ${prefix}othermenu`
}
exports.help = help
