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
            problemsLink: "https://github.com/triffon/ip-2021-22/blob/master/practicum/4/unit2/problems.md",
        },
        {
            number: 3,
            title: "Conditional operators",
            iconPath: "../../images/control-flow.png",
            problemsLink: "https://github.com/triffon/ip-2021-22/blob/master/practicum/4/unit3/problems.md"
        },
        {
            number: 4,
            title: "Loops",
            iconPath: "../../images/loop.png",
            problemsLink: "https://github.com/triffon/ip-2021-22/blob/master/practicum/4/unit4/problems.md"
        },
        {
            number: 5,
            title: "Introduction to Functions",
            iconPath: "../../images/function_logo.png",
            problemsLink: "https://github.com/triffon/ip-2021-22/blob/master/practicum/4/unit5/problems.md"
        },
        {
            number: 6,
            title: "Introduction to Arrays",
            iconPath: "../../images/arrays_logo.png",
            problemsLink: "https://github.com/triffon/ip-2021-22/blob/master/practicum/4/unit6/problems.md"
        },
        {
            number: 7,
            title: "Characters and Strings",
            iconPath: "../../images/bead_string.png",
            problemsLink: "https://github.com/triffon/ip-2021-22/blob/master/practicum/4/unit7/problems.md"
        },
        {
            number: 8,
            title: "Multidimensional arrays",
            iconPath: "../../images/2d_array_logo.jpg",
            problemsLink: "https://github.com/triffon/ip-2021-22/blob/master/practicum/4/unit8/problems.md"
        },
        {
            number: 9,
            title: "Pointers and References",
            iconPath: "../../images/pointers_logo.png",
            problemsLink: "https://github.com/triffon/ip-2021-22/blob/master/practicum/4/unit9/problems.md"
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