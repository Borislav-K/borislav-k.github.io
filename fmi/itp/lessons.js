window.addEventListener('DOMContentLoaded', () => {
    const unitContainer = document.getElementById('units-container');
    const units = [
        {
            number: 1,
            title: "Unit 1 title TODO"
        },
        {
            number: 2,
            title: "Unit 2 title TODO"
        },
        {
            number: 3,
            title: "Unit 3 title TODO"
        },
        {
            number: 4,
            title: "Unit 4 title TODO"
        }
    ];

    units.map(createUnitSection).forEach(section => {
        unitContainer.appendChild(section);
    })
});

createUnitSection = (unit) => {
    const unitSection = document.createElement('section');
    unitSection.className = 'unit-instance';

    const unitHeader = document.createElement('h1');
    unitHeader.innerText = `Unit ${unit.number} - ${unit.title}`;

    const slidesLink = document.createElement('a');
    slidesLink.setAttribute('href', `slides/unit${unit.number}.html`);
    slidesLink.innerText = 'Slides';

    const problemsLink = document.createElement('a');
    problemsLink.setAttribute('href', 'TODO');
    problemsLink.innerText = 'Problems';

    const linksContainer = document.createElement('nav');
    linksContainer.append(slidesLink, problemsLink);

    unitSection.append(unitHeader, linksContainer);

    return unitSection;
}