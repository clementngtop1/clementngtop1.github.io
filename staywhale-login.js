'use strict';
document.querySelectorAll('[data-info]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#loginInfoText').textContent=button.dataset.info;document.querySelector('#loginInfo').showModal();}));
document.querySelector('#closeLoginInfo').addEventListener('click',()=>document.querySelector('#loginInfo').close());
