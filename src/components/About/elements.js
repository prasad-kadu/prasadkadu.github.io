import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Download, GitHub, Linkedin } from "react-feather";
import Headshot from "./headshot.jpg";
import "../CSS/loading.css";
/**
 * Header JSX element.
 * @return {JSX} header html as jsx
 */
const header = () => {
  return (
    <HStack spacing={4} alignItems="center">
      <Box
        bgGradient="linear(to-l, #79c2ff, #4a5888)"
        rounded="full"
        p={1}
        w={100}
        h={100}
      >
        <Image
          src={Headshot}
          alt="Prasda Kadu"
          height={100}
          width={80}
          quality={100}
          style={{ borderRadius: "75%" }}
          // This handles an annoying error on firefox where it
          // flashes alt text while loading
          id="image-that-loads"
        />
      </Box>
      <Box>
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Prasad Kadu
          </Heading>
          <Text>printf(&quot;hello, world&quot;);</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

/**
 * Bio element.
 * @return {JSX} html for bio as jsx
 */
const bio = () => {
  return (
    <Box className="article" as="div">
      <Text>
        नमस्ते! In Hindi, that means hello, much like the first word every coder
        whispers to the world in their inaugural program. It&apos;s a word that
        marked the start of my journey, a journey that recently reached a
        significant milestone with the completion of my Master&apos;s in
        Cybersecurity at the{" "}
        <span style={{ fontWeight: "bold" }}>University of York</span> in the
        UK.
      </Text>
      <Text>
        Now, as I prepare for the{" "}
        <span style={{ fontWeight: "bold" }}>Security+</span> certification
        exam, I&apos;m channeling my skills into developing a user-friendly{" "}
        <span style={{ fontWeight: "bold" }}>Android Application 📱</span> using
        Java. This app isn&apos;t just a project; it&apos;s my way of saying
        &apos;hello&apos; again to the world, this time with a tool designed to
        educate people about online safety.
      </Text>
      <Text>
        Each day, as I navigate through complex codes and digital challenges, I
        feel a surge of purpose. I&apos;m not just solving puzzles; I&apos;m
        fortifying defenses against unseen threats. The satisfaction comes not
        just from the obstacles I overcome but from the knowledge that my work
        helps keep others safe. My dream is to continue pushing the boundaries
        of what&apos;s possible in{" "}
        <span style={{ fontWeight: "bold" }}> cybersecurity 💻</span>, to
        innovate and create solutions that not only respond to current threats
        but also anticipate future challenges, ensuring a safer digital world
        for everyone.
      </Text>
      <Text>
        I firmly believe in Winston Churchill&apos;s quote,{" "}
        <span style={{ fontWeight: "bold" }}>
          &quot;Success is stumbling from failure to failure with no loss of
          enthusiasm.&quot;
        </span>{" "}
        It teaches me that success hinges on persistence through failures,
        viewing each as a lesson rather than a defeat. This perspective reshapes
        my understanding of success, emphasizing the importance of resilience
        and a steadfast, positive mindset through life&apos;s challenges. It
        stands as a{" "}
        <span style={{ fontWeight: "bold" }}>guiding principle</span> in my
        journey towards achieving my goals.
      </Text>
      {/* Add space between the two Text elements */}
      <div style={{ marginBottom: "20px" }}></div>
      <Text style={{ color: "#dad5c3", fontStyle: "italic" }}>
        Thanks For Being Here | यहाँ होने के लिए धन्यवाद | येथे आल्याबद्दल
        धन्यवाद | Merci d&apos;être ici
      </Text>
    </Box>
  );
};

/**
 * Socials JSX element.
 * @return {JSX} html for socials as jsx.
 */
const socials = () => {
  return (
    <Box d="flex" alignItems="center">
      <HStack spacing={4}>
        <Link
          py={2}
          px={4}
          href="https://github.com/prasad-kadu"
          rounded="sm"
          bg="#333"
          color="#fff"
          fontWeight="bold"
          isExternal
        >
          <HStack spacing={2} alignItems="center">
            <Box as={GitHub} /> <Text>Github</Text>
          </HStack>
        </Link>
        <Link
          py={2}
          px={4}
          href="https://www.linkedin.com/in/prasad-kadu/"
          rounded="sm"
          bg="#0e76a8"
          color="#fff"
          fontWeight="bold"
          isExternal
        >
          <HStack spacing={2} alignItems="center">
            <Box as={Linkedin} /> <Text>LinkedIn</Text>
          </HStack>
        </Link>

        {/* New Download CV Button */}
        <Link
          py={2}
          px={4}
          href="https://drive.google.com/uc?export=download&id=11-wuk3USvq2BBjTCaLg95zA7VuGPmjFl"
          download
          rounded="sm"
          bg="#4a4a4a" // Change the color as per your preference
          color="#fff"
          fontWeight="bold"
        >
          <HStack spacing={2} alignItems="center">
            <Box as={Download} /> <Text>Download CV</Text>
          </HStack>
        </Link>
      </HStack>
    </Box>
  );
};

export { header, bio, socials };
