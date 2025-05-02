var sectionIntro = document.getElementById('intro-section');
var sectionProfile = document.getElementById('profile-section');
var sectionInfo = document.getElementById('info-section');
var aboutContainer = document.getElementById('about-container');
var projectsContainerItems = document.getElementById('projects-container_items');
var contactsContainerItems = document.getElementById('contacts-container_items');

var stripsContainerA1 = document.getElementById('strips-container_a1');
var stripsContainerA2 = document.getElementById('strips-container_a2');
var stripsContainerA3 = document.getElementById('strips-container_a3');
var stripsContainerA4 = document.getElementById('strips-container_a4');
var stripsContainerA5 = document.getElementById('strips-container_a5');
var stripsContainerA6 = document.getElementById('strips-container_a6');

var stripsContainerB1 = document.getElementById('strips-container_b1');
var stripsContainerB2 = document.getElementById('strips-container_b2');
var stripsContainerB3 = document.getElementById('strips-container_b3');
var stripsContainerB4 = document.getElementById('strips-container_b4');
var stripsContainerB5 = document.getElementById('strips-container_b5');
var stripsContainerB6 = document.getElementById('strips-container_b6');

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

  stripsContainerB1.style.bottom = '-200vh';
  stripsContainerB2.style.bottom = '-200vh';
  stripsContainerB3.style.bottom = '-200vh';
  stripsContainerB4.style.bottom = '-200vh';
  stripsContainerB5.style.bottom = '-200vh';
  stripsContainerB6.style.bottom = '-200vh';

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
  
  stripsContainerB1.style.bottom = '-200px';
  stripsContainerB2.style.bottom = '-600px';
  stripsContainerB3.style.bottom = '-200px';
  stripsContainerB4.style.bottom = '-200px';
  stripsContainerB5.style.bottom = '-500px';
  stripsContainerB6.style.bottom = '-300px';

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

  stripsContainerB1.style.bottom = '-200vh';
  stripsContainerB2.style.bottom = '-200vh';
  stripsContainerB3.style.bottom = '-200vh';
  stripsContainerB4.style.bottom = '-200vh';
  stripsContainerB5.style.bottom = '-200vh';
  stripsContainerB6.style.bottom = '-200vh';
  
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

  stripsContainerB1.style.bottom = '-200vh';
  stripsContainerB2.style.bottom = '-200vh';
  stripsContainerB3.style.bottom = '-200vh';
  stripsContainerB4.style.bottom = '-200vh';
  stripsContainerB5.style.bottom = '-200vh';
  stripsContainerB6.style.bottom = '-200vh';

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
