//texture section

let texture = document.getElementById('allTextures');
let textureUpIcon = document.getElementById('textureUpIcon');
let textureDownIcon = document.getElementById('textureDownIcon');

const showTexture = () => {
    texture.style.display = 'grid';
    textureUpIcon.style.display = 'inline';
    textureDownIcon.style.display = 'none';
}
const hideTexture = () => {
    texture.style.display = 'none';
    textureUpIcon.style.display = 'none';
    textureDownIcon.style.display = 'inline';

}
textureUpIcon.style.display = 'inline';
textureDownIcon.style.display = 'none';
let EventTarget4 = document.getElementById('textures');
let EventTarget5 = document.getElementById('textureUpIcon');
let EventTarget6 = document.getElementById('textureDownIcon');

EventTarget4.addEventListener('click', function() {
    if (texture.style.display === 'none') {
        showTexture();
    } else {
        hideTexture();
    }
});
EventTarget5.addEventListener('click', function() {
        hideTexture();
});
EventTarget6.addEventListener('click', function() {
        showTexture();
});

//colors section
let color = document.getElementById('allColors');
let colorUpIcon = document.getElementById('colorUpIcon');
let colorDownIcon = document.getElementById('colorDownIcon');
let moreColorsText = document.getElementById('moreColorsText');


const showAllColors = () => {
    color.style.display = 'block';
    colorUpIcon.style.display = 'inline';
    colorDownIcon.style.display = 'none';
    moreColorsText.style.display = 'block';
}
const hideAllColors = () => {
    color.style.display = 'none';
    colorUpIcon.style.display = 'none';
    colorDownIcon.style.display = 'inline';
    moreColorsText.style.display = 'none';

}
colorUpIcon.style.display = 'inline';
colorDownIcon.style.display = 'none';
let EventTarget7 = document.getElementById('color');
let EventTarget8 = document.getElementById('colorUpIcon');
let EventTarget9 = document.getElementById('colorDownIcon');

EventTarget7.addEventListener('click', function() {
    if (color.style.display === 'none') {
        showAllColors();
    } else {
        hideAllColors();
    }
});
EventTarget8.addEventListener('click', function() {
        hideAllColors();
});
EventTarget9.addEventListener('click', function() {
        showAllColors();
});
//more colors
let moreColors = document.getElementById('moreColors');
const showColors = () => {
    moreColors.style.display = 'block';
}

const hideColors = () => {
    moreColors.style.display = 'none';
}

let eventTarget1 = document.getElementById('colors');
moreColors.style.display = 'none';

eventTarget1.addEventListener('click', function() {
    if (moreColors.style.display === 'block') {
        hideColors();
    } else {
        showColors();
    }
});

//sizes section
let size = document.getElementById('allSizes');
let sizeUpIcon = document.getElementById('sizeUpIcon');
let sizeDownIcon = document.getElementById('sizeDownIcon');
let moreSizesText = document.getElementById('moreSizesText');


const showAllSizes = () => {
    size.style.display = 'block';
    sizeUpIcon.style.display = 'inline';
    sizeDownIcon.style.display = 'none';
    moreSizesText.style.display = 'block';
}
const hideAllSizes = () => {
    size.style.display = 'none';
    sizeUpIcon.style.display = 'none';
    sizeDownIcon.style.display = 'inline';
    moreSizesText.style.display = 'none';

}
sizeUpIcon.style.display = 'inline';
sizeDownIcon.style.display = 'none';
let EventTarget10 = document.getElementById('size');
let EventTarget11 = document.getElementById('sizeUpIcon');
let EventTarget12 = document.getElementById('sizeDownIcon');

EventTarget10.addEventListener('click', function() {
    if (size.style.display === 'none') {
        showAllSizes();
    } else {
        hideAllSizes();
    }
});
EventTarget11.addEventListener('click', function() {
        hideAllSizes();
});
EventTarget12.addEventListener('click', function() {
        showAllSizes();
});

//more sizes
let moreSizes = document.getElementById('moreSizes')
const showSizes = () => {
    moreSizes.style.display = 'block';
}

const hideSizes = () => {
    moreSizes.style.display = 'none';
}
let eventTarget2 = document.getElementById('sizes');
moreSizes.style.display = 'none';

eventTarget2.addEventListener('click', function() {
    if (moreSizes.style.display === 'block') {
        hideSizes();
    } else {
        showSizes();
    }
});
//brands section
let brand = document.getElementById('allBrands');
let brandUpIcon = document.getElementById('brandUpIcon');
let brandDownIcon = document.getElementById('brandDownIcon');
let moreBrandsText = document.getElementById('moreBrandsText');


const showAllBrands = () => {
    brand.style.display = 'block';
    brandUpIcon.style.display = 'inline';
    brandDownIcon.style.display = 'none';
    moreBrandsText.style.display = 'block';
}
const hideAllBrands = () => {
    brand.style.display = 'none';
    brandUpIcon.style.display = 'none';
    brandDownIcon.style.display = 'inline';
    moreBrandsText.style.display = 'none';

}
brandUpIcon.style.display = 'inline';
brandDownIcon.style.display = 'none';
let EventTarget13 = document.getElementById('brand');
let EventTarget14 = document.getElementById('brandUpIcon');
let EventTarget15 = document.getElementById('brandDownIcon');

EventTarget13.addEventListener('click', function() {
    if (brand.style.display === 'none') {
        showAllBrands();
    } else {
        hideAllBrands();
    }
});
EventTarget14.addEventListener('click', function() {
        hideAllBrands();
});
EventTarget15.addEventListener('click', function() {
        showAllBrands();
});
//more brands
let moreBrands = document.getElementById('moreBrands')
const showBrands = () => {
    moreBrands.style.display = 'block';
}

const hideBrands = () => {
    moreBrands.style.display = 'none';
}
let eventTarget3 = document.getElementById('brands');
moreBrands.style.display = 'none';

eventTarget3.addEventListener('click', function() {
    if (moreBrands.style.display === 'block') {
        hideBrands();
    } else {
        showBrands();
    }
});

//prices section
let price = document.getElementById('allPrices');
let priceUpIcon = document.getElementById('priceUpIcon');
let priceDownIcon = document.getElementById('priceDownIcon');


const showAllPrices = () => {
    price.style.display = 'block';
    priceUpIcon.style.display = 'inline';
    priceDownIcon.style.display = 'none';
}
const hideAllPrices = () => {
    price.style.display = 'none';
    priceUpIcon.style.display = 'none';
    priceDownIcon.style.display = 'inline';

}
priceUpIcon.style.display = 'inline';
priceDownIcon.style.display = 'none';
let EventTarget16 = document.getElementById('price');
let EventTarget17 = document.getElementById('priceUpIcon');
let EventTarget18 = document.getElementById('priceDownIcon');

EventTarget16.addEventListener('click', function() {
    if (price.style.display === 'none') {
        showAllPrices();
    } else {
        hideAllPrices();
    }
});
EventTarget17.addEventListener('click', function() {
        hideAllPrices();
});
EventTarget18.addEventListener('click', function() {
        showAllPrices();
});

//usabilities section
let usability = document.getElementById('allUsabilityCases');
let usabilityUpIcon = document.getElementById('usabilityUpIcon');
let usabilityDownIcon = document.getElementById('usabilityDownIcon');


const showAllUsabilityCases = () => {
    usability.style.display = 'block';
    usabilityUpIcon.style.display = 'inline';
    usabilityDownIcon.style.display = 'none';
}
const hideAllUsabilityCases = () => {
    usability.style.display = 'none';
    usabilityUpIcon.style.display = 'none';
    usabilityDownIcon.style.display = 'inline';

}
usabilityUpIcon.style.display = 'inline';
usabilityDownIcon.style.display = 'none';
let EventTarget19 = document.getElementById('usability');
let EventTarget20 = document.getElementById('usabilityUpIcon');
let EventTarget21 = document.getElementById('usabilityDownIcon');

EventTarget19.addEventListener('click', function() {
    if (usability.style.display === 'none') {
        showAllUsabilityCases();
    } else {
        hideAllUsabilityCases();
    }
});
EventTarget20.addEventListener('click', function() {
        hideAllUsabilityCases();
});
EventTarget21.addEventListener('click', function() {
        showAllUsabilityCases();
});

//Submit filters
const availableBtn = document.getElementById('availableBtn');
const btns = document.querySelectorAll('.btn');
const textureCheckmarks = document.querySelectorAll('.checkmark');
const colorBtns = document.querySelectorAll('.colorBtn');
const sizeBtns = document.querySelectorAll('.sizeBtn');
const brandBtns = document.querySelectorAll('.brandBtn');
const contextBtns = document.querySelectorAll('.contextBtn');
const appliedFilters = document.querySelectorAll('.appliedfilter');
const storeProducts = document.querySelectorAll('.store-product');
const prices = document.querySelectorAll('.price');
let availableFilter = 0;
const filter = [];
const colorFilter = [];
const sizeFilter = [];
const brandFilter = [];
const contextFilter = [];
const allAppliedFilter = [];
let priceDownRange = 0;
let priceUpRange = 5000000;
let productPrice = 0;

function changePriceDownRange() {
    priceDownRange = document.getElementById('priceDownRange').value;
    console.log(priceDownRange);
    appliedFilters.forEach((appliedfilter) => {
        if (appliedfilter.classList.contains('قیمت')) {
            appliedfilter.innerHTML = priceUpRange + ' قیمت از ' + priceDownRange + ' تا ';
            appliedfilter.style.display = 'block';
        }                
    });
}
function changePriceUpRange() {
    priceUpRange = document.getElementById('priceUpRange').value;
    console.log(priceUpRange);
    appliedFilters.forEach((appliedfilter) => {
        if (appliedfilter.classList.contains('قیمت')) {
            appliedfilter.innerHTML = priceUpRange + ' قیمت از ' + priceDownRange + ' تا ';
            appliedfilter.style.display = 'block';
        }                
    });
}

appliedFilters.forEach((appliedfilter) => {
    appliedfilter.style.display = 'none';
});


//availability filter
function toggleFilter() {
    availableFilter++;
    if (availableFilter%2 === 0) {
        appliedFilters.forEach((appliedfilter) => {
            if (appliedfilter.classList.contains('فقطموجود')) {
                appliedfilter.style.display = 'none';
            }                
        });
    } else {
        appliedFilters.forEach((appliedfilter) => {
            if (appliedfilter.classList.contains('فقطموجود')) {
                appliedfilter.style.display = 'block';
            }               
        });
    }
}
availableBtn.addEventListener('click', toggleFilter);

//remove applied filters
for (let g = 0; g < appliedFilters.length; g++) {
    appliedFilters[g].addEventListener('click', (e) => {
        if (allAppliedFilter.includes(e.target.dataset.filter)) {
            const index8 = allAppliedFilter.indexOf(e.target.dataset.filter);
            allAppliedFilter.splice(index8, 1);
        } else {
            allAppliedFilter.push(e.target.dataset.filter);
        }
        console.log(allAppliedFilter);
        if (allAppliedFilter.length === 0) {
            return;
        } else {
            appliedFilters.forEach((appliedfilter) => {
                for(let h=0; h < allAppliedFilter.length; h++) {
                    if (appliedfilter.classList.contains(allAppliedFilter[h])) {
                        appliedfilter.style.display = 'none';
                        /*btns.forEach((btn) => {
                            if (btn.classList.contains(allAppliedFilter[h])) {
                                btn.checked = false;
                            }
                        })*/  
                                             
                    }
                }
            })
        }
    });
}
function uncheck() {
    document.getElementById('myCheckboxTest').Checked = false;
} 


for (let a = 0; a < btns.length; a++) {

    btns[a].addEventListener('click', (e) => {

        if (filter.includes(e.target.dataset.filter)) {
            const index = filter.indexOf(e.target.dataset.filter);
            filter.splice(index, 1);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'none';
                }               
            });
        } else {
            filter.push(e.target.dataset.filter);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'block';
                }                
            });

        }
        console.log(filter);
    })
};

for (let b = 0; b < colorBtns.length; b++) {

    colorBtns[b].addEventListener('click', (e) => {

        if (colorFilter.includes(e.target.dataset.filter)) {
            const index2 = colorFilter.indexOf(e.target.dataset.filter);
            colorFilter.splice(index2, 1);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'none';
                }               
            });
        } else {
            colorFilter.push(e.target.dataset.filter);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'block';
                }                
            });
        }
        console.log(colorFilter);
    })
};

for (let c = 0; c < sizeBtns.length; c++) {

    sizeBtns[c].addEventListener('click', (e) => {

        if (sizeFilter.includes(e.target.dataset.filter)) {
            const index3 = sizeFilter.indexOf(e.target.dataset.filter);
            sizeFilter.splice(index3, 1);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'none';
                }               
            });
        } else {
            sizeFilter.push(e.target.dataset.filter);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'block';
                }                
            });
        }
        console.log(sizeFilter);
    })
};

for (let d = 0; d < brandBtns.length; d++) {

    brandBtns[d].addEventListener('click', (e) => {

        if (brandFilter.includes(e.target.dataset.filter)) {
            const index4 = brandFilter.indexOf(e.target.dataset.filter);
            brandFilter.splice(index4, 1);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'none';
                }               
            });
        } else {
            brandFilter.push(e.target.dataset.filter);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'block';
                }                
            });
        }
        console.log(brandFilter);
    })
};

for (let f = 0; f < contextBtns.length; f++) {

    contextBtns[f].addEventListener('click', (e) => {

        if (contextFilter.includes(e.target.dataset.filter)) {
            const index5 = contextFilter.indexOf(e.target.dataset.filter);
            contextFilter.splice(index5, 1);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'none';
                }               
            });
        } else {
            contextFilter.push(e.target.dataset.filter);
            appliedFilters.forEach((appliedfilter) => {
                if (appliedfilter.classList.contains(e.target.dataset.filter)) {
                    appliedfilter.style.display = 'block';
                }                
            });
        }
        console.log(contextFilter);
    })
};

const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', (e) => {

    storeProducts.forEach((product) => {
        String.prototype.toEnDigit = function() {
            return this.replace(/[\u06F0-\u06F9]+/g, function(digit) {
                var ret = '';
                for (var i = 0, len = digit.length; i < len; i++) {
                    ret += String.fromCharCode(digit.charCodeAt(i) - 1728);
                }
         
                return ret*1000;
            });
        }; 
        productPrice = parseInt(product.getElementsByTagName('div')[0].getElementsByTagName('span')[1].innerHTML.toEnDigit(), 10);
        if (availableFilter%2 === 0) {
            if (brandFilter.length === 0) {
                if (filter.length === 0) {
                    if (colorFilter.length === 0) {
                        if (sizeFilter.length === 0) {
                            if (contextFilter.length === 0) {
                                if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                    product.style.display = 'grid';
                                } else {
                                    product.style.display = 'none';
                                }                                
                            } else {
                                product.style.display = 'none';
                                for (let m=0; m<contextFilter.length; m++) {
                                    if (product.classList.contains(contextFilter[m])) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    } else {
                                        product.style.display = 'none';                                      
                                    }
                                }
                            }
                        } else if (contextFilter.length === 0) {
                            product.style.display = 'none';
                            for (let n=0; n<sizeFilter.length; n++) {
                                if (product.classList.contains(sizeFilter[n])) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
        
                        } else {
                            product.style.display = 'none';
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    } else if (sizeFilter.length === 0) {
                        if (contextFilter.length === 0) {
                            product.style.display = 'none';
                            for (let l=0; l<colorFilter.length; l++) {
                                if (product.classList.contains(colorFilter[l])) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
                        } else {
                            product.style.display = 'none';
                            for (l=0; l<colorFilter.length; l++) {
                                for (m=0; m<contextFilter.length; m++) {
                                    if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
        
                    } else if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (l=0; l<colorFilter.length; l++) {
                            for (n=0; n<sizeFilter.length; n++) {
                                if ((product.classList.contains(colorfilter[l])) && (product.classList.contains(sizeFilter[n]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
                        }
                    } else {
                        product.style.display = 'none';
                        for (l=0; l<colorFilter.length; l++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if (colorFilter.length === 0) {
                    if (sizeFilter.length === 0) {
                        if (contextFilter.length === 0) {
                            product.style.display = 'none';
                            for (let k=0; k<filter.length; k++) {
                                if (product.classList.contains(filter[k])) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
                        } else {
                            product.style.display = 'none';
                            for (k=0; k<filter.length; k++) {
                                for (m=0; m<contextFilter.length; m++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    } else if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (n=0; n<sizeFilter.length; n++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(sizeFilter[n]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
                        }
                    } else {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if (sizeFilter.length === 0) {
                    if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (l=0; l<colorFilter.length; l++) {
                                if (product.classList.contains(filter[k]) && product.classList.contains(colorFilter[l])) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }                        
                        }
                    } else {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (l=0; l<colorFilter.length; l++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(colorFilter[l]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }            
                            }
                        }
                    }  
                } else if (contextFilter.length === 0) {
                    product.style.display = 'none';
                    for (k=0; k<filter.length; k++) {   
                        for (l=0; l<colorFilter.length; l++) {
                            for (n=0; n<sizeFilter.length; n++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(sizeFilter[n]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }            
                        }
                    }
                } else {
                    product.style.display = 'none';
                    for (k=0; k<filter.length; k++) {
                        for (l=0; l<colorFilter.length; l++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }                
                            }
                        } 
                    }    
                } 
            } else if (filter.length === 0) {
                if (colorFilter.length === 0) {
                    if (sizeFilter.length === 0) {
                        if (contextFilter.length === 0) {
                            product.style.display = 'none';
                            for (let o=0; o<brandFilter.length; o++) {
                                if (product.classList.contains(BrandFilter[o])) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
                        } else {
                            product.style.display = 'none';
                            for (m=0; m<contextFilter.length; m++) {
                                for (o=0; o<brandFilter.length; o++) {
                                    if ((product.classList.contains(contextFilter[m])) && (product.classList.contains(brandFilter[o]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    } else if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (n=0; n<sizeFilter.length; n++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(sizeFilter[n])) && (product.classList.contains(brandFilter[o]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
                        }
                    } else {
                        product.style.display = 'none';
                        for (n=0; n<sizeFilter.length; n++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (o=0; o<brandFilter.length; o++) {
                                    if ((product.classList.contains(sizeFilter[n])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(brandFilter[o]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }            
                            }
                        }
                    }
                } else if (sizeFilter.length === 0) {
                    if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (l=0; l<colorFilter.length; l++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(brandFilter[o]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
                        } 
                    } else {
                        product.style.display = 'none';
                        for (l=0; l<colorFilter.length; l++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (o=0; o<brandFilter.length; o++) {
                                    if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(brandFilter[o]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }            
                            }
                        }
                    }
                } else if (contextFilter.length === 0) {
                    product.style.display = 'none';
                    for (l=0; l<colorFilter.length; l++) {
                        for (n=0; n<sizeFilter.length; n++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(sizeFilter[n])) && (product.classList.contains(brandFilter[o]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }            
                        }
                    }
                } else {
                    product.style.display = 'none';
                    for (o=0; o<brandFilter.length; o++) {
                        for (l=0; l<colorFilter.length; l++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }                
                            }
                        }
                    }  
                }      
            } else if (colorFilter.length === 0) {
                if (sizeFilter.length === 0) {
                    if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(brandFilter[o]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }
                        } 
                    } else {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (o=0; o<brandFilter.length; o++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(brandFilter[o]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }            
                            }
                        }
                    }
                } else if (contextFilter.length === 0) {
                    product.style.display = 'none';
                    for (k=0; k<filter.length; k++) {
                        for (n=0; n<sizeFilter.length; n++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(sizeFilter[n])) && (product.classList.contains(brandFilter[o]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }            
                        }
                    }
                } else {
                    product.style.display = 'none';
                    for (o=0; o<brandFilter.length; o++) {
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (sizeFilter.length === 0) {
                if (contextFilter.length === 0) {
                    product.style.display = 'none';
                    for (k=0; k<filter.length; k++) {
                        for (l=0; l<colorFilter.length; l++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(brandFilter[o]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }            
                        }
                    } 
                } else {
                    product.style.display = 'none';
                    for (o=0; o<brandFilter.length; o++) {
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (l=0; l<colorFilter.length; l++) {
                                    if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(colorFilter[l]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }                
                            }
                        }
                    }
                }
            } else if (contextFilter.length === 0) {
                product.style.display = 'none';
                for (o=0; o<brandFilter.length; o++) {
                    for (k=0; k<filter.length; k++) {
                        for (n=0; n<sizeFilter.length; n++) {
                            for (l=0; l<colorFilter.length; l++) {
                                if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(filter[k])) && (product.classList.contains(sizeFilter[n])) && (product.classList.contains(colorFilter[l]))) {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }
                            }                
                        }
                    }
                }
            } else {
                product.style.display = 'none';
                for (o=0; o<brandFilter.length; o++) {
                    for (k=0; k<filter.length; k++) {
                        for (n=0; n<sizeFilter.length; n++) {
                            for (l=0; l<colorFilter.length; l++) {
                                for (m=0; m<contextFilter.length; m++) {
                                    if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(filter[k])) && (product.classList.contains(sizeFilter[n])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m]))) {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }                
                            }
                        }
                    }
                }
            }
        } else {
            if (brandFilter.length === 0) {
                if (filter.length === 0) {
                    if (colorFilter.length === 0) {
                        if (sizeFilter.length === 0) {
                            if (contextFilter.length === 0) {
                                if (product.classList.contains('ناموجود')) {
                                    product.style.display = 'none'
                                } else {
                                    if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                        product.style.display = 'grid';
                                    } else {
                                        product.style.display = 'none';
                                    }
                                }                                
                            } else {
                                product.style.display = 'none';
                                for (let m=0; m<contextFilter.length; m++) {
                                    if (product.classList.contains(contextFilter[m])) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }
                            }
                        } else if (contextFilter.length === 0) {
                            product.style.display = 'none';
                            for (let n=0; n<sizeFilter.length; n++) {
                                if (product.classList.contains(sizeFilter[n])) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
        
                        } else {
                            product.style.display = 'none';
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (sizeFilter.length === 0) {
                        if (contextFilter.length === 0) {
                            product.style.display = 'none';
                            for (let l=0; l<colorFilter.length; l++) {
                                if (product.classList.contains(colorFilter[l])) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        } else {
                            product.style.display = 'none';
                            for (l=0; l<colorFilter.length; l++) {
                                for (m=0; m<contextFilter.length; m++) {
                                    if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }
                            }
                        }
        
                    } else if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (l=0; l<colorFilter.length; l++) {
                            for (n=0; n<sizeFilter.length; n++) {
                                if ((product.classList.contains(colorfilter[l])) && (product.classList.contains(sizeFilter[n]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        product.style.display = 'none';
                        for (l=0; l<colorFilter.length; l++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if (colorFilter.length === 0) {
                    if (sizeFilter.length === 0) {
                        if (contextFilter.length === 0) {
                            product.style.display = 'none';
                            for (let k=0; k<filter.length; k++) {
                                if (product.classList.contains(filter[k])) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        } else {
                            product.style.display = 'none';
                            for (k=0; k<filter.length; k++) {
                                for (m=0; m<contextFilter.length; m++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (n=0; n<sizeFilter.length; n++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(sizeFilter[n]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if (sizeFilter.length === 0) {
                    if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (l=0; l<colorFilter.length; l++) {
                                if (product.classList.contains(filter[k]) && product.classList.contains(colorFilter[l])) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }                        
                        }
                    } else {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (l=0; l<colorFilter.length; l++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(colorFilter[l]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }            
                            }
                        }
                    }  
                } else if (contextFilter.length === 0) {
                    product.style.display = 'none';
                    for (k=0; k<filter.length; k++) {   
                        for (l=0; l<colorFilter.length; l++) {
                            for (n=0; n<sizeFilter.length; n++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(sizeFilter[n]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }            
                        }
                    }
                } else {
                    product.style.display = 'none';
                    for (k=0; k<filter.length; k++) {
                        for (l=0; l<colorFilter.length; l++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }                
                            }
                        } 
                    }    
                } 
            } else if (filter.length === 0) {
                if (colorFilter.length === 0) {
                    if (sizeFilter.length === 0) {
                        if (contextFilter.length === 0) {
                            product.style.display = 'none';
                            for (let o=0; o<brandFilter.length; o++) {
                                if (product.classList.contains(BrandFilter[o])) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        } else {
                            product.style.display = 'none';
                            for (m=0; m<contextFilter.length; m++) {
                                for (o=0; o<brandFilter.length; o++) {
                                    if ((product.classList.contains(contextFilter[m])) && (product.classList.contains(brandFilter[o]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (n=0; n<sizeFilter.length; n++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(sizeFilter[n])) && (product.classList.contains(brandFilter[o]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        product.style.display = 'none';
                        for (n=0; n<sizeFilter.length; n++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (o=0; o<brandFilter.length; o++) {
                                    if ((product.classList.contains(sizeFilter[n])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(brandFilter[o]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }            
                            }
                        }
                    }
                } else if (sizeFilter.length === 0) {
                    if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (l=0; l<colorFilter.length; l++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(brandFilter[o]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        } 
                    } else {
                        product.style.display = 'none';
                        for (l=0; l<colorFilter.length; l++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (o=0; o<brandFilter.length; o++) {
                                    if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(brandFilter[o]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }            
                            }
                        }
                    }
                } else if (contextFilter.length === 0) {
                    product.style.display = 'none';
                    for (l=0; l<colorFilter.length; l++) {
                        for (n=0; n<sizeFilter.length; n++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(colorFilter[l])) && (product.classList.contains(sizeFilter[n])) && (product.classList.contains(brandFilter[o]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }            
                        }
                    }
                } else {
                    product.style.display = 'none';
                    for (o=0; o<brandFilter.length; o++) {
                        for (l=0; l<colorFilter.length; l++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }                
                            }
                        }
                    }  
                }      
            } else if (colorFilter.length === 0) {
                if (sizeFilter.length === 0) {
                    if (contextFilter.length === 0) {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(brandFilter[o]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        } 
                    } else {
                        product.style.display = 'none';
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (o=0; o<brandFilter.length; o++) {
                                    if ((product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(brandFilter[o]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }            
                            }
                        }
                    }
                } else if (contextFilter.length === 0) {
                    product.style.display = 'none';
                    for (k=0; k<filter.length; k++) {
                        for (n=0; n<sizeFilter.length; n++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(sizeFilter[n])) && (product.classList.contains(brandFilter[o]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }            
                        }
                    }
                } else {
                    product.style.display = 'none';
                    for (o=0; o<brandFilter.length; o++) {
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (n=0; n<sizeFilter.length; n++) {
                                    if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(sizeFilter[n]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (sizeFilter.length === 0) {
                if (contextFilter.length === 0) {
                    product.style.display = 'none';
                    for (k=0; k<filter.length; k++) {
                        for (l=0; l<colorFilter.length; l++) {
                            for (o=0; o<brandFilter.length; o++) {
                                if ((product.classList.contains(filter[k])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(brandFilter[o]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }            
                        }
                    } 
                } else {
                    product.style.display = 'none';
                    for (o=0; o<brandFilter.length; o++) {
                        for (k=0; k<filter.length; k++) {
                            for (m=0; m<contextFilter.length; m++) {
                                for (l=0; l<colorFilter.length; l++) {
                                    if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(filter[k])) && (product.classList.contains(contextFilter[m])) && (product.classList.contains(colorFilter[l]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }                
                            }
                        }
                    }
                }
            } else if (contextFilter.length === 0) {
                product.style.display = 'none';
                for (o=0; o<brandFilter.length; o++) {
                    for (k=0; k<filter.length; k++) {
                        for (n=0; n<sizeFilter.length; n++) {
                            for (l=0; l<colorFilter.length; l++) {
                                if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(filter[k])) && (product.classList.contains(sizeFilter[n])) && (product.classList.contains(colorFilter[l]))) {
                                    if (product.classList.contains('ناموجود')) {
                                        product.style.display = 'none'
                                    } else {
                                        if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                            product.style.display = 'grid';
                                        } else {
                                            product.style.display = 'none';
                                        }
                                    }
                                }
                            }                
                        }
                    }
                }
            } else {
                product.style.display = 'none';
                for (o=0; o<brandFilter.length; o++) {
                    for (k=0; k<filter.length; k++) {
                        for (n=0; n<sizeFilter.length; n++) {
                            for (l=0; l<colorFilter.length; l++) {
                                for (m=0; m<contextFilter.length; m++) {
                                    if ((product.classList.contains(brandFilter[o])) && (product.classList.contains(filter[k])) && (product.classList.contains(sizeFilter[n])) && (product.classList.contains(colorFilter[l])) && (product.classList.contains(contextFilter[m]))) {
                                        if (product.classList.contains('ناموجود')) {
                                            product.style.display = 'none'
                                        } else {
                                            if ((productPrice >= priceDownRange) && (productPrice <= priceUpRange)) {
                                                product.style.display = 'grid';
                                            } else {
                                                product.style.display = 'none';
                                            }
                                        }
                                    }
                                }                
                            }
                        }
                    }
                }
            }

        }    
    });
});   

//sorting section

/*

    function ascendingSort() {
        var list, i, switching, b, shouldSwitch;
        list = document.getElementById("productList");
        
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        /*

        while (switching) {
          // start by saying: no switching is done:
          switching = false;
          b = list.getElementsByTagName('DIV')[0].getElementsByTagName('DIV')[0].getElementsByTagName('SPAN')[1];
          // Loop through all list-items:
          for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            
            /*
            if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
              /* if next item is numerically
              lower than current item, mark as a switch
              and break the loop: */

              /*
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */

            /*
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
          }
        }
        console.log(list);
    }*/



//Sorting doesn't work;
//applied filters should be removed by deleting from the top!
