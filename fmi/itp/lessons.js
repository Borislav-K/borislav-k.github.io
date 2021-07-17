window.addEventListener('DOMContentLoaded', () => {
    const unitContainer = document.getElementById('units-container');
    const units = [
        {
            number: 1,
            title: "Introduction to Programming",
            iconPath: "../../images/computing-monkey.jpg",
            hasProblems: false,
        },
        {
            number: 2,
            title: "Introduction to C++",
            iconPath: "../../images/c++-logo.png",
            hasProblems: true,
        },
        {
            number: 3,
            title: "Unit 3 title TODO",
            hasProblems: false,
        },
        {
            number: 4,
            title: "Unit 4 title TODO",
            hasProblems: false,
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

    if (unit.hasProblems) {
        const problemsLink = document.createElement('a');
        problemsLink.setAttribute('href', 'TODO');
        problemsLink.innerText = 'Problems';
        linksContainer.append(problemsLink);
    }

    unitSection.append(unitHeader, unitImage, linksContainer);

    return unitSection;
}