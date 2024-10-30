import React from "react";

const projectsData = [
  {
    name: "Spotify ",
    description:
      "Bu loyiha haqida batafsil ma'lumot. Ushbu loyiha musiqa eshitish yani music player kabi ish bajaradi",
    link: "https://github.com/OlimovN/8_exam",
    image:
      "https://avatars.mds.yandex.net/i?id=05f32fc79388dd9968d1017ab9fa56344d378647-10843930-images-thumbs&n=13",
  },
  {
    name: "Valyuta convertions ",
    description:
      "Bu loyiha haqida batafsil ma'lumot. Ushbu loyiha pul hisoblagich",
    link: "https://github.com/OlimovN/7_8-dars",
    image:
      "https://avatars.mds.yandex.net/i?id=cb2d827aac51be926fc7d65760af5239573e8330-13466838-images-thumbs&n=13",
  },
  {
    name: "Onlyn magazine  ",
    description:
      "Bu loyiha haqida batafsil ma'lumot. Ushbu loyiha onlayn magazin bolib bunda narsa sotib olish imkonini beradi ",
    link: "https://github.com/OlimovN/7-0y-4-dars-main",
    image: "https://modulkassa.ru/blog/trebovaniya-k-internet-magazinu.jpg",
  },
  {
    name: "Trello ",
    description:
      "Bu loyiha haqida batafsil ma'lumot. Ushbu loyiha onlayn jamoaviy ishlash imkonini beradi ",
    link: "https://github.com/LochinbekKarimov2006/8_6_dar",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png",
  },
  {
    name: "Git hub ",
    description:
      "bu linkni ichida kichkina yaratgan ishlarim mavjud korishingiz mumkun",
    link: "https://github.com/OlimovN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ug_Ghq8ifBJhqMJr5_bcRXqByvna3MO1iQ&s",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Qilgan Ishlarim</h2>
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.name}</h3>
          <img src={project.image} alt={project.name} />
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Loyihaga o'tish
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
