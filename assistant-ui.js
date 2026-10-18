/* Shared presentation for the console assistant and the embedded entity assistant. */
'use strict';
window.VinceAssistantUI=Object.freeze({welcome(mode='console'){
 const cards=[['Collection summary','Show total collection and new vs retained tenants','collection','Show collection summary'],['Room occupancy','How many active rooms are occupied?','occupancy','Show room occupancy'],['Operator activity','Which operators use tenancies and smart meters?','operators','Show active operators'],['Full dashboard','Prepare the Staywhale dashboard report','dashboard','Prepare the Staywhale dashboard report']];
 return `<div class="chat-welcome"><span class="spark" aria-hidden="true">✧</span><h2>Your data has a story.<br>Let’s find it.</h2><p class="sub">Ask about collections, tenants, rooms, operators, or smart meters.</p><div class="suggestions">${cards.map(([title,detail,id,prompt])=>`<button type="button" class="suggestion" ${mode==='embedded'?`data-prompt="${prompt}"`:`data-action="ask" data-id="${id}"`}><b>${title} ↗</b>${detail}</button>`).join('')}</div></div>`;
}});
