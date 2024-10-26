// props
import React from 'react';
import Card from './components/Card';
const Tailwind = () => {
    const myObj= [
        {
          name: "Tokyo",
          description: "A bustling metropolis known for its skyscrapers, shopping, and cuisine."
        },
        {
          name: "Paris",
          description: "The city of love, famous for its art, architecture, and café culture."
        },
        {
          name: "New York",
          description: "The Big Apple, known for its iconic skyline, theaters, and vibrant lifestyle."
        },
        {
          name: "Sydney",
          description: "A coastal city famous for its Opera House, beaches, and laid-back vibe."
        },
        {
          name: "Dubai",
          description: "A desert oasis with towering skyscrapers, luxury shopping, and a mix of cultures."
        }
      ];
      

return(<>
<Card data={myObj} btnText="visit-me"></Card>
{/* <Card data={myObj} ></Card> */}



</>)
}

export default Tailwind;