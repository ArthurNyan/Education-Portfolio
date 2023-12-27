import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
export const projects = [
    {
        links: [
            {
                title: 'Часть 3.1',
                link: 'https://replit.com/@artoim333/LR-131-1'
            },
            {
                title: 'Часть 3.2',
                link: 'https://replit.com/@artoim333/LR-132'
            }
        ],
        description: 'В задании 3.1 был релизован консольный колькулятор и добавлены тесты для него. В задании 3.2 была написана игра "Угадай число".',
        title: 'Лабораторная работа 1',
    },
    {
        links: [
            {
                title: 'LR-2',
                link: 'https://replit.com/@artoim333/LR-2'
            },
        ],
        description: 'В лабораторном задании №2 были выполнены задания на тему "множества".',
        title: 'Лабораторная работа 2',
    },
    {
        links: [
            {
                title: 'Часть 1',
                link: ''
            },
            {
                title: 'Часть 2',
                link: ''
            }
        ],
        description: 'В лабораторной работе был модернезирован калькулятор, добавлена точность вычислений и переменное кол-во перменных в сигнатуре.',
        title: 'Лабораторная работа 3',
    },
    {
        links: [
            {
                title: 'Часть 1',
                link: 'https://replit.com/@artoim333/41#main.py'
            },
            {
                title: 'Часть 2.1',
                link: 'https://replit.com/@artoim333/LR-421#main.py'
            },
            {
                title: 'Часть 2.2',
                link: 'https://replit.com/@artoim333/LR-422'
            },
            {
                title: 'Часть 2.3',
                link: 'https://replit.com/@artoim333/LR-423'
            },
        ],
        description: 'В первой часть лабораторной работы была проведена работа с алгоритмами и их оптимизацие/усовершенствованием. В части 2 реализована отправка почты через smtplib, Парсинг сайта погоды с помощью BeautifulSoup (v4), c помощью бибилиотеки matplotlib вывели два графика функций.',
        title: 'Лабораторная работа 4',
    },
    {
        links: [
            {
                title: 'Часть 1',
                link: 'https://replit.com/@artoim333/Lab-51'
            },
            {
                title: 'Часть 2',
                link: 'https://replit.com/@artoim333/Lab-52'
            }
        ],
        description: 'В части 1 создан класс-итератор, который генерирует случайные числа в количестве и в диапазоне, которые передаются в конструктор в виде списка параметров. Во 2 части написали класс который умеет считать время в секундах, затраченное на некоторые вычисления.',
        title: 'Лабораторная работа 5',
    },
];

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* <Col md={4} className="project-card">
            <ProjectCard
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              
            />
          </Col> */}
                    {projects.map((prod) => <Col md={4} className="project-card">
                        <ProjectCard {...prod} />
                    </Col>)}

                    {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
