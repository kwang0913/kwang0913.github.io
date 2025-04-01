// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-m-starting-my-study-as-a-ph-d-student-in-the-rutgers-university-ece-department-and-joining-the-team-of-prof-yingying-chen",
          title: 'I’m starting my study as a Ph.D. student in the Rutgers University ECE...',
          description: "",
          section: "News",},{id: "news-our-paper-is-accepted-by-acm-sensys-2022",
          title: 'Our paper is accepted by ACM Sensys 2022.',
          description: "",
          section: "News",},{id: "news-i-have-been-appointed-as-summer-lecturer-for-undergraduate-probability-theory",
          title: 'I have been appointed as Summer Lecturer for Undergraduate Probability Theory.',
          description: "",
          section: "News",},{id: "news-i-m-joining-the-team-of-prof-athina-petropulu",
          title: 'I’m joining the team of Prof. Athina Petropulu.',
          description: "",
          section: "News",},{id: "news-i-have-passed-my-qualification-exam-and-become-a-ph-d-candidate",
          title: 'I have passed my Qualification Exam and become a Ph.D. candidate.',
          description: "",
          section: "News",},{id: "news-our-paper-is-accepted-by-5th-ieee-international-symposium-on-joint-communications-amp-amp-sensing",
          title: 'Our paper is accepted by 5th IEEE International Symposium on Joint Communications &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-our-paper-is-accepted-by-2025-ieee-international-conference-on-acoustics-speech-and-signal-processing-icassp",
          title: 'Our paper is accepted by 2025 IEEE International Conference on Acoustics, Speech, and...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%69%6C%6F%6E%67.%77%61%6E%67@%72%75%74%67%65%72%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/kwang0913", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kwang0913", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/99327874/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kwang0913", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3415-0790", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Bl-ePysAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
