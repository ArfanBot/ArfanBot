const fun = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
  ❏ Version: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *FUN*
  │
  ├─ ❏ ${prefix}alay
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}gay
  ├─ ❏ ${prefix}trigger
  ├─ ❏ ${prefix}wasted
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}game
  ├─ ❏ ${prefix}bucin
  ├─ ❏ ${prefix}trust
  ├─ ❏ ${prefix}dare
  └─ ❏ ${prefix}simi`
}
exports.fun = fun
