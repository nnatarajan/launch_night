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
  dogray: require("../assets/dog-gray.jpg"),
  puppy: require("../assets/puppy.jpg"),
  puppygray: require("../assets/puppy-gray.jpg"),
  cat: require("../assets/cat.jpg"),
  catwide: require("../assets/cat-wide.jpg"),
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
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary"     textAlign="center" margin="5%">
            Welcome to Pet Helper!
          </Heading>
            <Image src={images.dogwide} />
            <Heading size={1} fit caps lineHeight={1} textColor="primary" textAlign="center" margin="5%">
              An app built to assist you in taking care of your pets.
            </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" textAlign="center" margin="5%"> Unhappy Pet?</Heading>
          <Image src={images.catwide} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" textAlign="center" margin="10%"> Let's Fix That..</Heading>
          <Image src={images.catwide} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
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
}
