import React, { useState } from "react";
import html2canvas from 'html2canvas';

const Imgmeme = () => {

    const [textmeme, setTextmeme] = useState();
    const [imgmeme, setImgmeme] = useState();

    const textoMeme = (e) => {
        setTextmeme(e.target.value);
    }

    const seleccionarImg = (e) => {
        setImgmeme(e.target.value);
    }

    const descarga = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function (canvas) {
            let img = canvas.toDataURL("images/png");
            let link = document.createElement("a");

            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        });
    }


    return (
        <div>
            <h1 className="mt-5 mb-4 text-light">Editá tu propio meme</h1>

            <h2 className="mt-5 mb-4">Escribí tu texto</h2>
            <input onChange={textoMeme} className="form-control text-center w-25 position-absolute top-25 start-50 translate-middle" type="text" placeholder="Poné tu frase" name="meme" />

            <h2 className="mt-5 mb3">Elegí la imagen de tu meme</h2>
            <select onChange={seleccionarImg} className="form-select" aria-label="Default select example">
                <option selected>Seleccionar imagen</option>
                <option value={6}>Futurama</option>
                <option value={7}>Nena con casa en llamas</option>
                <option value={8}>Nicolas Cage</option>
                <option value={9}>Toy Story</option>
            </select>

            <figure className="text-center" id="exportar">
                <p className="mt-5 h1 text-center">{textmeme}</p>
                <img src={`../images/${imgmeme}.jpg`} alt="meme" className="figure-img mt-3 d-block m-auto" />
            </figure>

            <button onClick={descarga} type="button" className="btn btn-success" >Descara tu meme</button>
        </div>
    )
}

export default Imgmeme;