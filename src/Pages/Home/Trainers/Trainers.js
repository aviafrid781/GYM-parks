import React from 'react';
import Trainer from '../Trainer/Trainer';


const Trainers = () => {

    const trainers = [
        {
            "id": 1,
            "name": "Avi Afrid",
            "Skills": "Push Up Expart",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH1BwxJ84Xs2lZdrOQMByEm4QiRMB4vCmpQ&usqp=CAU"
        },
        {
            "id": 2,
            "name": "Amit Hassan",
            "Skills": "ABs Expart",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnO1CjJl4D2ABR7AbaFyW7esAvz4uzxbbzg&usqp=CAU"

        },
        {
            "id": 3,
            "name": "Sheikh Rahi",
            "Skills": "Battle Ropes Expart",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurQSYDlsvToHsdgDJYb7cl0_krscRI-P94Q&usqp=CAU"
        }

    ]

    return (
        <div id="trainer" className="container">
            <h2 className="text-primary mt-5">Our Trainer</h2>
            <div className="row">

                {
                    trainers.map(trainer => <Trainer
                        key={trainer.id}
                        trainer={trainer}

                    >

                    </Trainer>)
                }

            </div>

        </div>
    );
};

export default Trainers;