export function createDropDownMenu (parentDiv, currentListItem, options = []){ 
    const dropDownMenu = document.createElement('select');
    dropDownMenu.id = 'dropDownMenu';
    dropDownMenu.name = 'dropDownMenu';
    dropDownMenu.textContent = 'Select an option';
    dropDownMenu.placeholder = 'Please Select an Option';
    parentDiv.appendChild(dropDownMenu);

    const placeholderOption = document.createElement('option');
    placeholderOption.text = currentListItem;
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    dropDownMenu.appendChild(placeholderOption);

    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option;
        newOption.text = option;
        dropDownMenu.appendChild(newOption);
    });
}

export function imageCarousel(parentDiv, timeInterval, images = []) {
    const imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer';
    imageContainer.style.position = 'relative';
    parentDiv.appendChild(imageContainer);

    const image = document.createElement('img');
    image.id = 'image';
    image.src = images[0];
    image.style.width = '600px';
    image.style.height = '600px';
    image.style.objectFit = 'cover';
    imageContainer.appendChild(image);

    let index = 0;
    let intervalId = setInterval(nextImage, timeInterval);

    function nextImage() {
        index = (index + 1) % images.length;
        updateImage();
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        updateImage();
    }

    function updateImage() {
        image.src = images[index];
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.style.backgroundColor = i === index ? 'black' : 'white';
        });
    }

    // Create navigation arrows
    const prevArrow = document.createElement('div');
    prevArrow.innerHTML = '&#9664;';
    prevArrow.style.position = 'absolute';
    prevArrow.style.top = '50%';
    prevArrow.style.left = '0';
    prevArrow.style.transform = 'translateY(-50%)';
    prevArrow.style.cursor = 'pointer';
    prevArrow.style.fontSize = '24px';
    prevArrow.style.color = 'white';
    prevArrow.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    prevArrow.style.padding = '10px';
    prevArrow.addEventListener('click', prevImage);
    imageContainer.appendChild(prevArrow);

    const nextArrow = document.createElement('div');
    nextArrow.innerHTML = '&#9654;';
    nextArrow.style.position = 'absolute';
    nextArrow.style.top = '50%';
    nextArrow.style.right = '0';
    nextArrow.style.transform = 'translateY(-50%)';
    nextArrow.style.cursor = 'pointer';
    nextArrow.style.fontSize = '24px';
    nextArrow.style.color = 'white';
    nextArrow.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    nextArrow.style.padding = '10px';
    nextArrow.addEventListener('click', nextImage);
    imageContainer.appendChild(nextArrow);

    // Create navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.style.position = 'absolute';
    dotsContainer.style.bottom = '10px';
    dotsContainer.style.left = '50%';
    dotsContainer.style.transform = 'translateX(-50%)';
    dotsContainer.style.display = 'flex';
    dotsContainer.style.gap = '5px';
    imageContainer.appendChild(dotsContainer);

    const dots = images.map((_, i) => {
        const dot = document.createElement('div');
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = i === index ? 'black' : 'white';
        dot.style.cursor = 'pointer';
        dot.addEventListener('click', () => {
            index = i;
            updateImage();
        });
        dotsContainer.appendChild(dot);
        return dot;
    });

    image.addEventListener('mouseover', () => {
        clearInterval(intervalId);
    });

    image.addEventListener('mouseout', () => {
        intervalId = setInterval(nextImage, timeInterval);
    });
}