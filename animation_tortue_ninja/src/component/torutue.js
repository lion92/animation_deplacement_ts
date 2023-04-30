import React, {useEffect, useState} from 'react';


const Torutue = () => {

    const [load, setLoad] = useState(1000);
    const [surf, setSurf] = useState({});
    const [solBas, setSolBas] = useState(document.getElementById('solBas').style.backgroundPositionX)
    const [perso, setPerso] = useState({});
    let [decalage, setDecalage] = useState(1);
    useEffect(() => {
        attendre();
        setSurf(document.getElementById('surf'));
        setSolBas(document.getElementById('solBas'));
        setPerso(document.getElementById('perso'));
        setDecalage(0);
    }, []);


    window.onload = () => {
        document.addEventListener("keydown", marcher);
    }

    function marcher(event) {
        switch (event.key) {
            case "ArrowLeft":
                setSolBas((solBas * 10) + "px")
                perso.classList.add('persoGauche');
                perso.classList.remove('persoDroite');
                surf.classList.add('surfGauche');
                surf.classList.remove('surfDroite');
                setSolBas((solBas + 1 * 10) + "px")
                break;
            case "ArrowRight":
                setSolBas((solBas * 10) + "px")
                perso.classList.add('persoDroite');
                perso.classList.remove('persoGauche');
                surf.classList.add('surfDroite');
                surf.classList.remove('surfGauche');

                setSolBas(((solBas - 1) * 10) + "px")
                break;
            case "ArrowUp":
                setSolBas((solBas * 10) + "px")
                perso.classList.add('persoGauche');
                perso.classList.remove('persoDroite');
                surf.classList.add('surfGauche');
                surf.classList.remove('surfDroite');
                setSolBas(((solBas + 1) * 10) + "px")
                break;
            case "ArrowDown":
                setSolBas((solBas * 10) + "px")
                perso.classList.add('persoDroite');
                perso.classList.remove('persoGauche');
                surf.classList.add('surfDroite');
                surf.classList.remove('surfGauche');
                setSolBas(((solBas - 1) * 10) + "px");
                break;
        }
    }


    let attendre = () => {

        setLoad(true);
        setTimeout(() => {
            setLoad(false);
        }, 1000);
        console.log(load);
    };

    return (<div>
            <div className='persoDroite'>test</div>
            <div id='solBas'>test</div>
            <div id='surf'>test</div>
        </div>
    )
        ;
};

export default Torutue;