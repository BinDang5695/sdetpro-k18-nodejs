import Animal from "./Animal";

export default class RacingController{

    public play(animals: Animal[]){
        // Announce list of racers
        this.announceRacers(animals);

        // Get the winner
        const winner: Animal = this.getWinner(animals);

        // Announce the winner name with format
        this.announceWinner(winner);
    }

    // Support method
    private announceRacers(animals: Animal[]){
        
    }


    private getWinner(animals: Animal[]): Animal{
        let winner: Animal = animals[0];

        for (const animal of animals){
            if(animal.getSpeed() > winner.getSpeed()){
                winner = animal;
            }
        }
        return winner;
    }

    private announceWinner(winner: Animal){

    }

}