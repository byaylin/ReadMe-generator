function generateMarkdown(data) {
    return ' # $(data.title)
    ## Table of Contents
    - [Description] (#description),
    - [Installation] (#installation),
    - [Usage] (#usage),
    - [Contributors] (#contributors),
    - [Test] (#test),
    - [License] (#license),
    - [Questions] (#questions),

    ## Description 
    $(data.description),

    ## Installation
    $(data.installation),

    ## Usage 
    $(data.usage),

    ## Contributors
    $(data.contributions),

    ## Test
    $(data.test),

    ## License 
    $(data.license),

    ## Questions
    For addition questions email me at <a href="mailto:$(data.email)">$(data.email) </a>
    GitHub page, 
    <a href="https://github.com/$(data.github)">$(data.github)</a>
}

module.exports = generateMarkdown
