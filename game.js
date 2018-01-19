var random = Math.floor(Math.random() * 479);

var answer = words[random];

var value = document.getElementById('tekst').value;

/*
var begin = ['1'];
*/


console.log(random);

console.log(words[random]);

for (var i = 0; i < answer.length; i++) {
    console.log(answer.charAt(i));
}


p1.innerHTML = (answer.charAt(0));


if (p1.innerHTML == answer.charAt(0)) {
  document.getElementById('p1').style.backgroundColor = "red";
}

if (p11.innerHTML == answer.charAt(0)) {
  document.getElementById('p11').style.backgroundColor = "red";
}

if (p16.innerHTML == answer.charAt(0)) {
  document.getElementById('p16').style.backgroundColor = "red";
}

if (p21.innerHTML == answer.charAt(0)) {
  document.getElementById('p21').style.backgroundColor = "red";
}



function Hallo1() {
  var value = document.getElementById('tekst').value;
  for (var i = 0; i < value.length; i++) {
      console.log(value.charAt(i));
  }
  if (value.charAt(1) == answer.charAt(1)) {
    p7.innerHTML = (answer.charAt(1));
    document.getElementById('p7').style.backgroundColor = "red";
  }
  if (value.charAt(2) == answer.charAt(2)) {
    p8.innerHTML = (answer.charAt(2));
    document.getElementById('p8').style.backgroundColor = "red";
  }
  if (value.charAt(3) == answer.charAt(3)) {
    p9.innerHTML = (answer.charAt(3));
    document.getElementById('p9').style.backgroundColor = "red";
  }
  if (value.charAt(4) == answer.charAt(4)) {
    p10.innerHTML = (answer.charAt(4));
    document.getElementById('p10').style.backgroundColor = "red";
  }
  p1.innerHTML = value.charAt(0);
  p2.innerHTML = value.charAt(1);
  p3.innerHTML = value.charAt(2);
  p4.innerHTML = value.charAt(3);
  p5.innerHTML = value.charAt(4);
  p6.innerHTML = answer.charAt(0);
  if (p6.innerHTML == answer.charAt(0)) {
    document.getElementById('p6').style.backgroundColor = "red";
  }
  button.setAttribute("onclick", "Hallo2()");
  color0();
  color1();
  color2();
  color3();
  color4();
}


function Hallo2() {
  var value = document.getElementById('tekst').value;
  for (var i = 0; i < value.length; i++) {
      console.log(value.charAt(i));
  }
  if (value.charAt(1) == answer.charAt(1)) {
    p12.innerHTML = (answer.charAt(1));
    document.getElementById('p12').style.backgroundColor = "red";
  }
  if (value.charAt(2) == answer.charAt(2)) {
    p13.innerHTML = (answer.charAt(2));
    document.getElementById('p13').style.backgroundColor = "red";
  }
  if (value.charAt(3) == answer.charAt(3)) {
    p14.innerHTML = (answer.charAt(3));
    document.getElementById('p14').style.backgroundColor = "red";
  }
  if (value.charAt(4) == answer.charAt(4)) {
    p15.innerHTML = (answer.charAt(4));
    document.getElementById('p15').style.backgroundColor = "red";
  }
  p6.innerHTML = value.charAt(0);
  p7.innerHTML = value.charAt(1);
  p8.innerHTML = value.charAt(2);
  p9.innerHTML = value.charAt(3);
  p10.innerHTML = value.charAt(4);
  p11.innerHTML = answer.charAt(0);
  if (p11.innerHTML == answer.charAt(0)) {
    document.getElementById('p11').style.backgroundColor = "red";
  }
  button.setAttribute("onclick", "Hallo3()");
  color5();
  color6();
  color7();
  color8();
  color9();
}


function Hallo3() {
  var value = document.getElementById('tekst').value;
  for (var i = 0; i < value.length; i++) {
      console.log(value.charAt(i));
  }
  if (value.charAt(1) == answer.charAt(1)) {
    p17.innerHTML = (answer.charAt(1));
    document.getElementById('p17').style.backgroundColor = "red";
  }
  if (value.charAt(2) == answer.charAt(2)) {
    p18.innerHTML = (answer.charAt(2));
    document.getElementById('p18').style.backgroundColor = "red";
  }
  if (value.charAt(3) == answer.charAt(3)) {
    p19.innerHTML = (answer.charAt(3));
    document.getElementById('p19').style.backgroundColor = "red";
  }
  if (value.charAt(4) == answer.charAt(4)) {
    p20.innerHTML = (answer.charAt(4));
    document.getElementById('p20').style.backgroundColor = "red";
  }
  p11.innerHTML = value.charAt(0);
  p12.innerHTML = value.charAt(1);
  p13.innerHTML = value.charAt(2);
  p14.innerHTML = value.charAt(3);
  p15.innerHTML = value.charAt(4);
  p16.innerHTML = answer.charAt(0);
  if (p16.innerHTML == answer.charAt(0)) {
    document.getElementById('p16').style.backgroundColor = "red";
  }
  button.setAttribute("onclick", "Hallo4()");
  color10();
  color11();
  color12();
  color13();
  color14();
}


function Hallo4() {
  var value = document.getElementById('tekst').value;
  for (var i = 0; i < value.length; i++) {
      console.log(value.charAt(i));
  }
  if (value.charAt(1) == answer.charAt(1)) {
    p22.innerHTML = (answer.charAt(1));
    document.getElementById('p22').style.backgroundColor = "red";
  }
  if (value.charAt(2) == answer.charAt(2)) {
    p23.innerHTML = (answer.charAt(2));
    document.getElementById('p23').style.backgroundColor = "red";
  }
  if (value.charAt(3) == answer.charAt(3)) {
    p24.innerHTML = (answer.charAt(3));
    document.getElementById('p24').style.backgroundColor = "red";
  }
  if (value.charAt(4) == answer.charAt(4)) {
    p25.innerHTML = (answer.charAt(4));
    document.getElementById('p25').style.backgroundColor = "red";
  }
  p16.innerHTML = value.charAt(0);
  p17.innerHTML = value.charAt(1);
  p18.innerHTML = value.charAt(2);
  p19.innerHTML = value.charAt(3);
  p20.innerHTML = value.charAt(4);
  p21.innerHTML = answer.charAt(0);
  if (p21.innerHTML == answer.charAt(0)) {
    document.getElementById('p21').style.backgroundColor = "red";
  }
  button.setAttribute("onclick", "Hallo5()");
  color15();
  color16();
  color17();
  color18();
  color19();
}


function Hallo5() {
  var value = document.getElementById('tekst').value;
  for (var i = 0; i < value.length; i++) {
      console.log(value.charAt(i));
  }
  p21.innerHTML = value.charAt(0);
  p22.innerHTML = value.charAt(1);
  p23.innerHTML = value.charAt(2);
  p24.innerHTML = value.charAt(3);
  p25.innerHTML = value.charAt(4);
  color20();
  color21();
  color22();
  color23();
  color24();
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function color0() {
  if (p1.innerHTML == answer.charAt(0)) {
      document.getElementById('p1').style.backgroundColor = "red";
  } else if (p1.innerHTML == answer.charAt(1)) {
      document.getElementById('p1').style.backgroundColor = "yellow";
  } else if (p1.innerHTML == answer.charAt(2)) {
      document.getElementById('p1').style.backgroundColor = "yellow";
  } else if (p1.innerHTML == answer.charAt(3)) {
      document.getElementById('p1').style.backgroundColor = "yellow";
  } else if (p1.innerHTML == answer.charAt(4)) {
      document.getElementById('p1').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p1').style.backgroundColor = "blue";
 }
}

/*
if (answer.charAt(0) == answer.charAt(1)) {
  document.getElementById('p1').style.backgroundColor = "blue";
} else if (answer.charAt(0) == answer.charAt(2)) {
  document.getElementById('p1').style.backgroundColor = "blue";
} else if (answer.charAt(0) == answer.charAt(3)) {
  document.getElementById('p1').style.backgroundColor = "blue";
} else if (answer.charAt(0) == answer.charAt(4)) {
  document.getElementById('p1').style.backgroundColor = "blue";
}
*/


function color1() {
  if (p2.innerHTML == answer.charAt(1)) {
      document.getElementById('p2').style.backgroundColor = "red";
  } else if (p2.innerHTML == answer.charAt(0)) {
      document.getElementById('p2').style.backgroundColor = "yellow";
  } else if (p2.innerHTML == answer.charAt(2)) {
      document.getElementById('p2').style.backgroundColor = "yellow";
  } else if (p2.innerHTML == answer.charAt(3)) {
      document.getElementById('p2').style.backgroundColor = "yellow";
  } else if (p2.innerHTML == answer.charAt(4)) {
      document.getElementById('p2').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p2').style.backgroundColor = "blue";
  }
}


function color2() {
  if (p3.innerHTML == answer.charAt(2)) {
      document.getElementById('p3').style.backgroundColor = "red";
  } else if (p3.innerHTML == answer.charAt(0)) {
      document.getElementById('p3').style.backgroundColor = "yellow";
  } else if (p3.innerHTML == answer.charAt(1)) {
      document.getElementById('p3').style.backgroundColor = "yellow";
  } else if (p3.innerHTML == answer.charAt(3)) {
      document.getElementById('p3').style.backgroundColor = "yellow";
  } else if (p3.innerHTML == answer.charAt(4)) {
      document.getElementById('p3').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p3').style.backgroundColor = "blue";
  }
}


function color3() {
  if (p4.innerHTML == answer.charAt(3)) {
      document.getElementById('p4').style.backgroundColor = "red";
  } else if (p4.innerHTML == answer.charAt(0)) {
      document.getElementById('p4').style.backgroundColor = "yellow";
  } else if (p4.innerHTML == answer.charAt(1)) {
      document.getElementById('p4').style.backgroundColor = "yellow";
  } else if (p4.innerHTML == answer.charAt(2)) {
      document.getElementById('p4').style.backgroundColor = "yellow";
  } else if (p4.innerHTML == answer.charAt(4)) {
      document.getElementById('p4').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p4').style.backgroundColor = "blue";
  }
}


function color4() {
  if (p5.innerHTML == answer.charAt(4)) {
      document.getElementById('p5').style.backgroundColor = "red";
  } else if (p5.innerHTML == answer.charAt(0)) {
      document.getElementById('p5').style.backgroundColor = "yellow";
  } else if (p5.innerHTML == answer.charAt(1)) {
      document.getElementById('p5').style.backgroundColor = "yellow";
  } else if (p5.innerHTML == answer.charAt(2)) {
      document.getElementById('p5').style.backgroundColor = "yellow";
  } else if (p5.innerHTML == answer.charAt(3)) {
      document.getElementById('p5').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p5').style.backgroundColor = "blue";
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function color5() {
  if (p6.innerHTML == answer.charAt(0)) {
      document.getElementById('p6').style.backgroundColor = "red";
  } else if (p6.innerHTML == answer.charAt(1)) {
      document.getElementById('p6').style.backgroundColor = "yellow";
  } else if (p6.innerHTML == answer.charAt(2)) {
      document.getElementById('p6').style.backgroundColor = "yellow";
  } else if (p6.innerHTML == answer.charAt(3)) {
      document.getElementById('p6').style.backgroundColor = "yellow";
  } else if (p6.innerHTML == answer.charAt(4)) {
      document.getElementById('p6').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p6').style.backgroundColor = "blue";
  }
}

function color6() {
  if (p7.innerHTML == answer.charAt(1)) {
      document.getElementById('p7').style.backgroundColor = "red";
  } else if (p7.innerHTML == answer.charAt(0)) {
      document.getElementById('p7').style.backgroundColor = "yellow";
  } else if (p7.innerHTML == answer.charAt(2)) {
      document.getElementById('p7').style.backgroundColor = "yellow";
  } else if (p7.innerHTML == answer.charAt(3)) {
      document.getElementById('p7').style.backgroundColor = "yellow";
  } else if (p7.innerHTML == answer.charAt(4)) {
      document.getElementById('p7').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p7').style.backgroundColor = "blue";
  }
}


function color7() {
  if (p8.innerHTML == answer.charAt(2)) {
      document.getElementById('p8').style.backgroundColor = "red";
  } else if (p8.innerHTML == answer.charAt(0)) {
      document.getElementById('p8').style.backgroundColor = "yellow";
  } else if (p8.innerHTML == answer.charAt(1)) {
      document.getElementById('p8').style.backgroundColor = "yellow";
  } else if (p8.innerHTML == answer.charAt(3)) {
      document.getElementById('p8').style.backgroundColor = "yellow";
  } else if (p8.innerHTML == answer.charAt(4)) {
      document.getElementById('p8').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p8').style.backgroundColor = "blue";
  }
}


function color8() {
  if (p9.innerHTML == answer.charAt(3)) {
      document.getElementById('p9').style.backgroundColor = "red";
  } else if (p9.innerHTML == answer.charAt(0)) {
      document.getElementById('p9').style.backgroundColor = "yellow";
  } else if (p9.innerHTML == answer.charAt(1)) {
      document.getElementById('p9').style.backgroundColor = "yellow";
  } else if (p9.innerHTML == answer.charAt(2)) {
      document.getElementById('p9').style.backgroundColor = "yellow";
  } else if (p9.innerHTML == answer.charAt(4)) {
      document.getElementById('p9').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p9').style.backgroundColor = "blue";
  }
}


function color9() {
  if (p10.innerHTML == answer.charAt(4)) {
      document.getElementById('p10').style.backgroundColor = "red";
  }  else if (p10.innerHTML == answer.charAt(0)) {
      document.getElementById('p10').style.backgroundColor = "yellow";
  } else if (p10.innerHTML == answer.charAt(1)) {
      document.getElementById('p10').style.backgroundColor = "yellow";
  } else if (p10.innerHTML == answer.charAt(2)) {
      document.getElementById('p10').style.backgroundColor = "yellow";
  } else if (p10.innerHTML == answer.charAt(3)) {
      document.getElementById('p10').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p10').style.backgroundColor = "blue";
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function color10() {
  if (p11.innerHTML == answer.charAt(0)) {
      document.getElementById('p11').style.backgroundColor = "red";
  } else if (p11.innerHTML == answer.charAt(1)) {
      document.getElementById('p11').style.backgroundColor = "yellow";
  } else if (p11.innerHTML == answer.charAt(2)) {
      document.getElementById('p11').style.backgroundColor = "yellow";
  } else if (p11.innerHTML == answer.charAt(3)) {
      document.getElementById('p11').style.backgroundColor = "yellow";
  } else if (p11.innerHTML == answer.charAt(4)) {
      document.getElementById('p11').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p11').style.backgroundColor = "blue";
  }
}


function color11() {
  if (p12.innerHTML == answer.charAt(1)) {
      document.getElementById('p12').style.backgroundColor = "red";
  } else if (p12.innerHTML == answer.charAt(0)) {
      document.getElementById('p12').style.backgroundColor = "yellow";
  } else if (p12.innerHTML == answer.charAt(2)) {
      document.getElementById('p12').style.backgroundColor = "yellow";
  } else if (p12.innerHTML == answer.charAt(3)) {
      document.getElementById('p12').style.backgroundColor = "yellow";
  } else if (p12.innerHTML == answer.charAt(4)) {
      document.getElementById('p12').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p12').style.backgroundColor = "blue";
  }
}


function color12() {
  if (p13.innerHTML == answer.charAt(2)) {
      document.getElementById('p13').style.backgroundColor = "red";
  } else if (p13.innerHTML == answer.charAt(0)) {
      document.getElementById('p13').style.backgroundColor = "yellow";
  } else if (p13.innerHTML == answer.charAt(1)) {
      document.getElementById('p13').style.backgroundColor = "yellow";
  } else if (p13.innerHTML == answer.charAt(3)) {
      document.getElementById('p13').style.backgroundColor = "yellow";
  } else if (p13.innerHTML == answer.charAt(4)) {
      document.getElementById('p13').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p13').style.backgroundColor = "blue";
  }
}


function color13() {
  if (p14.innerHTML == answer.charAt(3)) {
      document.getElementById('p14').style.backgroundColor = "red";
  } else if (p14.innerHTML == answer.charAt(0)) {
      document.getElementById('p14').style.backgroundColor = "yellow";
  } else if (p14.innerHTML == answer.charAt(1)) {
      document.getElementById('p14').style.backgroundColor = "yellow";
  } else if (p14.innerHTML == answer.charAt(2)) {
      document.getElementById('p14').style.backgroundColor = "yellow";
  } else if (p14.innerHTML == answer.charAt(4)) {
      document.getElementById('p14').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p14').style.backgroundColor = "blue";
  }
}


function color14() {
  if (p15.innerHTML == answer.charAt(4)) {
      document.getElementById('p15').style.backgroundColor = "red";
  } else if (p15.innerHTML == answer.charAt(0)) {
      document.getElementById('p15').style.backgroundColor = "yellow";
  } else if (p15.innerHTML == answer.charAt(1)) {
      document.getElementById('p15').style.backgroundColor = "yellow";
  } else if (p15.innerHTML == answer.charAt(2)) {
      document.getElementById('p15').style.backgroundColor = "yellow";
  } else if (p15.innerHTML == answer.charAt(3)) {
      document.getElementById('p15').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p15').style.backgroundColor = "blue";
  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


function color15() {
  if (p16.innerHTML == answer.charAt(0)) {
      document.getElementById('p16').style.backgroundColor = "red";
  } else if (p16.innerHTML == answer.charAt(1)) {
      document.getElementById('p16').style.backgroundColor = "yellow";
  } else if (p16.innerHTML == answer.charAt(2)) {
      document.getElementById('p16').style.backgroundColor = "yellow";
  } else if (p16.innerHTML == answer.charAt(3)) {
      document.getElementById('p16').style.backgroundColor = "yellow";
  } else if (p16.innerHTML == answer.charAt(4)) {
      document.getElementById('p16').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p16').style.backgroundColor = "blue";
  }
}


function color16() {
  if (p17.innerHTML == answer.charAt(1)) {
      document.getElementById('p17').style.backgroundColor = "red";
  } else if (p17.innerHTML == answer.charAt(0)) {
      document.getElementById('p17').style.backgroundColor = "yellow";
  } else if (p17.innerHTML == answer.charAt(2)) {
      document.getElementById('p17').style.backgroundColor = "yellow";
  } else if (p17.innerHTML == answer.charAt(3)) {
      document.getElementById('p17').style.backgroundColor = "yellow";
  } else if (p17.innerHTML == answer.charAt(4)) {
      document.getElementById('p17').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p17').style.backgroundColor = "blue";
  }
}


function color17() {
  if (p18.innerHTML == answer.charAt(2)) {
      document.getElementById('p18').style.backgroundColor = "red";
  } else if (p18.innerHTML == answer.charAt(0)) {
      document.getElementById('p18').style.backgroundColor = "yellow";
  } else if (p18.innerHTML == answer.charAt(1)) {
      document.getElementById('p18').style.backgroundColor = "yellow";
  } else if (p18.innerHTML == answer.charAt(3)) {
      document.getElementById('p18').style.backgroundColor = "yellow";
  } else if (p18.innerHTML == answer.charAt(4)) {
      document.getElementById('p18').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p18').style.backgroundColor = "blue";
  }
}


function color18() {
  if (p19.innerHTML == answer.charAt(3)) {
      document.getElementById('p19').style.backgroundColor = "red";
  } else if (p19.innerHTML == answer.charAt(0)) {
      document.getElementById('p19').style.backgroundColor = "yellow";
  } else if (p19.innerHTML == answer.charAt(1)) {
      document.getElementById('p19').style.backgroundColor = "yellow";
  } else if (p19.innerHTML == answer.charAt(2)) {
      document.getElementById('p19').style.backgroundColor = "yellow";
  } else if (p19.innerHTML == answer.charAt(4)) {
      document.getElementById('p19').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p19').style.backgroundColor = "blue";
  }
}

function color19() {
  if (p20.innerHTML == answer.charAt(4)) {
      document.getElementById('p20').style.backgroundColor = "red";
  } else if (p20.innerHTML == answer.charAt(0)) {
      document.getElementById('p20').style.backgroundColor = "yellow";
  } else if (p20.innerHTML == answer.charAt(1)) {
      document.getElementById('p20').style.backgroundColor = "yellow";
  } else if (p20.innerHTML == answer.charAt(2)) {
      document.getElementById('p20').style.backgroundColor = "yellow";
  } else if (p20.innerHTML == answer.charAt(3)) {
      document.getElementById('p20').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p20').style.backgroundColor = "blue";
  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


function color20() {
  if (p21.innerHTML == answer.charAt(0)) {
      document.getElementById('p21').style.backgroundColor = "red";
  } else if (p21.innerHTML == answer.charAt(1)) {
      document.getElementById('p21').style.backgroundColor = "yellow";
  } else if (p21.innerHTML == answer.charAt(2)) {
      document.getElementById('p21').style.backgroundColor = "yellow";
  } else if (p21.innerHTML == answer.charAt(3)) {
      document.getElementById('p21').style.backgroundColor = "yellow";
  } else if (p21.innerHTML == answer.charAt(4)) {
      document.getElementById('p21').style.backgroundColor = "yellow";
  } else {
    document.getElementById('p21').style.backgroundColor = "blue";
  }
}

function color21() {
  if (p22.innerHTML == answer.charAt(1)) {
    document.getElementById('p22').style.backgroundColor = "red";
  } else if (p22.innerHTML == answer.charAt(0)) {
      document.getElementById('p22').style.backgroundColor = "yellow";
  } else if (p22.innerHTML == answer.charAt(2)) {
      document.getElementById('p22').style.backgroundColor = "yellow";
  } else if (p22.innerHTML == answer.charAt(3)) {
      document.getElementById('p22').style.backgroundColor = "yellow";
  } else if (p22.innerHTML == answer.charAt(4)) {
      document.getElementById('p22').style.backgroundColor = "yellow";
  } else {
    document.getElementById('p22').style.backgroundColor = "blue";
  }
}

function color22() {
  if (p23.innerHTML == answer.charAt(2)) {
      document.getElementById('p23').style.backgroundColor = "red";
  }  else if (p23.innerHTML == answer.charAt(0)) {
      document.getElementById('p23').style.backgroundColor = "yellow";
  } else if (p23.innerHTML == answer.charAt(1)) {
      document.getElementById('p23').style.backgroundColor = "yellow";
  } else if (p23.innerHTML == answer.charAt(3)) {
      document.getElementById('p23').style.backgroundColor = "yellow";
  } else if (p23.innerHTML == answer.charAt(4)) {
      document.getElementById('p23').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p23').style.backgroundColor = "blue";
  }
}

function color23() {
  if (p24.innerHTML == answer.charAt(3)) {
      document.getElementById('p24').style.backgroundColor = "red";
  } else if (p24.innerHTML == answer.charAt(0)) {
      document.getElementById('p24').style.backgroundColor = "yellow";
  } else if (p24.innerHTML == answer.charAt(1)) {
      document.getElementById('p24').style.backgroundColor = "yellow";
  } else if (p24.innerHTML == answer.charAt(2)) {
      document.getElementById('p24').style.backgroundColor = "yellow";
  } else if (p24.innerHTML == answer.charAt(4)) {
      document.getElementById('p24').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p24').style.backgroundColor = "blue";
  }
}

function color24() {
  if (p25.innerHTML == answer.charAt(4)) {
      document.getElementById('p25').style.backgroundColor = "red";
  } else if (p25.innerHTML == answer.charAt(0)) {
      document.getElementById('p25').style.backgroundColor = "yellow";
  } else if (p25.innerHTML == answer.charAt(1)) {
      document.getElementById('p25').style.backgroundColor = "yellow";
  } else if (p25.innerHTML == answer.charAt(2)) {
      document.getElementById('p25').style.backgroundColor = "yellow";
  } else if (p25.innerHTML == answer.charAt(3)) {
      document.getElementById('p25').style.backgroundColor = "yellow";
  } else {
      document.getElementById('p25').style.backgroundColor = "blue";
  }
}
