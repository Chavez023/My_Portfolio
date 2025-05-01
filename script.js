var sectionIntro = document.getElementById('intro-section');
var sectionProfile = document.getElementById('profile-section');
var sectionInfo = document.getElementById('info-section');
var aboutContainer = document.getElementById('about-container');
var projectsContainerItems = document.getElementById('projects-container_items');
var contactsContainerItems = document.getElementById('contacts-container_items');

let infoTitle = document.getElementById('info-title');

function moveIndicatorTo(link) {
  const navIndicator = document.querySelector('.nav-indicator');
  const linkWidth = link.offsetWidth;
  const linkOffsetLeft = link.offsetLeft;

  navIndicator.style.width = `${linkWidth}px`;
  navIndicator.style.left = `${linkOffsetLeft}px`;
}

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      moveIndicatorTo(link);
  });
});

function moveToAboutLink() {
  const aboutLink = document.querySelectorAll('nav a')[1];
  moveIndicatorTo(aboutLink);
  contentVisibilityAbout();
}



function contentVisibilityHome() {
  sectionIntro.style.inset = '0 50% 40px 40px';
  sectionProfile.style.inset = '0 40px 40px 50%';
  sectionInfo.style.inset = '0 calc(-50% + 40px) 40px 100%';

  aboutContainer.style.scale = 0;
  projectsContainerItems.style.scale = 0;
  contactsContainerItems.style.scale = 0;

  aboutContainer.style.height = 0;
  projectsContainerItems.style.height = 0;
  contactsContainerItems.style.height = 0;

  aboutContainer.style.overflow = 'hidden';
  projectsContainerItems.style.overflow = 'visible';
  contactsContainerItems.style.overflow = 'visible';

}


function contentVisibilityAbout() {
  infoTitle.textContent = "About";

  sectionIntro.style.inset = '0 100% 40px -50%';
  sectionProfile.style.inset = '0 50% 40px 40px';
  sectionInfo.style.inset = '0 40px 40px 50%';

  aboutContainer.style.scale = 1;
  projectsContainerItems.style.scale = 0;
  contactsContainerItems.style.scale = 0;

  aboutContainer.style.height = '100%';
  projectsContainerItems.style.height = 0;
  contactsContainerItems.style.height = 0;

  aboutContainer.style.overflow = 'visible';
  projectsContainerItems.style.overflow = 'hidden';
  contactsContainerItems.style.overflow = 'hidden';

}


function contentVisibilityProjects() {
  infoTitle.textContent = "Projects";

  sectionIntro.style.inset = '0 100% 40px -50%';
  sectionProfile.style.inset = '0 100% 40px -50%';
  sectionInfo.style.inset = '0 40px 40px 40px';
  
  aboutContainer.style.scale = 0;
  projectsContainerItems.style.scale = 1;
  contactsContainerItems.style.scale = 0;

  aboutContainer.style.height = 0;
  projectsContainerItems.style.height = '100%';
  contactsContainerItems.style.height = 0;

  aboutContainer.style.overflow = 'hidden';
  projectsContainerItems.style.overflow = 'visible';
  contactsContainerItems.style.overflow = 'hidden';



}

function contentVisibilityContacts() {
  infoTitle.textContent = "Contacts";

  sectionIntro.style.inset = '0 100% 40px -50%';
  sectionProfile.style.inset = '0 100% 40px -50%';
  sectionInfo.style.inset = '0 40px 40px 40px';

  aboutContainer.style.scale = 0;
  projectsContainerItems.style.scale = 0;
  contactsContainerItems.style.scale = 1;

  aboutContainer.style.height = 0;
  projectsContainerItems.style.height = 0;
  contactsContainerItems.style.height = '100%';

  aboutContainer.style.overflow = 'hidden';
  projectsContainerItems.style.overflow = 'hidden';
  contactsContainerItems.style.overflow = 'visible';

}
