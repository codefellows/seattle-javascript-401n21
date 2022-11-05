import { Card, CardGroup } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { Beast as IBeast, selectedBeasts } from "./beastsSlice";

export const Beasts = () => {
  const beasts = useAppSelector(selectedBeasts);
  return (
    <>
      <h2>{beasts.length} Beasts</h2>
      <CardGroup>
        {beasts.map((beast, idx) => (
          <Beast key={idx} beast={beast} />
        ))}
      </CardGroup>
    </>
  );
};

export const Beast = ({ beast }: { beast: IBeast }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      bg="dark"
      text="light"
      // onClick={this.addFavorite}
    >
      <Card.Img variant="top" src={beast.image_url} />
      <Card.Body>
        <Card.Title>{beast.title}</Card.Title>
        {/* <Card.Text>❤️ = {this.state.favorites}</Card.Text> */}
        <Card.Text>{beast.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
