import"./modulepreload-polyfill-B5Qt9EMX.js";const s="https://api.allorigins.win/raw?url=",i="https://www.fruityvice.com/api/fruit";async function d(){const e=document.getElementById("fruit_container");e.innerHTML='<div class="loading"> Loading... </div>';try{const t=s+encodeURIComponent(i+"/all"),n=await(await fetch(t)).json();a(n)}catch(t){e.innerHTML=`<div class="error">Loading error: ${t.message}</div>`}}function l(){const e=document.getElementById("search_input").value.toLowerCase(),t=document.getElementById("fruit_container");t.innerHTML='<div class="loading">Loading...</div>';const r=s+encodeURIComponent(i+"/all");fetch(r).then(n=>n.json()).then(n=>{const o=n.filter(c=>c.name.toLowerCase().includes(e));o.length===0?t.innerHTML='<div class="error">No such fruit</div>':a(o)}).catch(n=>{t.innerHTML=`<div class="error">Loading error: ${n.message}</div>`})}function a(e){const t=document.getElementById("fruit_container");let r="";e.forEach(n=>{const o=n.nutritions||{};r+=`
            <div class="fruit_card">
                <h2 class="fruit_name">${n.name||"Unknown"}</h2>
                <p><strong>Family: </strong>${n.family||"Unknown"}</p>
                <p><strong>Genus: </strong>${n.genus||"Unknown"}</p>
                <p><strong>Order: </strong>${n.order||"Unknown"}</p>
                <p><strong>Calories: </strong>${o.calories||"Unknown"}</p>
                <p><strong>Carpohydrates: </strong>${o.carbohydrates||"Unknown"}</p>
                <p><strong>Proteins: </strong>${o.protein||"Unknown"}</p>
                <p><strong>Fats: </strong>${o.fat||"Unknown"}</p>
                <p><strong>Sugar: </strong>${o.sugar||"Unknown"}</p>
            </div>
        `}),t.innerHTML=r}function u(e){e.key}document.addEventListener("DOMContentLoaded",function(){document.getElementById("allFruits").addEventListener("click",d),document.getElementById("searchFruit").addEventListener("click",l),document.getElementById("search_input").addEventListener("keypress",u)});
