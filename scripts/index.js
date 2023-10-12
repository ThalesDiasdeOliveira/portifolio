const elemProjects = document.getElementById('project__content')

const loadProjects = (projects) => {
  projects.forEach(project => {
    const elemProject = document.createElement('a')

    elemProject.setAttribute('href', project.link)
    elemProject.setAttribute('target', '_blank')

    elemProject.classList.add('project')

    const elemPicture = document.createElement('picture')
    const elemImg = document.createElement('img')

    elemImg.setAttribute('src', project.image)

    elemPicture.appendChild(elemImg)

    // add picture
    elemProject.appendChild(elemPicture)

    const elemStrong = document.createElement('strong')
    elemStrong.innerText = project.name

    // add strong
    elemProject.appendChild(elemStrong)

    const elemTags = document.createElement('div')
    project.tags.forEach(tag => {
      const elemTag = document.createElement('span')
      elemTag.innerText = tag

      elemTags.appendChild(elemTag)
    })

    // add tags
    elemProject.appendChild(elemTags)

    elemProjects.appendChild(elemProject)
  });
}

fetch('./projects.json').then(response => response.json()).then(loadProjects)