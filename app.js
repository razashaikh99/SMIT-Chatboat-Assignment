let list = document.getElementById("list");
let typing = document.getElementById("typing");
let course = document.getElementById("course");
let icon = document.getElementById("icon");

function sendMessage() {
    let InpValue = event.target;
    if (event.keyCode === 13) {
        list.innerHTML += "<div class='ul-div'><li class='right-side'>" + InpValue.value + "</li></div>";
        typing.style.display = "block";
        icon.style.display = "none";
        if (
            ["hi", "hii", "heey", "hey", "hello", "hy", "oye"].indexOf(
                InpValue.value.toLowerCase()
            ) !== -1
        ) {
            setTimeout(function abc() {
                list.innerHTML += "<li class='left-side'>" + "Bura nahi manna yar ap musalman ho" + "</li>";
            }, 2000);
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side "> Salam kiya karo Bhai </li>`;
                typing.style.display = "none";
                icon.style.display = "block";
            }, 4000);
        } else if (
            [
                "salam", "asalam o alaikum", "asalamoalaikum", "asalamualaikum", "saalam", ""
            ].indexOf(InpValue.value.toLowerCase()) !== -1
        ) {
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side"> Walaikum As Salam </li>`;
                typing.style.display = "none";
                icon.style.display = "block";
            }, 2000);
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side "> Kia madad Chahiay apko ? </li>`;
                typing.style.display = "none";
                icon.style.display = "block";
            }, 4000);
        } else if (
            [
                "theek", "sahi hon", "thk", "thk hon", "mai theek", "set", "mast", "mai theek hoon", "allhamdullilah", "thik", "thek", "thik ho",
            ].indexOf(InpValue.value.toLowerCase()) !== -1
        ) {
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side"> Hmmm! Good Hogaya Baki mein apki kia help kar sakhta hon? </li>`;
                typing.style.display = "none";
                icon.style.display = "block";
            }, 2000);
        } else if (
            [
                "addmission", "mujhy addmission lena hai", "mujhy addmission chahiye", "addmission chahiay", "addmission lena hai", "addmission chahiye", "addmission chaiye"
            ].indexOf(InpValue.value.toLowerCase()) !== -1
        ) {
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side"> Hamare yaha Web & Mobile Development, Graphic Designing, or bhi courses hote hai ap bataye Kon se course me addmission lena hai apko?
        </li>`;
            }, 2000);
        } else if (
            [
                "web", "mobile", "web app", "web or app", "web and app", "web and mobile", "graphic", "graphics", "ai", "ai chatbot", "development", "python", ""
            ].indexOf(InpValue.value.toLowerCase()) !== -1
        ) {
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side"> Sir abhi addmission open nahi hoay hain, ap hamare FaceBook page ko follow kar lain jab bhi addmissions open hongye to ap ko update mil jaye gi, SHUKRIYA <br> <a style="color: yellow;" href="https://web.facebook.com/saylani.smit/?_rdc=1&_rdr">SMIT Facebook page</a></li>`;
                typing.style.display = "none";
                icon.style.display = "block";
            }, 2000);
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side "> Baki aik advice donga apko Karachi me rehte ho ap khayal rakha karo, Mamo har jaga ghom rahy hain     </li>`;
                typing.style.display = "none";
                icon.style.display = "block";
            }, 4000);
        } else if (
            [
                "ap ko kis ne banaya hai", "tmhe kis ne banaya hai", "kis ne banaya", "ap kon ho", "kn ho", "ap kn ho", "kn", "kon ho", 
            ].indexOf(InpValue.value.toLowerCase()) !== -1
        ) {
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side"> Main aik visual robot hon jo dikhta nhi hon or Mein aaj agar zinda hon to Sir Ghous ki waja se </li>`;
                typing.style.display = "none";
                icon.style.display = "block";
            }, 2000);
        }
        else {
            setTimeout(function abc() {
                list.innerHTML += `<li class="left-side"> Sorry! mein ap ki baat samajh nahi sakha... </li>`;
                typing.style.display = "none";
                icon.style.display = "block";
            }, 2000);
        }
        InpValue.value = "";
    }
}