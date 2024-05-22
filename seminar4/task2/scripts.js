async function getImg() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/1');
        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error(`Ошибка получения изображений: ${error}`);
    }
}

function displayImg(imgUrl) {
    const dogImagesElement = document.getElementById('dogImages');
    let row = dogImagesElement.lastElementChild;
    if (!row || row.children.length === 5) {
        row = document.createElement('div');
        row.className = 'row';
        dogImagesElement.appendChild(row);
    }
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    row.appendChild(imgElement);
}

async function loadImg() {
    const maxImg = 10;
    let imgTotal = 0;
    const interval = setInterval(async () => {
        const imgUrl = await getImg();
        displayImg(imgUrl);
        imgTotal++;
        if (imgTotal === maxImg) {
            clearInterval(interval);
        }
    }, 3000);
}

loadImg().catch(error => {
        console.log(`Ошибка получения изображений: ${error}`);
    });
