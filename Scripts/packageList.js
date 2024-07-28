const keyName = "CART";

let cartItemsRaw = localStorage.getItem(keyName);

if(cartItemsRaw.id == 0){
    document.getElementById("packageList").innerHTML =
        '\
    <section id="packageList"> \
                <div id="packageTitle"> \
                    <p> Your Chosen Package: </p> \
                </div> \
                <div id="packageImgDiv"> \
                    <img id="packageImg" src="/Assignment 1/Media/pexels-emma-bauso-1183828-2253870.jpg"> \
                </div> \
                <div id="packageName"> \
                    <p> Package 1 </p> \
                </div> \
                <div id="packagePrice"> \
                    <p> $1500 </p> \
                </div> \
            </section > \
'
}