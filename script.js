
		const lockScreen = document.getElementById('lockScreen');
		const passwordScreen = document.getElementById('passwordScreen');
		const phone = document.getElementById('phone');
		let startY = null;
		let opened = false;
		let incorrectAttempts = 0;
		// ===== CONTENIDO EDITABLE DEL REGALO =====
		const birthdayData = {
			owner:'Katherine', contact:{name:'Jeremy',phone:'+51 906-538-792',nickname:'corazon(asi me decias para ponerme nervioso que culpa tengo jajsa)',met:'9/08/26',story:'recuerdo que yo andaba hablando puras tonterias y tu me acompañaste',together:'jugar,hablar,reirnos',special:'me gusta que me digas que me quieres, y mas aun cuando decis que no es mentira'},
			playlist:{title:'Los Babosos😺❤️',description:'Canciones para compartir ♡',cover:'imagenes/foto de playlist.jpg'},
			// ===== AÑADIR FOTOS AQUÍ =====
			gallery:['imagenes/cuando la conoci.png','imagenes/reunion.png','imagenes/sentados.png','imagenes/abrazo.png'],
			// ===== EDITAR CANCIONES AQUÍ =====
			songs:[
				{title:'From The Start',artist:'Laufey',duration:'',src:'audio/Laufey - From The Start.mp3',cover:''},
				{title:'Hail To The King',artist:'Avenged Sevenfold',duration:'',src:'audio/Avenged Sevenfold - Hail To The King.mp3',cover:''},
				{title:'Given Up',artist:'Linkin Park',duration:'',src:'audio/Given Up Linkin Park.mp3',cover:''},
				{title:'',artist:'',duration:'',src:'',cover:''},
				{title:'',artist:'',duration:'',src:'',cover:''},
				{title:'',artist:'',duration:'',src:'',cover:''}
			],
			// ===== EDITAR MENSAJES AQUÍ =====
			messages:[
				{from:'Katherine',text:'ya'},
				{from:'Katherine',text:'pues'},
				{from:'Katherine',text:'te vas a metiendo a mm2?'},
				{from:'Jeremy',text:'claro dame 2 min'},
				{from:'Katherine',text:'ya'},
				{from:'Katherine',text:'avisas'},
				{from:'Jeremy',text:'yap'},
				{from:'Jeremy',text:'osea de ya'},
				{from:'Jeremy',text:'eseta'},
				{from:'Katherine',text:'voy'},
				{type:'date',text:'20 sept, 12:14 p.m'},
				{from:'Katherine',text:'chao Jeremy'},
				{from:'Jeremy',text:'chay luz'},
				{from:'Katherine',type:'sticker',src:'imagenes/sticker.png'}
			],
			chatResponses:{firstMessage:[
				{from:'Jeremy',text:'cuanto tiempooo'},
				{from:'Jeremy',text:'por cierto no es que sea yo como tal, asi que tampoco es que pueda tener la respuesta de todo, pero si deje chance a que preguntes muchas cosas, y yo puse respuestas a cada pregunta que se me ocurriera en el transcurso de los dos meses que hacia esto, pregunta lo que quieras o dime lo que sea, si tengo la respuesta, te lo dire'},
				{from:'Jeremy',type:'sticker',src:'imagenes/sticker2.png'}
			],rules:[]},
			// ===== EDITAR CALENDARIO AQUÍ =====
			calendarNotes:{'2026-09-27':'Fecha en la que planeé darte este regalo','2026-09-28':'Hoy hice...','2026-09-29':'Hoy agregué...'},
			notes:[{title:'Una idea',text:'Aquí irá una nota especial.',date:'Septiembre 2026'},{title:'Recordatorio',text:'Preparar algo bonito para Katherine.',date:''}],
			// ===== FRASES DEL GATO =====
			petPhrases:['Miau','Hola Katherine','¿Otra caricia?','prrr...'],settings:{birthday:'[CUMPLEAÑOS]',owner:'[EDITAR DESPUÉS]'},secret:'Mensaje secreto pendiente 👀'
		};
		const petFoods=[
			{id:'fish',name:'Pescadito',icon:'🐟',price:12},
			{id:'milk',name:'Leche',icon:'🥛',price:15},
			{id:'chicken',name:'Pollito',icon:'🍗',price:18},
			{id:'canned',name:'Comida para gato',icon:'🥫',price:20},
			{id:'cookie',name:'Galletita',icon:'🍪',price:8}
		];
		const petClothes=[
			{id:'pink-pajamas',name:'Pijama rosa',price:55,art:'<path d="M75 163Q119 146 163 163L157 209Q119 229 81 209Z" fill="#e9a9c2" stroke="#a96986" stroke-width="3"/><path d="M91 166q28 16 56 0m-28-4v57" fill="none" stroke="#fff0f4" stroke-width="4"/><circle cx="119" cy="184" r="3" fill="#fff0f4"/>'},
			{id:'sailor-pink',name:'Uniforme rosa elegante',price:85,art:'<path d="M75 163Q119 146 163 163L157 209Q119 229 81 209Z" fill="#c9819f" stroke="#925b75" stroke-width="3"/><path d="m91 159 15 15 13-8 13 8 15-15-8 31-20-9-20 9Z" fill="#f7eee7" stroke="#c8bcb6" stroke-width="2"/><path d="m115 181 4-5 4 5-4 9Z" fill="#493b49"/><path d="M91 205q28 10 56 0" fill="none" stroke="#f1d6df" stroke-width="3"/>'},
			{id:'pink-clown',name:'Payaso rosa pastel',price:75,art:'<path d="M75 163Q119 146 163 163L157 209Q119 229 81 209Z" fill="#fff4ee" stroke="#c792a6" stroke-width="3"/><path d="m89 168 9-7 9 7-9 7Zm27 0 9-7 9 7-9 7Zm27 0 9-7 9 7-9 7Zm-40 25 9-7 9 7-9 7Zm27 0 9-7 9 7-9 7Z" fill="#e8a3bf"/><path d="M82 164q37 18 74 0l-5 10q-32 14-64 0Z" fill="#edb9cd"/><path d="M105 183q14-12 28 0l-7 7h-14Z" fill="#f3c5d5"/>'},
			{id:'rainbow-clown',name:'Payaso arcoíris',price:90,art:'<path d="M75 163Q119 146 163 163L157 209Q119 229 81 209Z" fill="#fffaf0" stroke="#a99d87" stroke-width="3"/><path d="M87 169h13v37H87Zm13 0h13v37h-13Zm13 0h13v37h-13Zm13 0h13v37h-13Zm13 0h8v37h-8Z" fill="#e88c91"/><path d="M100 169h13v37h-13Zm26 0h13v37h-13Z" fill="#eac477"/><path d="M113 169h13v37h-13Zm26 0h13v37h-13Z" fill="#84aa91"/><path d="m111 162 8-6 8 6-8 11Z" fill="#8c6279"/><circle cx="88" cy="158" r="5" fill="#eeb6cc"/><path d="M86 157q2-9 7-1" fill="#f6dfb7"/>'},
			{id:'extra-slot',name:'Nuevo diseño · 5',price:65,art:'<path d="M75 163Q119 146 163 163L157 209Q119 229 81 209Z" fill="#c4b895" stroke="#897e62" stroke-width="3"/><path d="M92 168q27 15 54 0" fill="none" stroke="#eee4c8" stroke-width="4"/><circle cx="119" cy="190" r="5" fill="#eee4c8"/>'}
		];
		const petWigs=[
			{id:'honey-curls',name:'Rizos miel',price:48,art:'<path d="M71 103Q67 61 91 57q10-17 26-8 15-13 27 1 26-3 26 33l-9 25-9-23-10 11-9-18-14 17-13-17-12 20-10-9Z" fill="#d4a86c" stroke="#806445" stroke-width="3"/><circle cx="87" cy="65" r="10" fill="#e3bc83"/><circle cx="111" cy="54" r="10" fill="#e3bc83"/><circle cx="140" cy="55" r="10" fill="#e3bc83"/><circle cx="160" cy="68" r="9" fill="#e3bc83"/>'},
			{id:'lavender-bob',name:'Melena lavanda',price:52,art:'<path d="M61 111Q55 60 88 53q31-20 63 0 34 15 27 58l-12 21-5-31q-39-18-81 0l-7 31Z" fill="#b89bc9" stroke="#79688c" stroke-width="3"/><path d="M77 89q42-17 85 0" fill="none" stroke="#ddcbe8" stroke-width="5"/>'},
			{id:'rose-bangs',name:'Flequillo rosa',price:58,art:'<path d="M67 104Q60 61 91 55q33-17 63 0 26 15 19 51l-10-11-8 13-10-17-12 16-11-18-13 16-11-14-12 16Z" fill="#d78fae" stroke="#925e78" stroke-width="3"/><path d="M78 78q40-21 83 0" fill="none" stroke="#f0c3d1" stroke-width="6"/>'}
		];
		const petStorageKey='birthday-os-pet-v1';
		const loadPetState=()=>{
			const fresh={affection:0,coins:120,foodInventory:Object.fromEntries(petFoods.map(food=>[food.id,0])),unlockedClothes:[],unlockedWigs:[],equippedClothes:null,equippedWig:null};
			try{
				const saved=JSON.parse(localStorage.getItem(petStorageKey)||'null');
				if(!saved||typeof saved!=='object')return fresh;
				fresh.affection=Math.min(100,Math.max(0,Math.floor(Number(saved.affection)||0)));
				fresh.coins=Math.max(0,Math.floor(Number(saved.coins)||0));
				fresh.foodInventory=Object.fromEntries(petFoods.map(food=>[food.id,Math.max(0,Math.floor(Number(saved.foodInventory?.[food.id])||0))]));
				fresh.unlockedClothes=petClothes.map(item=>item.id).filter(id=>saved.unlockedClothes?.includes(id));
				fresh.unlockedWigs=petWigs.map(item=>item.id).filter(id=>saved.unlockedWigs?.includes(id));
				fresh.equippedClothes=fresh.unlockedClothes.includes(saved.equippedClothes)?saved.equippedClothes:null;
				fresh.equippedWig=fresh.unlockedWigs.includes(saved.equippedWig)?saved.equippedWig:null;
			}catch{}
			return fresh;
		};
		const petState=loadPetState();
		const savePetState=()=>localStorage.setItem(petStorageKey,JSON.stringify(petState));
		let currentApp='',galleryIndex=0,calcValue='',journeyFrame=null,musicAudio=null,activeTrackIndex=-1,petActionTimer=null,flightFrame=null,flightState=null,chatIntroSent=false;
		const homeScreen=document.getElementById('homeScreen'),appScreen=document.getElementById('appScreen');
		const appList=[['Regalo','🎁'],['Contactos','👤'],['Galería','🖼️'],['Música','🎵'],['Mensajes','💬'],['Calendario','📅'],['Notas','📝'],['Reloj','🕒'],['Mapa','🌍'],['Clima','☀️'],['Calculadora','🧮'],['Ajustes','⚙️'],['Mascota','🐈‍⬛']];
		function renderHome(){homeScreen.innerHTML=`<div class="statusbar"><span>${new Intl.DateTimeFormat('es',{hour:'numeric',minute:'2-digit'}).format(new Date())}</span><span>▮▮▮　▰</span></div><div class="home-title">BIRTHDAY OS</div><div class="app-grid">${appList.map(([n,i])=>`<button class="app-icon" data-app="${n}"><span>${i}</span><small>${n}</small></button>`).join('')}</div>`;homeScreen.querySelectorAll('[data-app]').forEach(b=>b.onclick=()=>openApp(b.dataset.app));}
		function appBody(n){if(n==='Regalo')return `<div class="card"><div style="font-size:46px">🎁</div><h3>Algo te espera aquí...</h3><p>Un espacio preparado con mucho cariño.</p><!-- EDITAR DESPUÉS: carta, imágenes, regalo y mensajes especiales. --></div>`;
		if(n==='Contactos')return `<button class="card" data-contact style="width:100%;text-align:left;background:#ffffff0b">👤 ${birthdayData.contact.name}<br>${birthdayData.contact.phone}</button><div id="contactDetail"></div>`;
		if(n==='Galería')return `<div class="gallery-grid" data-gallery-grid aria-label="Fotos"></div><div class="gallery-viewer" data-gallery-viewer aria-hidden="true"><div class="gallery-viewer-landscape"><header class="gallery-viewer-bar"><button type="button" data-gallery-close aria-label="Cerrar visor">×</button><span data-gallery-count></span></header><button type="button" class="gallery-viewer-nav" data-gallery-prev aria-label="Foto anterior">‹</button><div class="gallery-photo-stage"><img data-gallery-photo alt=""></div><button type="button" class="gallery-viewer-nav" data-gallery-next aria-label="Foto siguiente">›</button></div></div>`;
		if(n==='Mensajes')return `<div class="chat-shell"><div class="chat" data-chat-log role="log" aria-live="polite" aria-relevant="additions"></div><div class="chat-typing" data-chat-typing hidden>Jeremy está escribiendo...</div><form class="chat-compose" data-chat-form><input type="text" data-chat-input aria-label="Escribe un mensaje" placeholder="Escribe un mensaje..." autocomplete="off"><button type="submit" aria-label="Enviar mensaje">↑</button></form></div>`;
		if(n==='Calendario')return `<div class="calendar-app"><div class="calendar-nav"><button type="button" data-month-prev aria-label="Mes anterior">‹</button><h3 data-calendar-title></h3><button type="button" data-month-next aria-label="Mes siguiente">›</button></div><div class="calendar-grid" data-calendar-grid></div><div class="card" id="calendarNote">Toca un día para ver su nota.</div></div>`;
		if(n==='Notas')return `${birthdayData.notes.map((x,i)=>`<button class="card" data-note="${i}" style="display:block;width:100%;text-align:left;background:#ffffff0b"><b>${x.title}</b><br>${x.date}</button>`).join('')}<div id="noteDetail"></div>`;
		if(n==='Reloj')return `<div class="card">Alemania<h2 id="berlinClock">--:--</h2></div><div class="card">Lima, Perú<h2 id="limaClock">--:--</h2></div><div id="timeDifference"></div>`;
		if(n==='Clima')return `<div class="card" style="text-align:center"><div style="font-size:65px">🌤️</div><h2>Pronóstico de hoy</h2><p>Ojalá me lluevan mensajes tuyos.</p><p>Espero que sea un día de 100% felicidad para ti.</p>Felicidad: 100%　Mensajes: ∞<small style="display:block">Pronóstico ficticio cariñoso</small></div>`;
		if(n==='Calculadora')return `<input class="calc-display" id="calcDisplay" readonly><div class="calc-grid">${['7','8','9','÷','4','5','6','×','1','2','3','−','C','0','+','='].map(k=>`<button data-key="${k}">${k}</button>`).join('')}</div><div id="calcMessage"></div>`;
		if(n==='Ajustes')return `<div class="card">Nivel de paciencia conmigo: <span id="patience">84%</span><input type="range" value="84" data-range="patience">Cariño: <span id="affection">∞</span><input type="range" value="100" data-range="affection">Batería social: <span id="social">12%</span><input type="range" value="12" data-range="social"><p>Amistad: <button data-friend aria-pressed="false">Desactivada ○</button></p><div id="friendMsg"></div></div><div class="card">Información del dispositivo<p>Modelo: Katherine<br>Fecha de fabricación: ${birthdayData.settings.birthday}<br>Propietario: ${birthdayData.settings.owner}<br>Versión: Birthday Edition 2026</p></div><div class="card">Si quieres, mándame una captura de cómo dejaste tus ajustes, pofiii.</div>`;
		return '';}
		function openApp(n){currentApp=n;const templateId={'Mapa':'mapTemplate','Música':'musicTemplate','Mascota':'petTemplate'}[n];const content=templateId?document.getElementById(templateId).innerHTML:appBody(n);appScreen.dataset.appView={'Galería':'galeria','Música':'musica'}[n]||n;appScreen.innerHTML=`<header class="app-header"><button class="back-button" data-home aria-label="Volver al inicio">⌂</button><h2>${n}</h2></header><div class="app-content">${content}</div>`;appScreen.classList.add('is-visible');appScreen.setAttribute('aria-hidden','false');appScreen.querySelector('[data-home]').onclick=goHome;wireApp(n);}
		function goHome(){if(journeyFrame!==null){cancelAnimationFrame(journeyFrame);journeyFrame=null;}if(flightFrame!==null){cancelAnimationFrame(flightFrame);flightFrame=null;flightState=null;}if(musicAudio){musicAudio.pause();musicAudio=null;activeTrackIndex=-1;}if(petActionTimer!==null){clearTimeout(petActionTimer);petActionTimer=null;}appScreen.classList.remove('is-visible');appScreen.setAttribute('aria-hidden','true');currentApp='';}
		function wireApp(n){let c=appScreen.querySelector('.app-content');
		if(n==='Mapa')startMapJourney(c);
		if(n==='Música')wireMusic(c);
		if(n==='Mensajes')wireMessages(c);
		if(n==='Contactos')c.querySelector('[data-contact]').onclick=()=>{let x=birthdayData.contact;document.getElementById('contactDetail').innerHTML=`<div class="card"><h3>${x.name}</h3>${Object.entries({Número:x.phone,Apodo:x.nickname,'Fecha en que nos conocimos':x.met,'Cómo nos conocimos':x.story,'Cosas que hacemos juntos':x.together,'Dato especial':x.special}).map(([k,v])=>`<p><b>${k}:</b> ${v}</p>`).join('')}</div>`};
		if(n==='Galería'){
			const grid=c.querySelector('[data-gallery-grid]');
			const viewer=c.querySelector('[data-gallery-viewer]');
			const photo=c.querySelector('[data-gallery-photo]');
			const count=c.querySelector('[data-gallery-count]');
			const closeButton=c.querySelector('[data-gallery-close]');
			let activeThumbnail=null,pointerStart=null,closeTimer=null;
			birthdayData.gallery.forEach((src,index)=>{
				const thumbnail=document.createElement('button');
				const image=document.createElement('img');
				thumbnail.type='button';thumbnail.className='gallery-thumbnail';thumbnail.setAttribute('aria-label',`Abrir foto ${index+1}`);
				image.src=src;image.alt=`Recuerdo ${index+1}`;image.loading='lazy';
				thumbnail.append(image);thumbnail.onclick=()=>openPhoto(index,thumbnail);grid.append(thumbnail);
			});
			const renderPhoto=()=>{
				const total=birthdayData.gallery.length;
				if(!total)return;
				galleryIndex=(galleryIndex+total)%total;
				photo.src=birthdayData.gallery[galleryIndex];photo.alt=`Recuerdo ${galleryIndex+1}`;
				count.textContent=`${galleryIndex+1} / ${total}`;
				c.querySelector('[data-gallery-prev]').disabled=total<2;
				c.querySelector('[data-gallery-next]').disabled=total<2;
			};
			const openPhoto=(index,thumbnail)=>{
				window.clearTimeout(closeTimer);galleryIndex=index;activeThumbnail=thumbnail;renderPhoto();
				viewer.setAttribute('aria-hidden','false');grid.setAttribute('aria-hidden','true');
				viewer.classList.add('is-visible');window.requestAnimationFrame(()=>{if(viewer.getAttribute('aria-hidden')==='false')viewer.classList.add('is-open');});
				closeButton.focus({preventScroll:true});
			};
			const closePhoto=()=>{
				viewer.classList.remove('is-open');viewer.setAttribute('aria-hidden','true');grid.setAttribute('aria-hidden','false');
				if(activeThumbnail)activeThumbnail.focus({preventScroll:true});
				closeTimer=window.setTimeout(()=>viewer.classList.remove('is-visible'),240);
			};
			const stepPhoto=direction=>{galleryIndex=(galleryIndex+direction+birthdayData.gallery.length)%birthdayData.gallery.length;renderPhoto();};
			c.querySelector('[data-gallery-close]').onclick=closePhoto;
			c.querySelector('[data-gallery-prev]').onclick=()=>stepPhoto(-1);
			c.querySelector('[data-gallery-next]').onclick=()=>stepPhoto(1);
			viewer.addEventListener('pointerdown',event=>{
				if(event.target.closest('button'))return;
				pointerStart={x:event.clientX,y:event.clientY};viewer.setPointerCapture(event.pointerId);
			});
			viewer.addEventListener('pointerup',event=>{
				if(!pointerStart)return;
				const deltaX=event.clientX-pointerStart.x,deltaY=event.clientY-pointerStart.y;
				if(Math.abs(deltaX)>45&&Math.abs(deltaX)>Math.abs(deltaY))stepPhoto(deltaX<0?1:-1);
				pointerStart=null;
			});
			viewer.addEventListener('pointercancel',()=>{pointerStart=null;});
			viewer.addEventListener('keydown',event=>{
				if(!viewer.classList.contains('is-open'))return;
				if(event.key==='Escape'){event.preventDefault();closePhoto();}
				else if(event.key==='ArrowLeft'){event.preventDefault();stepPhoto(-1);}
				else if(event.key==='ArrowRight'){event.preventDefault();stepPhoto(1);}
			});
		}
		if(n==='Calendario')wireCalendar(c);
		if(n==='Notas')c.querySelectorAll('[data-note]').forEach(b=>b.onclick=()=>{let x=birthdayData.notes[+b.dataset.note];document.getElementById('noteDetail').innerHTML=`<div class="card"><h3>${x.title}</h3><p>${x.text}</p><small>${x.date}</small></div>`});
		if(n==='Reloj'){let tick=()=>{let f=z=>new Intl.DateTimeFormat('es',{timeZone:z,hour:'numeric',minute:'2-digit',hour12:true}).format(new Date());document.getElementById('berlinClock').textContent=f('Europe/Berlin');document.getElementById('limaClock').textContent=f('America/Lima')};tick();appScreen.clockTimer=setInterval(()=>{if(currentApp==='Reloj')tick()},1000)}
		if(n==='Ajustes'){c.querySelectorAll('[data-range]').forEach(i=>i.oninput=()=>document.getElementById(i.dataset.range).textContent=i.dataset.range==='affection'&&i.value==100?'∞':i.value+'%');c.querySelector('[data-friend]').onclick=e=>{let a=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',a);e.currentTarget.textContent=a?'Activada 💜':'Desactivada ○';document.getElementById('friendMsg').textContent=a?'✨ ¡Amistad activada!':'';document.getElementById('friendMsg').classList.toggle('secret-pop',a)}}
		if(n==='Mascota')wirePet(c);
		if(n==='Calculadora')c.querySelectorAll('[data-key]').forEach(b=>b.onclick=()=>{let k=b.dataset.key;if(k==='C')calcValue='';else if(k==='='){if(calcValue.replace(/\s/g,'')==='12+29')document.getElementById('calcMessage').textContent=birthdayData.secret;else try{calcValue=String(Function('return ('+calcValue.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-')+')')())}catch{calcValue='Error'}}else calcValue+=k;document.getElementById('calcDisplay').value=calcValue});}

		function wireMessages(container){
			const log=container.querySelector('[data-chat-log]');
			const typing=container.querySelector('[data-chat-typing]');
			const form=container.querySelector('[data-chat-form]');
			const input=container.querySelector('[data-chat-input]');
			const scrollToLatest=()=>{log.scrollTop=log.scrollHeight;};
			const appendMessage=message=>{
				if(message.type==='date'){
					const divider=document.createElement('div');divider.className='chat-date-divider';divider.textContent=message.text;log.append(divider);
				}else{
					const row=document.createElement('div');
					row.className=`chat-row${message.from==='Jeremy'?' is-mine':''}${message.type==='sticker'?' is-sticker':''}`;
					if(message.type==='sticker'){
						const sticker=document.createElement('img');sticker.className='chat-sticker';sticker.src=message.src;sticker.alt='Sticker';sticker.decoding='async';row.append(sticker);
					}else{
						const bubble=document.createElement('div');bubble.className='chat-bubble';bubble.textContent=message.text;row.append(bubble);
					}
					log.append(row);
				}
				scrollToLatest();
			};
			birthdayData.messages.forEach(appendMessage);
			const sendFirstMessageReplies=async()=>{
				for(const message of birthdayData.chatResponses.firstMessage){
					typing.hidden=false;scrollToLatest();
					await new Promise(resolve=>window.setTimeout(resolve,720));
					typing.hidden=true;birthdayData.messages.push(message);appendMessage(message);
				}
			};
			form.onsubmit=event=>{
				event.preventDefault();
				const text=input.value.trim();
				if(!text)return;
				const message={from:'Katherine',text};
				birthdayData.messages.push(message);appendMessage(message);input.value='';
				if(!chatIntroSent){chatIntroSent=true;sendFirstMessageReplies();}
				input.focus();
			};
		}

		function wireMusic(container){
			const cover=container.querySelector('[data-playlist-cover]');
			const status=container.querySelector('[data-music-status]');
			const list=container.querySelector('[data-track-list]');
			const playAllButton=container.querySelector('[data-play-all]');
			cover.src=birthdayData.playlist.cover;
			const coverFrame=cover.parentElement;
			const markCover=()=>{if(cover.naturalWidth)coverFrame.classList.add('has-image');else cover.classList.add('is-missing');};
			cover.onload=markCover;cover.onerror=markCover;if(cover.complete)markCover();
			container.querySelector('[data-playlist-title]').textContent=birthdayData.playlist.title;
			container.querySelector('[data-playlist-description]').textContent=birthdayData.playlist.description;
			const configuredSongs=birthdayData.songs.map((song,index)=>({song,index})).filter(({song})=>song.title&&song.artist&&song.src);
			container.querySelector('[data-playlist-meta]').textContent=`${configuredSongs.length} canciones · Para ${birthdayData.owner}`;
			list.innerHTML=configuredSongs.map(({song,index})=>`<button class="music-track" type="button" data-track="${index}" aria-pressed="false"><span class="track-control" aria-hidden="true">${index+1}</span><img src="${song.cover||birthdayData.playlist.cover}" alt=""><span class="track-copy"><b>${song.title}</b><small>${song.artist}</small></span>${song.duration?`<span class="track-duration">${song.duration}</span>`:''}</button>`).join('');
			list.querySelectorAll('img').forEach(image=>{const markMissing=()=>{if(!image.naturalWidth)image.classList.add('is-missing');};image.onerror=markMissing;image.onload=markMissing;if(image.complete)markMissing();});
			const refreshTracks=()=>list.querySelectorAll('[data-track]').forEach(button=>{
				const active=Number(button.dataset.track)===activeTrackIndex;
				button.classList.toggle('is-active',active);
				button.setAttribute('aria-pressed',String(active&&Boolean(musicAudio&&!musicAudio.paused)));
				button.querySelector('.track-control').textContent=active&&musicAudio&&!musicAudio.paused?'Ⅱ':active?'▶':String(Number(button.dataset.track)+1);
			});
			const refreshPlayAll=()=>{
				const isPlaying=Boolean(musicAudio&&!musicAudio.paused);
				playAllButton.querySelector('.music-play-symbol').textContent=isPlaying?'Ⅱ':'▶';
				playAllButton.querySelector('span:last-child').textContent=isPlaying?'Pausar':'Reproducir';
			};
			const refreshMusic=()=>{refreshTracks();refreshPlayAll();};
			const stopCurrent=()=>{if(musicAudio){musicAudio.pause();musicAudio=null;}activeTrackIndex=-1;refreshMusic();};
			const playTrack=index=>{
				const song=birthdayData.songs[index];
				if(!song||!song.src){stopCurrent();status.textContent='Añade un archivo de audio en audio/ para reproducir esta canción.';return;}
				if(musicAudio&&activeTrackIndex===index){
					if(musicAudio.paused){musicAudio.play().then(()=>{status.textContent=`Reproduciendo · ${song.title}`;refreshMusic();}).catch(()=>{status.textContent='No se pudo reproducir este archivo de audio.';});}
					else{musicAudio.pause();status.textContent=`En pausa · ${song.title}`;refreshMusic();}
					return;
				}
				if(musicAudio)musicAudio.pause();
				const audio=new Audio(song.src);
				musicAudio=audio;activeTrackIndex=index;refreshMusic();
				audio.onended=()=>{if(musicAudio===audio){musicAudio=null;activeTrackIndex=-1;status.textContent='Canción terminada';refreshMusic();}};
				audio.onerror=()=>{if(musicAudio===audio){status.textContent='No se encontró el archivo de audio indicado.';musicAudio=null;activeTrackIndex=-1;refreshMusic();}};
				audio.play().then(()=>{status.textContent=`Reproduciendo · ${song.title}`;refreshMusic();}).catch(()=>{status.textContent='No se pudo reproducir este archivo de audio.';});
			};
			list.querySelectorAll('[data-track]').forEach(button=>button.onclick=()=>playTrack(Number(button.dataset.track)));
			playAllButton.onclick=()=>{
				if(musicAudio){
					if(!musicAudio.paused){musicAudio.pause();status.textContent='Reproducción en pausa';refreshMusic();return;}
					const song=birthdayData.songs[activeTrackIndex];
					musicAudio.play().then(()=>{status.textContent=`Reproduciendo · ${song.title}`;refreshMusic();}).catch(()=>{status.textContent='No se pudo reproducir este archivo de audio.';});
					return;
				}
				const firstTrack=birthdayData.songs.findIndex(song=>song.title&&song.src);
				if(firstTrack<0){stopCurrent();status.textContent='Añade archivos de audio en audio/ para escuchar la playlist.';return;}
				playTrack(firstTrack);
			};
			container.querySelector('[data-shuffle]').onclick=()=>{
				const available=birthdayData.songs.map((song,index)=>song.title&&song.src?index:-1).filter(index=>index>=0);
				if(!available.length){stopCurrent();status.textContent='Añade archivos de audio en audio/ para escuchar la playlist.';return;}
				playTrack(available[Math.floor(Math.random()*available.length)]);
			};
			refreshMusic();
		}

		function wireCalendar(container){
			const title=container.querySelector('[data-calendar-title]');
			const grid=container.querySelector('[data-calendar-grid]');
			const note=container.querySelector('#calendarNote');
			let year=2026,month=8,selectedDate='';
			const render=()=>{
				const firstDay=new Date(year,month,1);
				const offset=(firstDay.getDay()+6)%7;
				const daysInMonth=new Date(year,month+1,0).getDate();
				const monthName=new Intl.DateTimeFormat('es',{month:'long',year:'numeric'}).format(firstDay);
				title.textContent=monthName.charAt(0).toLocaleUpperCase('es')+monthName.slice(1);
				const weekdays=['L','M','X','J','V','S','D'].map(day=>`<b>${day}</b>`).join('');
				const blanks=Array.from({length:offset},()=>'<span aria-hidden="true"></span>').join('');
				const dates=Array.from({length:daysInMonth},(_,index)=>{
					const day=index+1,key=`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
					const noteExists=Object.prototype.hasOwnProperty.call(birthdayData.calendarNotes,key);
					return `<button type="button" data-day="${key}" class="${noteExists?'has-note':''} ${key===selectedDate?'is-selected':''}" aria-label="${day}${noteExists?', con nota':''}">${day}</button>`;
				}).join('');
				grid.innerHTML=weekdays+blanks+dates;
				grid.querySelectorAll('[data-day]').forEach(button=>button.onclick=()=>{
					selectedDate=button.dataset.day;
					grid.querySelectorAll('[data-day]').forEach(dayButton=>dayButton.classList.toggle('is-selected',dayButton===button));
					note.textContent=birthdayData.calendarNotes[selectedDate]||'No hay una nota para este día.';
				});
				container.querySelector('[data-month-prev]').disabled=year===2026&&month===8;
				container.querySelector('[data-month-next]').disabled=year===2026&&month===11;
			};
			container.querySelector('[data-month-prev]').onclick=()=>{if(month===8)return;month--;selectedDate='';render();note.textContent='Toca un día para ver su nota.';};
			container.querySelector('[data-month-next]').onclick=()=>{if(month===11)return;month++;selectedDate='';render();note.textContent='Toca un día para ver su nota.';};
			render();
		}

		function wirePet(container){
			const cat=container.querySelector('[data-pet-character]');
			const phrase=container.querySelector('[data-pet-phrase]');
			const affection=container.querySelector('[data-pet-affection]');
			const coins=container.querySelector('[data-pet-coins]');
			const heartLayer=container.querySelector('.pet-hearts');
			const room=container.querySelector('.pet-room');
			const outfitLayer=container.querySelector('[data-outfit-layer]');
			const wigLayer=container.querySelector('[data-wig-layer]');
			const panel=container.querySelector('[data-pet-panel]');
			const panelTitle=container.querySelector('[data-pet-panel-title]');
			const panelContent=container.querySelector('[data-pet-panel-content]');
			let pointerStart=null,dragged=false;
			const updateHud=()=>{coins.textContent=String(petState.coins);affection.textContent=String(petState.affection);};
			const updateAffection=amount=>{petState.affection=Math.min(100,petState.affection+amount);savePetState();updateHud();};
			const say=text=>{phrase.textContent=text;phrase.classList.remove('is-speaking');void phrase.offsetWidth;phrase.classList.add('is-speaking');};
			const hearts=()=>{
				heartLayer.replaceChildren();
				for(let i=0;i<3;i++){const heart=document.createElement('i');heart.textContent='♡';heart.style.setProperty('--heart-index',String(i));heartLayer.append(heart);}
				window.setTimeout(()=>heartLayer.replaceChildren(),1100);
			};
			const setMood=(mood,resetAfter=0)=>{
				if(petActionTimer!==null){clearTimeout(petActionTimer);petActionTimer=null;}
				cat.dataset.mood=mood;
				if(resetAfter)petActionTimer=window.setTimeout(()=>{cat.dataset.mood='idle';petActionTimer=null;},resetAfter);
			};
			const wake=()=>{if(cat.dataset.mood==='sleeping'){setMood('idle');room.classList.remove('is-night');say('Ya desperté...');return true;}return false;};
			const showPanel=(title,render)=>{panelTitle.textContent=title;panel.hidden=false;panel.classList.add('is-open');render();};
			const closePanel=()=>{panel.classList.remove('is-open');panel.hidden=true;};
			const renderFoodPanel=()=>{
				panelContent.innerHTML=`<div class="pet-item-list">${petFoods.map(food=>`<div class="pet-item-row"><span class="pet-item-icon">${food.icon}</span><span class="pet-item-copy"><b>${food.name}</b><small>Quedan ×${petState.foodInventory[food.id]}</small></span><button type="button" data-feed="${food.id}" ${petState.foodInventory[food.id]===0?'disabled':''}>Dar</button></div>`).join('')}</div>`;
				panelContent.querySelectorAll('[data-feed]').forEach(button=>button.onclick=()=>{
					const id=button.dataset.feed;
					if(!petState.foodInventory[id])return;
					petState.foodInventory[id]--;petState.affection=Math.min(100,petState.affection+3);savePetState();updateHud();
					wake();setMood('happy',950);hearts();say('¡Qué rico, gracias!');renderFoodPanel();
				});
			};
			const renderShop=(category='food')=>{
				const collections={food:petFoods,clothes:petClothes,wigs:petWigs};
				panelContent.innerHTML=`<div class="pet-shop-tabs" role="tablist"><button type="button" data-shop-category="food" class="${category==='food'?'is-active':''}">Comida</button><button type="button" data-shop-category="clothes" class="${category==='clothes'?'is-active':''}">Ropa</button><button type="button" data-shop-category="wigs" class="${category==='wigs'?'is-active':''}">Peluca</button></div><div class="pet-item-list">${collections[category].map(item=>{
					const unlocked=category==='food'?false:(category==='clothes'?petState.unlockedClothes:petState.unlockedWigs).includes(item.id);
					const owned=category==='food'?`Inventario ×${petState.foodInventory[item.id]}`:unlocked?'Desbloqueado':'Disponible';
					return `<div class="pet-item-row"><span class="pet-item-icon ${category==='food'?'':'pet-item-swatch'}">${category==='food'?item.icon:category==='clothes'?'◈':'♢'}</span><span class="pet-item-copy"><b>${item.name}</b><small>${owned} · ${item.price} monedas</small></span><button type="button" data-buy="${category}:${item.id}" ${unlocked||petState.coins<item.price?'disabled':''}>${unlocked?'Comprado':'Comprar'}</button></div>`;
				}).join('')}</div><p class="pet-shop-message" data-shop-message aria-live="polite">Saldo: ${petState.coins} monedas</p>`;
				panelContent.querySelectorAll('[data-shop-category]').forEach(button=>button.onclick=()=>renderShop(button.dataset.shopCategory));
				panelContent.querySelectorAll('[data-buy]').forEach(button=>button.onclick=()=>{
					const [type,id]=button.dataset.buy.split(':');
					const item=(type==='food'?petFoods:type==='clothes'?petClothes:petWigs).find(entry=>entry.id===id);
					if(!item||petState.coins<item.price)return;
					petState.coins-=item.price;
					if(type==='food')petState.foodInventory[id]++;
					if(type==='clothes'&&!petState.unlockedClothes.includes(id))petState.unlockedClothes.push(id);
					if(type==='wigs'&&!petState.unlockedWigs.includes(id))petState.unlockedWigs.push(id);
					savePetState();updateHud();renderShop(type);panelContent.querySelector('[data-shop-message]').textContent=`Compraste ${item.name}. Saldo: ${petState.coins} monedas.`;
				});
			};
			const renderLook=(category='clothes')=>{
				const products=category==='clothes'?petClothes:petWigs;
				const unlocked=category==='clothes'?petState.unlockedClothes:petState.unlockedWigs;
				const equipped=category==='clothes'?petState.equippedClothes:petState.equippedWig;
				panelContent.innerHTML=`<div class="pet-shop-tabs" data-look-tabs role="tablist"><button type="button" data-look-category="clothes" class="${category==='clothes'?'is-active':''}">Ropa</button><button type="button" data-look-category="wigs" class="${category==='wigs'?'is-active':''}">Peluca</button></div><button type="button" class="pet-none-option ${equipped===null?'is-active':''}" data-equip-none="${category}">Ninguna</button><div class="pet-item-list">${products.filter(item=>unlocked.includes(item.id)).map(item=>`<div class="pet-item-row"><span class="pet-item-icon pet-item-swatch">${category==='clothes'?'◈':'♢'}</span><span class="pet-item-copy"><b>${item.name}</b><small>${equipped===item.id?'Equipada':'En tu armario'}</small></span><button type="button" data-equip-item="${category}:${item.id}">${equipped===item.id?'Quitar':'Equipar'}</button></div>`).join('')||'<p class="pet-empty-state">Todavía no tienes artículos de esta categoría.</p>'}</div>`;
				panelContent.querySelectorAll('[data-look-category]').forEach(button=>button.onclick=()=>renderLook(button.dataset.lookCategory));
				panelContent.querySelector('[data-equip-none]').onclick=()=>{if(category==='clothes')petState.equippedClothes=null;else petState.equippedWig=null;savePetState();renderLook(category);renderLookLayers();};
				panelContent.querySelectorAll('[data-equip-item]').forEach(button=>button.onclick=()=>{
					const [,id]=button.dataset.equipItem.split(':');
					if(category==='clothes')petState.equippedClothes=petState.equippedClothes===id?null:id;
					else petState.equippedWig=petState.equippedWig===id?null:id;
					savePetState();renderLook(category);renderLookLayers();
				});
			};
			const renderLookLayers=()=>{const clothes=petClothes.find(item=>item.id===petState.equippedClothes);const wig=petWigs.find(item=>item.id===petState.equippedWig);outfitLayer.innerHTML=clothes?clothes.art:'';wigLayer.innerHTML=wig?wig.art:'';};
			const setNight=isNight=>{room.classList.toggle('is-night',isNight);};
			cat.dataset.mood='idle';updateHud();renderLookLayers();
			cat.addEventListener('pointerdown',event=>{pointerStart={x:event.clientX,y:event.clientY};dragged=false;cat.setPointerCapture(event.pointerId);});
			cat.addEventListener('pointermove',event=>{
				if(!pointerStart||dragged)return;
				if(Math.hypot(event.clientX-pointerStart.x,event.clientY-pointerStart.y)>24){dragged=true;if(!wake()){updateAffection(1);setMood('happy',900);say(birthdayData.petPhrases[Math.floor(Math.random()*birthdayData.petPhrases.length)]);hearts();}}
			});
			cat.addEventListener('pointerup',()=>{pointerStart=null;});
			cat.addEventListener('pointercancel',()=>{pointerStart=null;dragged=false;});
			cat.addEventListener('click',()=>{
				if(dragged){dragged=false;return;}
				if(wake())return;
				updateAffection(1);setMood('happy',900);say(birthdayData.petPhrases[Math.floor(Math.random()*birthdayData.petPhrases.length)]);hearts();
			});
			container.querySelectorAll('[data-pet-action]').forEach(button=>button.onclick=()=>{
				const action=button.dataset.petAction;
				if(action==='food'){showPanel('Comida',renderFoodPanel);return;}
				if(action==='shop'){showPanel('Tienda',()=>renderShop());return;}
				if(action==='look'){showPanel('Cambiar look',()=>renderLook());return;}
				if(action==='play'){wake();startFlightGame(container);return;}
				if(action==='sleep'){closePanel();setMood('sleeping');setNight(true);say('Buenas noches...');return;}
			});
			panel.querySelector('[data-pet-close]').onclick=closePanel;
			panel.addEventListener('click',event=>{if(event.target===panel)closePanel();});
			container.querySelector('[data-flight-exit]').onclick=()=>stopFlightGame(container);
			container.querySelector('[data-flight-return]').onclick=()=>stopFlightGame(container);
			container.querySelector('[data-flight-retry]').onclick=()=>startFlightGame(container);
			container.querySelector('[data-flight-stage]').addEventListener('pointerdown',event=>{
				if(event.target.closest('button'))return;
				event.preventDefault();
				if(!flightState||!flightState.running)return;
				flightState.started=true;
				flightState.velocity=-4.5;
				container.querySelector('[data-flight-ready]').hidden=true;
			});
		}

		function startFlightGame(container){
			if(flightFrame!==null)cancelAnimationFrame(flightFrame);
			const game=container.querySelector('[data-flight-game]');
			const stage=container.querySelector('[data-flight-stage]');
			const world=container.querySelector('[data-flight-world]');
			const plane=container.querySelector('[data-flight-plane]');
			const ready=container.querySelector('[data-flight-ready]');
			const result=container.querySelector('[data-flight-result]');
			const scoreDisplay=container.querySelector('[data-flight-score]');
			const coinDisplay=container.querySelector('[data-flight-coins]');
			game.hidden=false;result.hidden=true;ready.hidden=false;world.replaceChildren();
			const width=stage.clientWidth,height=stage.clientHeight,planeX=width*.27,gapSize=Math.max(124,Math.min(158,height*.46));
			flightState={container,game,stage,world,plane,ready,result,scoreDisplay,coinDisplay,width,height,planeX,planeY:height*.5,velocity:0,distance:0,lastTime:0,nextObstacle:width+190,score:0,coins:0,obstacles:[],started:false,running:true};
			plane.style.left=`${planeX}px`;plane.style.top=`${flightState.planeY}px`;
			const createObstacle=worldX=>{
				const margin=gapSize/2+26;
				const gapY=margin+Math.random()*Math.max(1,height-margin*2);
				const top=document.createElement('i'),bottom=document.createElement('i'),coin=document.createElement('b');
				top.className='flight-obstacle flight-obstacle-top';bottom.className='flight-obstacle flight-obstacle-bottom';coin.className='flight-coin';
				top.style.left=`${worldX-flightState.distance}px`;top.style.height=`${gapY-gapSize/2}px`;
				bottom.style.left=`${worldX-flightState.distance}px`;bottom.style.top=`${gapY+gapSize/2}px`;
				coin.style.left=`${worldX-flightState.distance+112}px`;coin.style.top=`${gapY-12}px`;
				world.append(top,bottom,coin);
				flightState.obstacles.push({worldX,gapY,top,bottom,coin,collected:false,passed:false});
			};
			createObstacle(flightState.nextObstacle);
			flightState.nextObstacle+=245;
			const finish=()=>{
				flightState.running=false;flightFrame=null;result.hidden=false;
				container.querySelector('[data-result-score]').textContent=String(flightState.score);
				container.querySelector('[data-result-coins]').textContent=String(flightState.coins);
			};
			const animate=timestamp=>{
				if(!flightState||!flightState.running)return;
				const state=flightState,step=state.lastTime?Math.min((timestamp-state.lastTime)/16.67,2):1;
				state.lastTime=timestamp;
				if(state.started){
					state.velocity+=.23*step;state.planeY+=state.velocity*step;state.distance+=2.25*step;
					if(state.distance+state.width+170>=state.nextObstacle){createObstacle(state.nextObstacle);state.nextObstacle+=245;}
					for(const obstacle of state.obstacles){
						const x=obstacle.worldX-state.distance;
						obstacle.top.style.left=`${x}px`;obstacle.top.style.height=`${obstacle.gapY-gapSize/2}px`;
						obstacle.bottom.style.left=`${x}px`;obstacle.bottom.style.top=`${obstacle.gapY+gapSize/2}px`;
						obstacle.coin.style.left=`${x+112}px`;obstacle.coin.style.top=`${obstacle.gapY-12}px`;
						if(!obstacle.collected&&Math.abs(state.planeX-(x+112))<25&&Math.abs(state.planeY-obstacle.gapY)<29){
							obstacle.collected=true;obstacle.coin.classList.add('is-collected');state.coins++;petState.coins++;savePetState();
							container.querySelector('[data-pet-coins]').textContent=String(petState.coins);state.coinDisplay.textContent=String(state.coins);
						}
						if(!obstacle.passed&&x+48<state.planeX){obstacle.passed=true;state.score++;state.scoreDisplay.textContent=String(state.score);}
						if(x<state.planeX+32&&x+48>state.planeX-25&&(state.planeY<obstacle.gapY-gapSize/2+19||state.planeY>obstacle.gapY+gapSize/2-19)){finish();return;}
					}
					state.obstacles=state.obstacles.filter(obstacle=>{
						if(obstacle.worldX-state.distance<-65){obstacle.top.remove();obstacle.bottom.remove();obstacle.coin.remove();return false;}
						return true;
					});
					if(state.planeY<25||state.planeY>state.height-25){finish();return;}
				}
				state.plane.style.top=`${state.planeY}px`;
				if(!state.started)state.plane.style.transform=`translateY(${Math.sin(timestamp/280)*4}px) rotate(-3deg)`;
				else state.plane.style.transform=`rotate(${Math.max(-22,Math.min(48,state.velocity*5))}deg)`;
				flightFrame=requestAnimationFrame(animate);
			};
			flightFrame=requestAnimationFrame(animate);
		}
		function stopFlightGame(container){
			if(flightFrame!==null){cancelAnimationFrame(flightFrame);flightFrame=null;}
			if(flightState)flightState.running=false;
			flightState=null;container.querySelector('[data-flight-game]').hidden=true;
		}

		function startMapJourney(container){
			const camera=container.querySelector('#mapCamera');
			const route=container.querySelector('#journeyRoute');
			const plane=container.querySelector('#journeyPlane');
			const stageLabel=container.querySelector('#mapStage');
			const completion=container.querySelector('#mapCompletion');
			const duration=40000,zoom=1.3,totalLength=route.getTotalLength();
			const stages=[
				{start:.14,end:.21,label:'Francia'},
				{start:.28,end:.35,label:'España'},
				{start:.42,end:.57,label:'Cruzando el Atlántico...'},
				{start:.64,end:.72,label:'Brasil'},
				{start:.78,end:.86,label:'Bolivia'},
				{start:.92,end:.99,label:'Perú'}
			];
			let startedAt=null,lastStage='';
			route.style.strokeDashoffset='0';

			function animate(timestamp){
				if(startedAt===null)startedAt=timestamp;
				const progress=Math.min((timestamp-startedAt)/duration,1);
				const distance=totalLength*progress;
				const point=route.getPointAtLength(distance);
				const ahead=route.getPointAtLength(Math.min(totalLength,distance+3));
				const behind=route.getPointAtLength(Math.max(0,distance-3));
				const direction=distance>=totalLength-3?point: ahead;
				const origin=distance>=totalLength-3?behind:point;
				const angle=Math.atan2(direction.y-origin.y,direction.x-origin.x)*180/Math.PI+90;
				const seconds=(timestamp-startedAt)/1000;
				const driftX=Math.sin(seconds*1.25)*4,driftY=Math.cos(seconds*1.05)*3;
				camera.setAttribute('transform',`translate(${500-point.x*zoom} ${500-point.y*zoom}) scale(${zoom})`);
				plane.setAttribute('transform',`translate(${500+driftX} ${500+driftY}) rotate(${angle})`);
				route.style.strokeDasharray=`${distance} ${totalLength}`;

				const stage=stages.find(item=>progress>=item.start&&progress<item.end);
				const stageText=stage?stage.label:'';
				if(stageText!==lastStage){
					stageLabel.textContent=stageText;
					stageLabel.classList.toggle('is-visible',Boolean(stageText));
					stageLabel.setAttribute('aria-hidden',String(!stageText));
					lastStage=stageText;
				}
				if(progress<1)journeyFrame=requestAnimationFrame(animate);
				else{
					stageLabel.classList.remove('is-visible');
					stageLabel.setAttribute('aria-hidden','true');
					completion.classList.add('is-visible');
					completion.setAttribute('aria-hidden','false');
					journeyFrame=null;
				}
			}
			journeyFrame=requestAnimationFrame(animate);
		}

		function openPassword() {
			if (opened) return;
			opened = true;
			lockScreen.classList.add('is-opening');
			passwordScreen.classList.add('is-visible');
			passwordScreen.setAttribute('aria-hidden', 'false');
			window.setTimeout(() => document.getElementById('password').focus({ preventScroll:true }), 450);
		}
		function closePassword() {
			if (!opened) return;
			opened = false;
			lockScreen.classList.remove('is-opening');
			passwordScreen.classList.remove('is-visible');
			passwordScreen.setAttribute('aria-hidden', 'true');
		}
		phone.addEventListener('pointerdown', event => { startY = event.clientY; });
		phone.addEventListener('pointerup', event => {
			if (startY === null) return;
			const delta = event.clientY - startY;
			if (!opened && delta < -45) openPassword();
			else if (opened && delta > 60 && !event.target.closest('input,button')) closePassword();
			startY = null;
		});
		phone.addEventListener('pointercancel', () => { startY = null; });
		document.getElementById('passwordForm').addEventListener('submit', event => {
			event.preventDefault();
			const password = document.getElementById('password').value.trim();
			const message = document.getElementById('message');
			const secretHint = document.getElementById('secretHint');
			if (password.trim().toLowerCase() === 'jeremy') {
				incorrectAttempts = 0;
				message.textContent = '¡Contraseña correcta!';
				window.setTimeout(() => {lockScreen.style.display='none';passwordScreen.style.display='none';phone.classList.add('is-unlocked');renderHome();homeScreen.classList.add('is-visible');homeScreen.setAttribute('aria-hidden','false');}, 450);
			} else {
				incorrectAttempts++;
				message.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
				if (incorrectAttempts >= 3) {
					secretHint.classList.add('is-visible');
					secretHint.setAttribute('aria-hidden', 'false');
				}
			}
		});
	