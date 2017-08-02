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
  gifirst: require("../assets/pet1.gif"),
  gifsecond: require("../assets/pet2.gif"),
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
          <Heading size={5} textColor="secondary" textAlign="center" margin="5%">View Pet Info & Create Reminders</Heading>
          <Image src={images.gifirst} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" textAlign="center" margin="5%">Find an Adoption Agency Near You</Heading>
          <Image src={images.gifsecond} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" textAlign="center" margin="5%">With Pet Helper, You Can..</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
            Organize Pet Information
            <br />
            Send Reminders for Pet Care
            <br />
            Find Pet Adoption Agencies
            <br />
        </Heading>
          <Heading size={3} textColor="secondary">Key Features</Heading>
          <Heading size={5} textColor="secondary">Organizational & Planning Application.</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
  // const youtubeStyle = {
  //   white: { color: 'white' },
  // }

}
