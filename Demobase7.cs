#console {
    position: absolute;
    top: 345px;
    right: 5px;
    width: 140px;
    height: 55px;
    margin: 1px;
    padding: 1px 1px;
    ;
}

.calculation-box {
    border-color: #dddddd;
    height: 75px;
    width: 202px;
    position: absolute;
    top: 60px;
    right: 48px;
    background-color: rgba(255, 255, 255, .9);
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    border-style: solid;
}


.map-overlay {
    height: 75px;
    width: 150px;
    position: absolute;
    bottom: 170px;
    left: 10px;
    background-color: rgba(255, 255, 255, .9);
    padding: 10px;
    text-align: center;
}

.legend {
    background-color: rgba(255, 255, 255, .9); /*#fff;*/
    border-radius: 5px;
    top: 160px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    padding: 10px;
    position: absolute;
    right: 48px;
    z-index: 1;
}

    .legend h4 {
        margin: 0 0 10px;
    }

    .legend div span {
        border-radius: 50%;
        display: inline-block;
        height: 10px;
        margin-right: 10px;
        width: 10px;
    }

.menu {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    padding: 10px;
    position: absolute;
    left: 38px;
}

p {
    font-family: 'Helvetica Neue';
    margin: 0;
    font-size: 13px;
}

input[type=range].clsHtmlSlider {
    -webkit-appearance: none;
    border: 1px solid white;
    width: 300px;
}

    input[type=range].clsHtmlSlider::-webkit-slider-runnable-track {
        width: 300px;
        height: 5px;
        background: #DDDDDD;
        border: none;
        border-radius: 3px;
    }

    input[type=range].clsHtmlSlider::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #25446B;
        margin-top: -4px;
    }

    input[type=range].clsHtmlSlider:focus {
        outline: none;
    }

        input[type=range].clsHtmlSlider:focus::-webkit-slider-runnable-track {
            background: #CCCCCC;
        }

    input[type=range].clsHtmlSlider::-moz-range-track {
        width: 300px;
        height: 5px;
        background: #DDDDDD;
        border: none;
        border-radius: 3px;
    }

    input[type=range].clsHtmlSlider::-moz-range-thumb {
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #4178be;
    }

    input[type=range].clsHtmlSlider:-moz-focusring {
        outline: 1px solid white;
        outline-offset: -1px;
    }

    input[type=range].clsHtmlSlider::-ms-track {
        width: 300px;
        height: 5px;
        background: transparent;
        border-color: transparent;
        border-width: 6px 0;
        color: transparent;
    }

input[type=range][rangeType=min].clsHtmlSlider::-ms-fill-lower {
    background: #4178be;
    border-radius: 10px;
}

input[type=range][rangeType=min].clsHtmlSlider::-ms-fill-upper {
    background: #DDDDDD;
    border-radius: 10px;
}

input[type=range][rangeType=max].clsHtmlSlider::-ms-fill-lower {
    background: #DDDDDD;
    border-radius: 10px;
}

input[type=range][rangeType=max].clsHtmlSlider::-ms-fill-upper {
    background: #4178be;
    border-radius: 10px;
}

input[type=range].clsHtmlSlider::-ms-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #4178be;
}

input[type=range][rangeType=min].clsHtmlSlider:focus::-ms-fill-lower {
    background: #4178be;
}

input[type=range][rangeType=min].clsHtmlSlider:focus::-ms-fill-upper {
    background: #CCCCCC;
}

input[type=range][rangeType=max].clsHtmlSlider:focus::-ms-fill-lower {
    background: #CCCCCC;
}

input[type=range][rangeType=max].clsHtmlSlider:focus::-ms-fill-upper {
    background: #4178be;
}
