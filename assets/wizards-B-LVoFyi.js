import"./modulepreload-polyfill-B5Qt9EMX.js";async function d(){const t=document.getElementById("elixir_container");t.innerHTML='<div class="loading"> Подождите! Загружаем... </div>';const n=await(await fetch("https://wizard-world-api.herokuapp.com/Elixirs")).json();r(n)}function o(){const t=document.getElementById("search_input").value.toLowerCase(),i=document.getElementById("elixir_container");i.innerHTML='<div class="loading">Поиск эликсиров...</div>',fetch("https://wizard-world-api.herokuapp.com/Elixirs").then(n=>n.json()).then(n=>{const e=n.filter(s=>s.name.toLowerCase().includes(t));e.length===0?i.innerHTML='<div class="no_elixir">Эликсир не найден</div>':r(e)})}function r(t){const i=document.getElementById("elixir_container");let n="";t.forEach(e=>{n+=`
            <div class="elixir_card">
                <h2 class="elixir_name">${e.name||"Неизвестно"}</h2>
                <p><strong>Побочные эффекты: </strong>${e.sideEffects||"Неизвестно"}</p>
                <p><strong>Сложность приготовления: </strong>${e.difficulty||"Неизвестно"}</p>
                <p><strong>Время приготовления: </strong>${e.time||"Неизвестно"}</p>

                <p><strong>Ингредиенты: </strong></p>
                <ul>
                    ${e.ingredients&&e.ingredients.length>0?e.ingredients.map(s=>`<li>${s.name||"Неизвестный ингредиент"}</li>`).join(""):"<li>Не указаны</li>"}
                </ul>
            </div>
        `}),i.innerHTML=n}function c(t){t.key==="Enter"&&o()}document.addEventListener("DOMContentLoaded",function(){document.getElementById("find_all").addEventListener("click",d),document.getElementById("search_wizard").addEventListener("click",o),document.getElementById("search_input").addEventListener("keypress",c)});
