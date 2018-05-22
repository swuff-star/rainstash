window.onload = () => {
    loadIcons();
}

let loadIcons = () => {
    let white = document.getElementsByClassName('white')[0];
    for (let item in items) {
        let itemClass = items[item].itemClass;
        let targetCategory = document.getElementsByClassName(itemClass)[0];
        let itemImg = document.createElement('img');
        itemImg.classList.add('item');
        itemImg.src = `static/itemIcons/item_${item}.png`;
        targetCategory.appendChild(itemImg);

        itemImg.onmouseenter = () => {
            setInfo(items[item], item);
        }

        itemImg.onmouseleave = () => {
            wipeInfo();
        }
    }
}

let setInfo = (item, itemName) => {
    let title = document.getElementsByClassName('infoTitle')[0];
    let image = document.getElementsByClassName('infoImage')[0];
    let desc = document.getElementsByClassName('infoDesc')[0];

    let cooldown = document.getElementsByClassName('infoCooldown')[0];
    let cooldownTitle = document.getElementById('infoCooldownTitle');
    
    let stack = document.getElementsByClassName('infoStack')[0];
    let stackTitle = document.getElementById('infoStackTitle');
    
    let unlock = document.getElementsByClassName('infoUnlock')[0];
    let unlockTitle = document.getElementById('infoUnlockTitle');

    title.innerHTML = item.name;
    image.src = `static/itemIcons/item_${itemName}.png`;
    desc.innerHTML = item.description;
    
    if ("cooldown" in item) {
        cooldownTitle.classList.remove('hidden');
        cooldown.innerHTML = item.cooldown;
    } else {
        cooldownTitle.classList.add('hidden');
        cooldown.innerHTML = '';
    }

    if ("stack" in item) {
        stackTitle.innerHTML = 'Stacking Effect:';
        stack.innerHTML = item.stack;
    } else {
        stackTitle.innerHTML = 'Beating Embryo effect:';
        stack.innerHTML = item.embryo;
    }

    if ("unlock" in item) {
        unlockTitle.classList.remove('hidden');
        unlock.innerHTML = item.unlock;
    } else {
        unlockTitle.classList.add('hidden');
        unlock.innerHTML = '';
    }
}

let wipeInfo = () => {
    //let title = document.getElementsByClassName('infoTitle')[0];
    //let image = document.getElementsByClassName('infoImage')[0];
    //let desc = document.getElementsByClassName('infoDesc')[0];
    //let stack = document.getElementsByClassName('infoStack')[0];

}