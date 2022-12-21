import landingPage from "../assets/images/rick_morty.png"

function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-24">
          <div className="flex flex-col bg-pink rounded-md p-16 justify-center gap-6">
            <h2 className="text-4xl font-cheri">The Rick and Morty Show</h2>
            <p className="max-w-xl italic">Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into hijinks. - <b><i>Wikipedia</i></b></p>
            <p className="max-w-xl italic">
            I built this project using the 
            <a href="https://rickandmortyapi.com/about" className="underline" target="_blank"> Rick and Morty API</a> which is a REST(ish) and GraphQL API based on the television show Rick and Morty. 
            </p>
          </div>
          <img src={landingPage} alt="Landing page Image" className="h-full rounded-md object-cover"/>
        </section>
  )
}

export default Home