// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import iframe for youtube
import Iframe from 'react-iframe';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  dog: require("../assets/dog.jpg"),
  dogwide: require("../assets/dog-wide.jpg"),
  puppy: require("../assets/puppy.jpg"),
  cat: require("../assets/cat.jpg"),
  catwide: require("../assets/cat-wide.jpg"),
  gifirst: require("../assets/pet_helper1.gif"),
  gifsecond: require("../assets/pet_helper2.gif"),
  gifthird: require("../assets/pet_helper3.gif"),
  kitten: require("../assets/kitten2.jpg"),
  git: require("../assets/git.svg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#020509",
  tertiary: "#00CFFA",
  quartenary: "#FF0038",
  quinary: "#FFCE38",
}, {
  primary: "Droid+Sans:700",
  secondary: "Lato:700"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary" bgImage={images.city}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary"     textAlign="center" margin="5%">
            Welcome to Pet Helper!
          </Heading>
            <Image src={images.dogwide} />
            <Heading size={1} fit caps lineHeight={1} textColor="secondary" textAlign="center" margin="5%">
              An app built to assist you in taking care of your pets.
            </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
          <Heading size={2} textColor="secondary" textAlign="center" margin="5%"> Unhappy Pet?</Heading>
          <Image src={images.catwide} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" textAlign="center" margin="5%">Let's Fix That..</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" textAlign="center" margin="5%">Let's Make All Your Pets Happy!</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <div
            max-width="100vw"
            height="100vh"
            overflow="hidden"
            position="relative"
            >
          <Iframe url="https://www.youtube.com/embed/5dbG4wqN0rQ"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            position="relative"
            allowFullScreen/></div>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" textAlign="center" margin="5%">With Pet Helper, You Can..</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.gifirst} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.gifsecond} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.gifthird} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary" textAlign="center" margin="5%">Love Your Pet
          </Heading>
          <Image src={images.kitten} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps margin="5%">
            Road Blocks
          </Heading>
          <List size={1} margin="5%" caps>
            <ListItem>Time Constraints</ListItem>
            <ListItem>Why Does React Redux require so many components?</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps margin="5%">
            Plans for the Future of the App
          </Heading>
          <List size={1} margin="5%" caps>
            <ListItem>Interactive Blog</ListItem>
            <ListItem>Mobile Responsiveness</ListItem>
            <ListItem>Additional Resources</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps margin="5%">
            Technologies Utilized
          </Heading>
          <List size={1} margin="5%" caps>
            <ListItem>Ruby on Rails</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Axios</ListItem>
            <ListItem>Materialize</ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
  // const youtubeStyle = {
  //   white: { color: 'white' },
  // }

}
