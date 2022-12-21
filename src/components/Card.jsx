import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function CardComponent({character}) {
  return (
    <Card sx={{ maxWidth: 400 }} className="mx-auto">
        <CardMedia
          component="img"
          alt={character.name}
          image={character.image}
          height="auto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <div className="flex gap-6">
            <Typography variant="h7" color="text.secondary">
              Species: <span className="italic">{character.species}</span>
            </Typography>
            <Typography variant="h7" color="text.secondary">
              Status: <span className="italic">{character.status}</span>
            </Typography>
          </div>
        </CardContent>
      </Card>
  )
}

export default CardComponent