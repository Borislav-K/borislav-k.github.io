window.addEventListener('DOMContentLoaded', () => {
    const unitContainer = document.getElementById('units-container');
    const units = [
        {
            number: 1,
            title: "Introduction to Programming",
            iconPath: "../../images/computing-monkey.jpg",
        },
        {
            number: 2,
            title: "Introduction to C++",
            iconPath: "../../images/c++-logo.png",
            problemsLink: "https://github.com/Borislav-K/itp-fmi-2021/blob/main/unit2/problems.md",
        },
        {
            number: 3,
            title: "Unit 3 title TODO",
        },
        {
            number: 4,
            title: "Unit 4 title TODO",
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

    const unitImage = document.createElement("img");
    unitImage.src = unit.iconPath;
    unitImage.alt = `${unit.title} icon`;

    const linksContainer = document.createElement('nav');

    const slidesLink = document.createElement('a');
    slidesLink.setAttribute('href', `slides/unit${unit.number}.html`);
    slidesLink.innerText = 'Slides';
    linksContainer.append(slidesLink);

    if (unit.problemsLink) {
        const problemsLink = document.createElement('a');
        problemsLink.setAttribute('href', unit.problemsLink);
        problemsLink.innerText = 'Problems';
        linksContainer.append(problemsLink);
    }

    unitSection.append(unitHeader, unitImage, linksContainer);

    return unitSection;
}