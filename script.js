let month = ``;
let date = 0;
function zodiac() {
    month = document.getElementById("month").value;
    date = document.getElementById("date").value;
    if ((month == `MARCH` && date >= 21 && date <= 31) || (month == `APRIL` && date >= 1 && date <= 19)) {
        document.getElementById("zodiacsign").innerHTML = `Great you're an Aries`;
        document.getElementById("image").src = "https://i.pinimg.com/736x/c7/50/86/c75086b61bada761b35071b21b775cfe.jpg";
    } else if ((month == `APRIL` && date >= 20 && date <= 31 || month == `MAY` && date >= 1 && date <= 20)) {
        document.getElementById("zodiacsign").innerHTML = `Great you are a Tarus`;
        document.getElementById("image").src = "https://cdn4.vectorstock.com/i/1000x1000/84/33/blue-shining-cosmic-neon-zodiac-taurus-symbol-vector-22368433.jpg";
    } else if ((month == `MAY` && date >= 21 && date <= 31 || month == `JUNE` && date >= 1 && date <= 21)) {
        document.getElementById("zodiacsign").innerHTML = `Great you are a Gemini`;
        document.getElementById("image").src = "https://cdn4.vectorstock.com/i/1000x1000/84/28/blue-shining-cosmic-neon-zodiac-gemini-symbol-vector-22368428.jpg";
    } else if ((month == `JUNE` && date >= 22 && date <= 30 || month == `JULY` && date >= 1 && date <= 22)) {
        document.getElementById("zodiacsign").innerHTML = `Great you are a Cancer`;
        document.getElementById("image").src = "https://img.freepik.com/premium-vector/cancer-zodiac-sign-neon-icon-astrological-zodiac-signs-glowing-symbol_98480-3786.jpg?w=2000";
    } else if ((month == `JULY` && date >= 23 && date <= 31 || month == `AUGUST` && date >= 1 && date <= 22)) {
        document.getElementById("zodiacsign").innerHTML = `Great you are a Leo`;
        document.getElementById("image").src = "https://cdn2.vectorstock.com/i/1000x1000/84/11/blue-shining-cosmic-neon-zodiac-leo-symbol-vector-22368411.jpg";
    } else if ((month == `AUGUST` && date >= 23 && date <= 31 || month == `SEPTEMBER` && date >= 1 && date <= 22)) {
        document.getElementById("zodiacsign").innerHTML =`Great you are a Virgo`;
        document.getElementById("image").src = "https://cdn.vectorstock.com/i/1000x1000/84/20/blue-shining-cosmic-neon-zodiac-virgo-symbol-vector-22368420.webp";
    } else if ((month == `SEPTEMBER` && date >= 23 && date <= 30 || month == `OCTOBER` && date >= 1 && date <= 23)) {
        document.getElementById("zodiacsign").innerHTML = `Great you are a Libra`;
        document.getElementById("image").src = "https://www.shutterstock.com/image-illustration/zodiac-sign-glow-libra-blue-260nw-2050188647.jpg";
    } else if ((month == `OCTOBER` && date >= 24 && date <= 31 || month == `NOVEMBER` && date >= 1 && date <= 21)) {
        document.getElementById("zodiacsign").innerHTML = `Great you are a Scorpio`;
        document.getElementById("image").src = "https://cdn5.vectorstock.com/i/1000x1000/84/14/blue-shining-cosmic-neon-zodiac-scorpio-symbol-vector-22368414.jpg";
    } else if ((month == `NOVEMBER` && date >= 22 && date <= 30 || month == `DECEMBER` && date >= 1 && date <= 21)) {
        document.getElementById("zodiacsign").innerHTML = `Great you are a Saggitarus`;
        document.getElementById("image").src = "https://i.pinimg.com/474x/23/93/3f/23933f1c58763efc0fb6413661f20172.jpg";
    } else if((month == `DECEMBER` && date>= 22 && date<= 31 || month== `JANUARY` && date>= 1 && date<= 19)){
        document.getElementById("zodiacsign").innerHTML = `Great you are a Capricorn`;
        document.getElementById("image").src = "https://cdn1.vectorstock.com/i/1000x1000/84/15/blue-shining-cosmic-neon-zodiac-capricorn-symbol-vector-22368415.jpg";
    } else if((month == `JANUARY` && date>= 20 && date<= 31 || month == `FEBRUARY` && date>= 1 && date<= 18)){
        document.getElementById("zodiacsign").innerHTML = `Great you are an Aquarius`;
        document.getElementById("image").src = "https://thumbs.dreamstime.com/z/glowing-neon-sign-aquarius-blurred-bokeh-background-d-illustration-glowing-neon-sign-aquarius-blurred-bokeh-146052740.jpg?w=7680;"
    } else if((month == `FEBRUARY` && date>= 19 && date<= 29 || month== `MARCH` && date>= 1 && date<=20)){
        document.getElementById("zodiacsign").innerHTML =  `Great you are a Pisces`;
        document.getElementById("image").src = "https://cdn5.vectorstock.com/i/1000x1000/84/24/blue-shining-cosmic-neon-zodiac-pisces-symbol-vector-22368424.jpg";
    }
}