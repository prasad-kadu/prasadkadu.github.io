import { React } from "react";
import { Text, ListItem, UnorderedList, Heading } from "@chakra-ui/react";

// Array of objects containing information on each project
export const projects = [
  {
    title: "FIS Global",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I&apos;ve worked as an Information Technology Trainee (Information
          Security Analyst) from April 2021 to August 2022 under Infosec Team,
          where I managed and improved security protocols. My main tasks
          included handling cyber threats, managing cloud security, checking for
          vulnerabilities, and ensuring safe internet use. I used a range of
          tools to protect the organisation&apos;s data and improve our systems
          security.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Tools & Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Linux & PuTTY</ListItem>
          <ListItem>Vulnerability Assessmnet & Microsoft 365 Defender</ListItem>
          <ListItem>Azure Sentinel & Active Directory</ListItem>
          <ListItem>Tenable</ListItem>
          <ListItem>Threat Intelligence</ListItem>
          <ListItem>Java Programming</ListItem>
          <ListItem>NIST & ISO Standards</ListItem>
        </UnorderedList>
      </>
    ),
    url: null,
  },
  {
    title: "Eduvance",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          As a Python Developer Intern at Eduvance during the summer of 2018, I
          built a database system using SQLite for handling data automatically.
          I used Python libraries like pandas and numpy for managing data entry,
          checking the data&apos;s accuracy, and creating reports. By applying
          Object-Oriented Programming techniques, I improved the organization
          and reliability of the code, which resulted in a 5-8% increase in the
          stability of the applications I worked on.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Data Structures & Algorithms</ListItem>
          <ListItem>Python Scripting</ListItem>
          <ListItem>Pandas/Numpy</ListItem>
          <ListItem>My SQL</ListItem>
        </UnorderedList>
      </>
    ),
    url: null,
  },
  {
    title: "Freelance Tutoring",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          From 2015 to 2019, I worked as a freelance Maths & Physics Tutor,
          focusing on courses such as Engineering Mathematics and Applied
          Science. I instructed five computer science engineering students,
          assisting them in greater understanding and performance in these
          topics. My tuition includes preparing them for tests and major
          evaluations, which increased their grades and test scores
          dramatically. I also administered weekly examinations to monitor their
          progress in engineering mathematics, allowing me to rapidly identify
          and assist them in overcoming any learning obstacles
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Subjects Taught:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Engineering Mathematics</ListItem>
          <ListItem>Applied Science (Physics)</ListItem>
        </UnorderedList>
      </>
    ),
    url: null,
  },
  /*  {
    title: "General Assembly Data Science",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I completed a fantastic data science bootcamp course. For my capstone,
          I built a project looking at what drove divisiveness in President
          Trump&apos;s tweets.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>Pandas/Scikit Learn/Numpy</ListItem>
          <ListItem>
            Statistics <span>😉</span>
          </ListItem>
        </UnorderedList>
      </>
    ),
    url: "https://towardsdatascience.com/trumps-twitter-network-7c59522ffe82",
  },
  {
    title: "Sudan Art Website",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I was inspired by a websited called threefingers.org that hosted
          revolutionary art in Myanmar to make something similar following the
          coup in Sudan.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>Django</ListItem>
          <ListItem>React JS</ListItem>
          <ListItem>Digital Ocean</ListItem>
        </UnorderedList>
      </>
    ),
    url: "https://github.com/osintalex/sudan-art",
  },
  {
    title: "Black Lives Matter",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I built a social justice focus web app to focus on the effects of
          structural racism in the UK, using data from the Office of National
          Statistics and the UK Police&apos;s own data API. I&apos;m hopeful it
          made a small difference during the protest movement in the UK.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>Plotly</ListItem>
          <ListItem>Dash</ListItem>
        </UnorderedList>
      </>
    ),
    url: "https://github.com/osintalex/Dash-BLM",
  },
  */
];
