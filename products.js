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
document.getElementById('colorUpArrow').style.display = 'none';
document.getElementById('colorDownArrow').style.display = 'inline';
const showColors = () => {
    moreColors.style.display = 'block';
    document.getElementById('colors').innerHTML = 'کمتر';
    document.getElementById('colorDownArrow').style.display = 'none';
    document.getElementById('colorUpArrow').style.display = 'inline';
}

const hideColors = () => {
    moreColors.style.display = 'none';
    document.getElementById('colors').innerHTML = 'رنگ‌های بیشتر';
    document.getElementById('colorUpArrow').style.display = 'none';
    document.getElementById('colorDownArrow').style.display = 'inline';
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
let eventTarget22 = document.getElementById('colorDownArrow');
eventTarget22.addEventListener('click', function() {
    if (moreColors.style.display === 'block') {
        hideColors();
    } else {
        showColors();
    }
});
let eventTarget23 = document.getElementById('colorUpArrow');
eventTarget23.addEventListener('click', function() {
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
document.getElementById('sizeUpArrow').style.display = 'none';
document.getElementById('sizeDownArrow').style.display = 'inline';
const showSizes = () => {
    moreSizes.style.display = 'block';
    document.getElementById('sizes').innerHTML = 'کمتر';
    document.getElementById('sizeDownArrow').style.display = 'none';
    document.getElementById('sizeUpArrow').style.display = 'inline';
}

const hideSizes = () => {
    moreSizes.style.display = 'none';
    document.getElementById('sizes').innerHTML = 'سایزهای بیشتر';
    document.getElementById('sizeUpArrow').style.display = 'none';
    document.getElementById('sizeDownArrow').style.display = 'inline';
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
let eventTarget24 = document.getElementById('sizeDownArrow');
eventTarget24.addEventListener('click', function() {
    if (moreSizes.style.display === 'block') {
        hideSizes();
    } else {
        showSizes();
    }
});
let eventTarget25 = document.getElementById('sizeUpArrow');
eventTarget25.addEventListener('click', function() {
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
let moreBrands = document.getElementById('moreBrands');
document.getElementById('brandUpArrow').style.display = 'none';
document.getElementById('brandDownArrow').style.display = 'inline';

const showBrands = () => {
    moreBrands.style.display = 'block';
    document.getElementById('brands').innerHTML = 'کمتر';
    document.getElementById('brandDownArrow').style.display = 'none';
    document.getElementById('brandUpArrow').style.display = 'inline';
}

const hideBrands = () => {
    moreBrands.style.display = 'none';
    document.getElementById('brands').innerHTML = 'برندهای بیشتر';
    document.getElementById('brandUpArrow').style.display = 'none';
    document.getElementById('brandDownArrow').style.display = 'inline';
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
let eventTarget26 = document.getElementById('brandDownArrow');
eventTarget26.addEventListener('click', function() {
    if (moreBrands.style.display === 'block') {
        hideBrands();
    } else {
        showBrands();
    }
});

let eventTarget27 = document.getElementById('brandUpArrow');
eventTarget27.addEventListener('click', function() {
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
    
    if (document.getElementById('priceDownRange').value.length === 0) {
        priceDownRange = 0;
    } else {
        priceDownRange = document.getElementById('priceDownRange').value;
    }
    console.log(priceDownRange);
    appliedFilters.forEach((appliedfilter) => {
        if (appliedfilter.classList.contains('قیمت')) {
            appliedfilter.innerHTML = priceUpRange + ' قیمت از ' + priceDownRange + ' تا ';
            appliedfilter.style.display = 'block';
        }                
    });
}
function changePriceUpRange() {
    
    if (document.getElementById('priceUpRange').value.length === 0) {
        priceUpRange = 5000000;
    } else {
        priceUpRange = document.getElementById('priceUpRange').value;
    }
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
//applied filters functions (onclick)
function uncheck1() {
    document.getElementById('فقطموجود').style.display = 'none';
    document.getElementById('availableBtn').checked = false;
    availableFilter = 0;
}; 
function uncheck2() {
    document.getElementById('الیافنخی').style.display = 'none';
    document.getElementById('فیلترالیافنخی').checked = false;
    if (filter.includes('الیافنخی')) {
        const index = filter.indexOf('الیافنخی');
        filter.splice(index, 1);
    }
}; 
function uncheck3() {
    document.getElementById('کتان').style.display = 'none';
    document.getElementById('فیلترکتان').checked = false;
    if (filter.includes('کتان')) {
        const index = filter.indexOf('کتان');
        filter.splice(index, 1);
    }
}; 
function uncheck4() {
    document.getElementById('لینن').style.display = 'none';
    document.getElementById('فیلترلینن').checked = false;
    if (filter.includes('لینن')) {
        const index = filter.indexOf('لینن');
        filter.splice(index, 1);
    }
}; 
function uncheck5() {
    document.getElementById('ژاکارد').style.display = 'none';
    document.getElementById('فیلترژاکارد').checked = false;
    if (filter.includes('ژاکارد')) {
        const index = filter.indexOf('ژاکارد');
        filter.splice(index, 1);
    }
}; 
function uncheck6() {
    document.getElementById('الیافطبیعی').style.display = 'none';
    document.getElementById('فیلترالیافطبیعی').checked = false;
    if (filter.includes('الیافطبیعی')) {
        const index = filter.indexOf('الیافطبیعی');
        filter.splice(index, 1);
    }
}; 
function uncheck7() {
    document.getElementById('حریر').style.display = 'none';
    document.getElementById('فیلترحریر').checked = false;
    if (filter.includes('حریر')) {
        const index = filter.indexOf('حریر');
        filter.splice(index, 1);
    }
}; 
function uncheck8() {
    document.getElementById('ریون').style.display = 'none';
    document.getElementById('فیلترریون').checked = false;
    if (filter.includes('ریون')) {
        const index = filter.indexOf('ریون');
        filter.splice(index, 1);
    }
}; 
function uncheck9() {
    document.getElementById('کرپ').style.display = 'none';
    document.getElementById('فیلترکرپ').checked = false;
    if (filter.includes('کرپ')) {
        const index = filter.indexOf('کرپ');
        filter.splice(index, 1);
    }
}; 
function uncheck10() {
    document.getElementById('ویسکوز').style.display = 'none';
    document.getElementById('فیلترویسکوز').checked = false;
    if (filter.includes('ویسکوز')) {
        const index = filter.indexOf('ویسکوز');
        filter.splice(index, 1);
    }
}; 
function uncheck11() {
    document.getElementById('پلیاستر').style.display = 'none';
    document.getElementById('فیلترپلیاستر').checked = false;
    if (filter.includes('پلیاستر')) {
        const index = filter.indexOf('پلیاستر');
        filter.splice(index, 1);
    }
}; 

function uncheck12() {
    document.getElementById('مشکی').style.display = 'none';
    document.getElementById('check_1').checked = false;
    if (colorFilter.includes('مشکی')) {
        const index = colorFilter.indexOf('مشکی');
        colorFilter.splice(index, 1);
    }
}; 
function uncheck13() {
    document.getElementById('سفید').style.display = 'none';
    document.getElementById('check_2').checked = false;
    if (colorFilter.includes('سفید')) {
        const index = colorFilter.indexOf('سفید');
        colorFilter.splice(index, 1);
    }
};
function uncheck14() {
    document.getElementById('آبی').style.display = 'none';
    document.getElementById('check_3').checked = false;
    if (colorFilter.includes('آبی')) {
        const index = colorFilter.indexOf('آبی');
        colorFilter.splice(index, 1);
    }
};
function uncheck15() {
    document.getElementById('سبز').style.display = 'none';
    document.getElementById('check_4').checked = false;
    if (colorFilter.includes('سبز')) {
        const index = colorFilter.indexOf('سبز');
        colorFilter.splice(index, 1);
    }
};
function uncheck16() {
    document.getElementById('صورتی').style.display = 'none';
    document.getElementById('check_5').checked = false;
    if (colorFilter.includes('صورتی')) {
        const index = colorFilter.indexOf('صورتی');
        colorFilter.splice(index, 1);
    }
};
function uncheck17() {
    document.getElementById('طوسی').style.display = 'none';
    document.getElementById('check_6').checked = false;
    if (colorFilter.includes('طوسی')) {
        const index = colorFilter.indexOf('طوسی');
        colorFilter.splice(index, 1);
    }
};
function uncheck18() {
    document.getElementById('زرد').style.display = 'none';
    document.getElementById('check_7').checked = false;
    if (colorFilter.includes('زرد')) {
        const index = colorFilter.indexOf('زرد');
        colorFilter.splice(index, 1);
    }
};
function uncheck19() {
    document.getElementById('سرمهای').style.display = 'none';
    document.getElementById('check_8').checked = false;
    if (colorFilter.includes('سرمهای')) {
        const index = colorFilter.indexOf('سرمهای');
        colorFilter.splice(index, 1);
    }
};
function uncheck20() {
    document.getElementById('کرم').style.display = 'none';
    document.getElementById('check_9').checked = false;
    if (colorFilter.includes('کرم')) {
        const index = colorFilter.indexOf('کرم');
        colorFilter.splice(index, 1);
    }
};
function uncheck21() {
    document.getElementById('بنفش').style.display = 'none';
    document.getElementById('check_10').checked = false;
    if (colorFilter.includes('بنفش')) {
        const index = colorFilter.indexOf('بنفش');
        colorFilter.splice(index, 1);
    }
};
function uncheck22() {
    document.getElementById('قرمز').style.display = 'none';
    document.getElementById('check_11').checked = false;
    if (colorFilter.includes('قرمز')) {
        const index = colorFilter.indexOf('قرمز');
        colorFilter.splice(index, 1);
    }
};
function uncheck23() {
    document.getElementById('نارنجی').style.display = 'none';
    document.getElementById('check_12').checked = false;
    if (colorFilter.includes('نارنجی')) {
        const index = colorFilter.indexOf('نارنجی');
        colorFilter.splice(index, 1);
    }
};
function uncheck24() {
    document.getElementById('بژ').style.display = 'none';
    document.getElementById('check_13').checked = false;
    if (colorFilter.includes('بژ')) {
        const index = colorFilter.indexOf('بژ');
        colorFilter.splice(index, 1);
    }
};
function uncheck25() {
    document.getElementById('آجری').style.display = 'none';
    document.getElementById('check_14').checked = false;
    if (colorFilter.includes('آجری')) {
        const index = colorFilter.indexOf('آجری');
        colorFilter.splice(index, 1);
    }
};
function uncheck26() {
    document.getElementById('ارغوانی').style.display = 'none';
    document.getElementById('check_15').checked = false;
    if (colorFilter.includes('ارغوانی')) {
        const index = colorFilter.indexOf('ارغوانی');
        colorFilter.splice(index, 1);
    }
};
function uncheck27() {
    document.getElementById('یشمی').style.display = 'none';
    document.getElementById('check_16').checked = false;
    if (colorFilter.includes('یشمی')) {
        const index = colorFilter.indexOf('یشمی');
        colorFilter.splice(index, 1);
    }
};
function uncheck28() {
    document.getElementById('زرشکی').style.display = 'none';
    document.getElementById('check_17').checked = false;
    if (colorFilter.includes('زرشکی')) {
        const index = colorFilter.indexOf('زرشکی');
        colorFilter.splice(index, 1);
    }
};
function uncheck29() {
    document.getElementById('عنابی').style.display = 'none';
    document.getElementById('check_18').checked = false;
    if (colorFilter.includes('عنابی')) {
        const index = colorFilter.indexOf('عنابی');
        colorFilter.splice(index, 1);
    }
};
function uncheck30() {
    document.getElementById('قهوهای').style.display = 'none';
    document.getElementById('check_19').checked = false;
    if (colorFilter.includes('قهوهای')) {
        const index = colorFilter.indexOf('قهوهای');
        colorFilter.splice(index, 1);
    }
};
function uncheck31() {
    document.getElementById('فیروزهای').style.display = 'none';
    document.getElementById('check_20').checked = false;
    if (colorFilter.includes('فیروزهای')) {
        const index = colorFilter.indexOf('فیروزهای');
        colorFilter.splice(index, 1);
    }
};
function uncheck32() {
    document.getElementById('فریسایز').style.display = 'none';
    document.getElementById('check_21').checked = false;
    if (sizeFilter.includes('فریسایز')) {
        const index = sizeFilter.indexOf('فریسایز');
        sizeFilter.splice(index, 1);
    }
};
function uncheck33() {
    document.getElementById('XS').style.display = 'none';
    document.getElementById('check_22').checked = false;
    if (sizeFilter.includes('XS')) {
        const index = sizeFilter.indexOf('XS');
        sizeFilter.splice(index, 1);
    }
};
function uncheck34() {
    document.getElementById('S').style.display = 'none';
    document.getElementById('check_23').checked = false;
    if (sizeFilter.includes('S')) {
        const index = sizeFilter.indexOf('S');
        sizeFilter.splice(index, 1);
    }
};
function uncheck35() {
    document.getElementById('M').style.display = 'none';
    document.getElementById('check_24').checked = false;
    if (sizeFilter.includes('M')) {
        const index = sizeFilter.indexOf('M');
        sizeFilter.splice(index, 1);
    }
};
function uncheck36() {
    document.getElementById('L').style.display = 'none';
    document.getElementById('check_25').checked = false;
    if (sizeFilter.includes('L')) {
        const index = sizeFilter.indexOf('L');
        sizeFilter.splice(index, 1);
    }
};
function uncheck37() {
    document.getElementById('XL').style.display = 'none';
    document.getElementById('check_26').checked = false;
    if (sizeFilter.includes('XL')) {
        const index = sizeFilter.indexOf('XL');
        sizeFilter.splice(index, 1);
    }
};
function uncheck38() {
    document.getElementById('XXL').style.display = 'none';
    document.getElementById('check_27').checked = false;
    if (sizeFilter.includes('XXL')) {
        const index = sizeFilter.indexOf('XXL');
        sizeFilter.splice(index, 1);
    }
};
function uncheck39() {
    document.getElementById('XXXL').style.display = 'none';
    document.getElementById('check_28').checked = false;
    if (sizeFilter.includes('XXXL')) {
        const index = sizeFilter.indexOf('XXXL');
        sizeFilter.splice(index, 1);
    }
};
function uncheck40() {
    document.getElementById('4XL').style.display = 'none';
    document.getElementById('check_29').checked = false;
    if (sizeFilter.includes('4XL')) {
        const index = sizeFilter.indexOf('4XL');
        sizeFilter.splice(index, 1);
    }
};
function uncheck41() {
    document.getElementById('34').style.display = 'none';
    document.getElementById('check_30').checked = false;
    if (sizeFilter.includes('34')) {
        const index = sizeFilter.indexOf('34');
        sizeFilter.splice(index, 1);
    }
};
function uncheck42() {
    document.getElementById('36').style.display = 'none';
    document.getElementById('check_31').checked = false;
    if (sizeFilter.includes('36')) {
        const index = sizeFilter.indexOf('36');
        sizeFilter.splice(index, 1);
    }
};
function uncheck43() {
    document.getElementById('38').style.display = 'none';
    document.getElementById('check_32').checked = false;
    if (sizeFilter.includes('38')) {
        const index = sizeFilter.indexOf('38');
        sizeFilter.splice(index, 1);
    }
};
function uncheck44() {
    document.getElementById('40').style.display = 'none';
    document.getElementById('check_33').checked = false;
    if (sizeFilter.includes('40')) {
        const index = sizeFilter.indexOf('40');
        sizeFilter.splice(index, 1);
    }
};
function uncheck45() {
    document.getElementById('42').style.display = 'none';
    document.getElementById('check_34').checked = false;
    if (sizeFilter.includes('42')) {
        const index = sizeFilter.indexOf('42');
        sizeFilter.splice(index, 1);
    }
};
function uncheck46() {
    document.getElementById('44').style.display = 'none';
    document.getElementById('check_35').checked = false;
    if (sizeFilter.includes('44')) {
        const index = sizeFilter.indexOf('44');
        sizeFilter.splice(index, 1);
    }
};
function uncheck47() {
    document.getElementById('46').style.display = 'none';
    document.getElementById('check_36').checked = false;
    if (sizeFilter.includes('46')) {
        const index = sizeFilter.indexOf('46');
        sizeFilter.splice(index, 1);
    }
};
function uncheck48() {
    document.getElementById('48').style.display = 'none';
    document.getElementById('check_37').checked = false;
    if (sizeFilter.includes('48')) {
        const index = sizeFilter.indexOf('48');
        sizeFilter.splice(index, 1);
    }
};
function uncheck49() {
    document.getElementById('50').style.display = 'none';
    document.getElementById('check_38').checked = false;
    if (sizeFilter.includes('50')) {
        const index = sizeFilter.indexOf('50');
        sizeFilter.splice(index, 1);
    }
};
function uncheck50() {
    document.getElementById('S-M').style.display = 'none';
    document.getElementById('check_39').checked = false;
    if (sizeFilter.includes('S-M')) {
        const index = sizeFilter.indexOf('S-M');
        sizeFilter.splice(index, 1);
    }
};
function uncheck51() {
    document.getElementById('M-L').style.display = 'none';
    document.getElementById('check_40').checked = false;
    if (sizeFilter.includes('M-L')) {
        const index = sizeFilter.indexOf('M-L');
        sizeFilter.splice(index, 1);
    }
};
function uncheck52() {
    document.getElementById('L-XL').style.display = 'none';
    document.getElementById('check_41').checked = false;
    if (sizeFilter.includes('L-XL')) {
        const index = sizeFilter.indexOf('L-XL');
        sizeFilter.splice(index, 1);
    }
};
function uncheck53() {
    document.getElementById('XL-XXL').style.display = 'none';
    document.getElementById('check_42').checked = false;
    if (brandFilter.includes('XL-XXL')) {
        const index = brandFilter.indexOf('XL-XXL');
        brandFilter.splice(index, 1);
    }
};
function uncheck54() {
    document.getElementById('jeanwest').style.display = 'none';
    document.getElementById('check_43').checked = false;
    if (brandFilter.includes('jeanwest')) {
        const index = brandFilter.indexOf('jeanwest');
        brandFilter.splice(index, 1);
    }
};
function uncheck55() {
    document.getElementById('lcwaikiki').style.display = 'none';
    document.getElementById('check_44').checked = false;
    if (brandFilter.includes('lcwaikiki')) {
        const index = brandFilter.indexOf('lcwaikiki');
        brandFilter.splice(index, 1);
    }
};
function uncheck56() {
    document.getElementById('koton').style.display = 'none';
    document.getElementById('check_45').checked = false;
    if (brandFilter.includes('koton')) {
        const index = brandFilter.indexOf('koton');
        brandFilter.splice(index, 1);
    }
};
function uncheck57() {
    document.getElementById('jpa').style.display = 'none';
    document.getElementById('check_46').checked = false;
    if (brandFilter.includes('jpa')) {
        const index = brandFilter.indexOf('jpa');
        brandFilter.splice(index, 1);
    }
};
function uncheck58() {
    document.getElementById('celebon').style.display = 'none';
    document.getElementById('check_47').checked = false;
    if (brandFilter.includes('celebon')) {
        const index = brandFilter.indexOf('celebon');
        brandFilter.splice(index, 1);
    }
};
function uncheck59() {
    document.getElementById('sarak').style.display = 'none';
    document.getElementById('check_48').checked = false;
    if (brandFilter.includes('sarak')) {
        const index = brandFilter.indexOf('sarak');
        brandFilter.splice(index, 1);
    }
};
function uncheck60() {
    document.getElementById('zahana').style.display = 'none';
    document.getElementById('check_49').checked = false;
    if (brandFilter.includes('zahana')) {
        const index = brandFilter.indexOf('zahana');
        brandFilter.splice(index, 1);
    }
};
function uncheck61() {
    document.getElementById('bodyspinner').style.display = 'none';
    document.getElementById('check_50').checked = false;
    if (brandFilter.includes('bodyspinner')) {
        const index = brandFilter.indexOf('bodyspinner');
        brandFilter.splice(index, 1);
    }
};
function uncheck62() {
    document.getElementById('salian').style.display = 'none';
    document.getElementById('check_51').checked = false;
    if (brandFilter.includes('salian')) {
        const index = brandFilter.indexOf('salian');
        brandFilter.splice(index, 1);
    }
};
function uncheck63() {
    document.getElementById('jootijeans').style.display = 'none';
    document.getElementById('check_52').checked = false;
    if (brandFilter.includes('jootijeans')) {
        const index = brandFilter.indexOf('jootijeans');
        brandFilter.splice(index, 1);
    }
};
function uncheck64() {
    document.getElementById('aroma').style.display = 'none';
    document.getElementById('check_53').checked = false;
    if (brandFilter.includes('aroma')) {
        const index = brandFilter.indexOf('aroma');
        brandFilter.splice(index, 1);
    }
};
function uncheck65() {
    document.getElementById('lrc').style.display = 'none';
    document.getElementById('check_54').checked = false;
    if (brandFilter.includes('lrc')) {
        const index = brandFilter.indexOf('lrc');
        brandFilter.splice(index, 1);
    }
};
function uncheck66() {
    document.getElementById('ramcott').style.display = 'none';
    document.getElementById('check_55').checked = false;
    if (brandFilter.includes('ramcott')) {
        const index = brandFilter.indexOf('ramcott');
        brandFilter.splice(index, 1);
    }
};
function uncheck67() {
    document.getElementById('jako').style.display = 'none';
    document.getElementById('check_56').checked = false;
    if (brandFilter.includes('jako')) {
        const index = brandFilter.indexOf('jako');
        brandFilter.splice(index, 1);
    }
};
function uncheck68() {
    document.getElementById('ziboo').style.display = 'none';
    document.getElementById('check_57').checked = false;
    if (brandFilter.includes('ziboo')) {
        const index = brandFilter.indexOf('ziboo');
        brandFilter.splice(index, 1);
    }
};
function uncheck69() {
    document.getElementById('only').style.display = 'none';
    document.getElementById('check_58').checked = false;
    if (brandFilter.includes('only')) {
        const index = brandFilter.indexOf('only');
        brandFilter.splice(index, 1);
    }
};
function uncheck70() {
    document.getElementById('ovs').style.display = 'none';
    document.getElementById('check_59').checked = false;
    if (brandFilter.includes('ovs')) {
        const index = brandFilter.indexOf('ovs');
        brandFilter.splice(index, 1);
    }
};
function uncheck71() {
    document.getElementById('superdry').style.display = 'none';
    document.getElementById('check_60').checked = false;
    if (brandFilter.includes('superdry')) {
        const index = brandFilter.indexOf('superdry');
        brandFilter.splice(index, 1);
    }
};
function uncheck72() {
    document.getElementById('newnil').style.display = 'none';
    document.getElementById('check_61').checked = false;
    if (brandFilter.includes('newnil')) {
        const index = brandFilter.indexOf('newnil');
        brandFilter.splice(index, 1);
    }
};
function uncheck73() {
    document.getElementById('alfonsi').style.display = 'none';
    document.getElementById('check_62').checked = false;
    if (brandFilter.includes('alfonsi')) {
        const index = brandFilter.indexOf('alfonsi');
        brandFilter.splice(index, 1);
    }
};
function uncheck74() {
    document.getElementById('rns').style.display = 'none';
    document.getElementById('check_63').checked = false;
    if (brandFilter.includes('rns')) {
        const index = brandFilter.indexOf('rns');
        brandFilter.splice(index, 1);
    }
};
function uncheck75() {
    document.getElementById('مجلسی').style.display = 'none';
    document.getElementById('check_64').checked = false;
    if (contextFilter.includes('مجلسی')) {
        const index = contextFilter.indexOf('مجلسی');
        contextFilter.splice(index, 1);
    }
};
function uncheck76() {
    document.getElementById('روزمره').style.display = 'none';
    document.getElementById('check_65').checked = false;
    if (contextFilter.includes('روزمره')) {
        const index = contextFilter.indexOf('روزمره');
        contextFilter.splice(index, 1);
    }
};
function uncheck77() {
    document.getElementById('راحتی').style.display = 'none';
    document.getElementById('check_66').checked = false;
    if (contextFilter.includes('راحتی')) {
        const index = contextFilter.indexOf('راحتی');
        contextFilter.splice(index, 1);
    }
};
function uncheck78() {
    document.getElementById('اداری').style.display = 'none';
    document.getElementById('check_67').checked = false;
    if (contextFilter.includes('اداری')) {
        const index = contextFilter.indexOf('اداری');
        contextFilter.splice(index, 1);
    }
};
function uncheck79() {
    document.getElementById('دانشگاهی').style.display = 'none';
    document.getElementById('check_68').checked = false;
    if (contextFilter.includes('دانشگاهی')) {
        const index = contextFilter.indexOf('دانشگاهی');
        contextFilter.splice(index, 1);
    }
};
function uncheck80() {
    document.getElementById('مهمانی').style.display = 'none';
    document.getElementById('check_69').checked = false;
    if (contextFilter.includes('مهمانی')) {
        const index = contextFilter.indexOf('مهمانی');
        contextFilter.splice(index, 1);
    }
};
function uncheck81() {
    document.getElementById('قیمت').style.display = 'none';
    priceDownRange = 0;
    priceUpRange = 5000000;
    document.getElementById('priceDownRange').value = '';
    document.getElementById('priceUpRange').value = '';

};





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
                                if (product.classList.contains(brandFilter[o])) {
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

//search box
function searchFunction() {
    const input = document.getElementById("myInput");
    
    let filter = input.value.toUpperCase();
    const filterArray = filter.split(' ');
    console.log(filter);
    console.log(filterArray);

    storeProducts.forEach((product) => {
        product.style.display = 'block';
        for (let i=0; i < filterArray.length; i++) {
            if (!product.classList.contains(filterArray[i])) {
                product.style.display = 'none';
            } 
            
        }
    })
    if (filter.length === 0) {
        storeProducts.forEach((product) => {
            product.style.display = 'block';
        })
    }
    
};

    const x = decodeURIComponent(location.search);

    const searchPart = x.split('=');
    searchPart.shift();
    const filterArray2 = searchPart[0].split('+');
    console.log(filterArray2);
    storeProducts.forEach((product) => {
        product.style.display = 'block';
        for (let i=0; i < filterArray2.length; i++) {
            if (!product.classList.contains(filterArray2[i])) {
                product.style.display = 'none';
            } 
            
        }
    })
    if (searchPart.length === 0) {
        storeProducts.forEach((product) => {
            product.style.display = 'block';
        })
    }

//sorting section
  
function sortListAscending() {
    String.prototype.toEnDigit = function() {
        return this.replace(/[\u06F0-\u06F9]+/g, function(digit) {
            var ret = '';
            for (var i = 0, len = digit.length; i < len; i++) {
                ret += String.fromCharCode(digit.charCodeAt(i) - 1728);
            }

            return ret*1000;
        });
    }; 
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("productList");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("SECTION");
      console.log(b);
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;        
        if (Number(b[i].getElementsByTagName('div')[0].getElementsByTagName('span')[1].innerHTML.toEnDigit()) > Number(b[i + 1].getElementsByTagName('div')[0].getElementsByTagName('span')[1].innerHTML.toEnDigit())) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  };

  function sortListDescending() {
    String.prototype.toEnDigit = function() {
        return this.replace(/[\u06F0-\u06F9]+/g, function(digit) {
            var ret = '';
            for (var i = 0, len = digit.length; i < len; i++) {
                ret += String.fromCharCode(digit.charCodeAt(i) - 1728);
            }

            return ret*1000;
        });
    }; 
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("productList");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("SECTION");
      console.log(b);
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;        
        if (Number(b[i].getElementsByTagName('div')[0].getElementsByTagName('span')[1].innerHTML.toEnDigit()) < Number(b[i + 1].getElementsByTagName('div')[0].getElementsByTagName('span')[1].innerHTML.toEnDigit())) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
    
    




