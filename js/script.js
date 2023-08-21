
//  function handleClickBtn(event){
//   const productName = event.childNodes[3].childNodes[3].innerText;
//   // console.log(productName);
//   const productNameContainer = document.querySelector("#selected-Items")
//   const count = productNameContainer.childElementCount;
//  const p=document.createElement("p");
//  p.innerText= count+1+" "+productName;
//  productNameContainer.appendChild(p);

//  const productPrice = event.childNodes[3].childNodes[3].innerText;
// console.log(productPrice);

let total = 0;
function handleClickShowBtn(areaType) {
    const areaText = document.getElementById('text-area');
    const count = areaText.childElementCount;
    const itemName = areaType.childNodes[3].childNodes[3].innerText;
    const p = document.createElement('p');
    p.classList.add('text-area-desing')
    // p.innerHTML = ${count + 1}. ${itemName};
    areaText.appendChild(p);

    // price total 
    const price = areaType.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    console.log(total);

    document.getElementById('total-price').innerText = total;
    getAplyInputField();
    setFinalTotal();

}
function getAplyInputField() {
    const couponInput = document.getElementById('coupon-input');
    const couponBtn = document.getElementById('coupon-btn');
    if (total > 200) {
        couponBtn.removeAttribute('disabled');
        couponBtn.addEventListener('click', function () {
            const inputValue = couponInput.value.trim();
            if (inputValue === 'SELL200') {
                const discount = total * 0.2;
                const cardTotalTK = document.getElementById('card-total-price');
                cardTotalTK.innerText = (total - discount).toFixed(2);
                const cardDiscount = document.getElementById('card-discount');
                cardDiscount.innerText = discount.toFixed(2)
            }
            couponInput.value = ' '
        });
    }
    else {
        couponBtn.setAttribute('disabled', true);
    }
}

function setFinalTotal(total) {
    const purchaseBtn = document.getElementById('make-purchase-btn');
    if (total == 0) {
        purchaseBtn.setAttribute('disabled', true);
    }
    else {
        purchaseBtn.removeAttribute('disabled');
    }
}